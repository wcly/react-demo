import React from 'react'
import { isLogin } from './../mock/auth'

export default function Home() {
    return (
        <div>
            <h1>首页，{isLogin ? '已登录' : '未登录'}</h1>
            <h5>当前页面有无登录都能进入</h5>
        </div>
    )
}
