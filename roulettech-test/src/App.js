import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Recipe from './components/Recipe';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Content />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
