import React, { Component } from 'react'
import reset from './resetScroll'

/**
 * 高阶组件实现滚动条复位
 * @param {*} Comp 
 */
export default function withScroll(Comp) {
    return class ScrollWrapper extends Component {
        componentDidMount() {
            reset()
        }


        render() {
            return (
                <Comp {...this.props} />
            )
        }
    }

}
