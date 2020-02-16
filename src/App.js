import React from 'react';
import NavBar from './components/NavBar'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import Personal from './pages/Personal'
import './App.css'
import TransitionRoute from './components/TransitionRoute'

function App() {
  return (
    <div className="container">
    <Router>
      <NavBar />
      <div className="content">
        <TransitionRoute path="/" exact component={Home} />
        <TransitionRoute path="/home" exact component={News} />
        <TransitionRoute path="/personal" exact component={Personal} />
      </div>
    </Router>
    </div>
  );
}

export default App;
