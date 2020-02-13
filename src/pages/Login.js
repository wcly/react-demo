import React, { useState } from 'react'
import { isLogin, login, logout } from './../mock/auth'

export default function Login({ history, location }) {
    const [loginState, setLoginState] = useState(isLogin)

    const handleClick = () => {
        if (isLogin) {
            logout()
            setLoginState(false)
        } else {
            login()
            setLoginState(true)
            const returnUrl = location.state
            if (returnUrl){
                history.push(returnUrl)
            }else{
                history.push('/')
            }
        }
    }

    return (
        <div>
            <button onClick={handleClick}>{loginState ? '退出登录' : '登录'}</button>
            <h5>{loginState ? '已登录' : '点击按钮完成登录'}</h5>
        </div>
    )
}
