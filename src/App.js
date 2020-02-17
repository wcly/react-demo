import React from 'react';
import { Route, NavLink } from 'react-router-dom'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import './App.css'
import withScroll from './components/withScroll'
import RouteGuard from './components/RouteGuard'
import reset from './components/resetScroll'

// const Page1WithScroll = withScroll(Page1)
// const Page2WithScroll = withScroll(Page2)

function App() {
  return (
    <RouteGuard
      onChange={(prevLocation, location)=>{
        console.log(prevLocation, location)
        if(prevLocation.pathname !== location.pathname){
          reset()
        }
      }}
    >
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <nav className="nav">
        <NavLink to="/page1">页面1</NavLink>
        <NavLink to="/page2">页面2</NavLink>
      </nav>
    </RouteGuard>
  );
}

export default App;
