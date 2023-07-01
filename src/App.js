import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Guide from './pages/Guide';
import Information from './pages/Information';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/information' component={Information} />
          <Route path='/guide' component={Guide} />
        </Switch>
      </Router>
    </>
  );
}

export default App;