import React, { PureComponent } from 'react'
import LeaveConfirm from './../components/LeaveConfirm'

export default class Page2 extends PureComponent {
    state = {
        val: ""
    }

    render() {
        return (
            <div>
                <LeaveConfirm show={this.state.val !== ""} message="跳转后当前页面数据会丢失，是否跳转"/>
                <textarea value={this.state.val} onChange={e => {
                    this.setState({
                        val: e.target.value
                    })
                }} />
            </div>
        )
    }
}
