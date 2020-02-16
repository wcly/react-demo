import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/" exact>首页</NavLink>
            <NavLink to="/home" exact>新闻页</NavLink>
            <NavLink to="/personal" exact>个人中心</NavLink>
        </nav>
    )
}
