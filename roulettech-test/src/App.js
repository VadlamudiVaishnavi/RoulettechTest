import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route exact path="/" component={Content} />
          <Route path="/recipe/:id" component={Recipe} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;