import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';  // Removed 'Link'
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Recipe from './components/Recipe';
import axios from 'axios';  // Ensure axios is installed
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/recipes/')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the recipes!', error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Page title="Cookbook" component={Content} recipes={recipes} />} />
          <Route path="/recipe/:id" element={<RecipePage recipes={recipes} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Page({ title, component: Component, recipes }) {
  return (
    <>
      <Header title={title} />
      <Component recipes={recipes} />
    </>
  );
}

function RecipePage({ recipes }) {
  let { id } = useParams();
  const recipe = recipes[id];

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <>
      <Header title={recipe.title} />
      <Recipe recipe={recipe} />
    </>
  );
}

export default App;