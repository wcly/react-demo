import React from 'react'
import { logout } from './../mock/auth'

export default function Personal({ history }) {
    const handleClick = () => {
        logout()
        history.replace('./login')
    }

    return (
        <div>
            <h1>个人中心</h1>
            <h5>当前页面登录后才能进入</h5>
            <button onClick={handleClick}>退出登录</button>
        </div>
    )
}
