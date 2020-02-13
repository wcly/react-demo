import React from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Personal from './pages/Personal'
import AuthRoute from './components/AuthRoute'

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/login">登录页</Link></li>
          <li><Link to="/personal">个人中心</Link></li>
        </ul>
      </div>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          {/* 自定义授权路由，参数和Route一致，只需要将组件名替换成AuthRoute */}
          <AuthRoute path="/personal" component={Personal} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
