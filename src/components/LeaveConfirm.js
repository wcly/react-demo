import React, { PureComponent } from 'react'
import {withRouter} from 'react-router-dom'

class LeaveConfirm extends PureComponent {
    static defaultProps = {
        show: false, //当为true时添加阻塞
        message: "", //阻塞提示消息
    }

    componentDidUpdate(){
        this.handleBlock()
    }

    handleBlock(){
        if(this.props.show){
            this.unBlock = this.props.history.block(this.props.message)
        }else{
            this.unBlock && this.unBlock()
        }
    }
    
    componentWillUnmount(){
        this.unBlock && this.unBlock()
    }

    render() {
        return null
    }
}

export default withRouter(LeaveConfirm)