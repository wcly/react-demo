import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

class GuardHelper extends PureComponent {
    static propTypes = {
        onBlock: PropTypes.func,
        onListen: PropTypes.func,
    }

    constructor(props) {
        super(props)
        this.unBlock = null
        this.unListen = null
    }

    componentDidMount() {
        const { history, onBlock, onListen } = this.props

        // 添加阻塞
        this.unBlock = history.block((newLocation, action) => {
            onBlock && onBlock(this.props.location, newLocation, action, this.unBlock)
            return ""
        })

        //添加一个监听器
        this.unListen = history.listen((newLocation, action) => {
            onListen && onListen(this.props.location, newLocation, action, this.unListen)
        })
    }

    componentWillUnmount() {
        this.unBlock() //取消阻塞
        this.unListen() //取消监听
    }

    render() {
        return null
    }
}

export default withRouter(GuardHelper)