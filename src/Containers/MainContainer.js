import React, { Component } from 'react'

import Home from './Home'
import About from './About'

class MainContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <Home />
                <About />
            </React.Fragment>
        )
    }
}

export default MainContainer;