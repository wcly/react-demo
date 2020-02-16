import React from 'react'
import { Route } from 'react-router-dom'
import 'animate.css'
import { CSSTransition } from 'react-transition-group'

export default function TransitionRoute(props) {
    const { component: Component, ...rest } = props

    return (
        <Route {...rest}>
            {({ match }) => {
                return (
                    <CSSTransition
                        in={match ? true : false}
                        timeout={1000}
                        classNames={{
                            enter: "animated fast zoomIn",
                            exit: "animated fast zoomOut"
                        }}
                        mountOnEnter={true}
                        unmountOnExit={true}
                    >
                        <Component />
                    </CSSTransition>
                )
            }}
        </Route>
    )
}
