import React, { PureComponent } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import GuardHelper from './GuardHelper'
import PropTypes from 'prop-types'

export default class RouteGuard extends PureComponent {
    static propTypes = {
        onBeforeChange: PropTypes.func, //路由跳转前执行的方法
        onChange: PropTypes.func, //路由变化监听
    }

    constructor(props) {
        super(props)
        this.prevLocation = {}
        this.location = {}
        this.action = ''
        this.unBlock = null
    }

    /**
     * 路由阻塞回调
     * @param {object} prevLocation 跳转源路由信息
     * @param {object} location 跳转目标路由信息
     * @param {string} action 跳转类型
     * @param {function} unBlock 取消阻塞
     * 
     * @memberof RouteGuard
     */
    handleBlock = (prevLocation, location, action, unBlock) => {
        this.prevLocation = prevLocation
        this.location = location
        this.action = action
        this.unBlock = unBlock
    }

    /**
     * 需要调用了阻塞方法才会执行该方法，即调用history.block(msg)
     * @param {string} msg 阻塞信息
     * @param {function} callback 回调函数， 传入true跳转，传入false不跳转
     * 
     * @memberof RouteGuard
     */
    handleConfirm = (msg, callback) => {
        if (this.props.onBeforeChange) {
            this.props.onBeforeChange(this.prevLocation, this.location, this.action, callback, this.unBlock)
        }
    }

    render() {
        return (
            <Router getUserConfirmation={this.handleConfirm}>
                {/* 获取router上下文 */}
                <GuardHelper onBlock={this.handleBlock} onListen={this.props.onChange}/>
                {this.props.children}
            </Router>
        )
    }
}