import React from 'react';
import './App.css'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <Router>
      <nav className="nav">
        <NavLink to="/page1">页面1</NavLink>
        <NavLink to="/page2">页面1</NavLink>
      </nav>
      <div className="container">
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </div>
    </Router>
  );
}

export default App;
