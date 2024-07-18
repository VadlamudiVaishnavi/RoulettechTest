import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Recipe from './components/Recipe';
import items from './components/items';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Page title="Cookbook" component={Content} />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Page({ title, component: Component }) {
  return (
    <>
      <Header title={title} />
      <Component />
    </>
  );
}

function RecipePage() {
  let { id } = useParams();
  const item = items[id];
  return (
    <>
      <Header title={item.title} />
      <Recipe />
    </>
  );
}

export default App;