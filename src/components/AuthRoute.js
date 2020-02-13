import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { isLogin } from "../mock/auth";

export default function AuthRoute(props) {
    const { component: Component, render, children, ...rest } = props

    const handleRender = values =>{
        if(isLogin){
            console.log("登录成功")
            return <Component {...values}/>
        }else{
            console.log("未登录，跳回登录页面")
            return <Redirect to={{
                pathname: '/login',
                state: values.location.pathname
            }}/>
        }
    }

    return (
        <Route render={handleRender}/>
    )
}
