import React from 'react';
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import RouteGuard from './components/RouteGuard'
import { Route, Link } from 'react-router-dom'

function App() {
  const handleBeforeChange = (prevLocation, location, action, callback, unBlock) => {
    console.log("跳转源：", prevLocation.pathname)
    console.log("跳转目标：", location.pathname)
    console.log("跳转方式：", action)
    callback(true) //传入true跳转，false不跳转
    unBlock() //阻塞一次后取消阻塞，不再执行handleBeforeChange方法
  }

  const handleChange = (prevLocation, location, action, unListen) =>{
    console.log(`日志：路由从${prevLocation.pathname}页面跳转到${location.pathname}页面，跳转方式：${action}`)
    // unListen() //监听一次后取消监听
  }

  return (
    <RouteGuard onBeforeChange={handleBeforeChange} onChange={handleChange}>
      <ul>
        <li><Link to="/page1">页面1</Link></li>
        <li><Link to="/page2">页面2</Link></li>
      </ul>
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
    </RouteGuard>
  );
}

export default App;
