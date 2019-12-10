import React, { Component } from 'react'

import Home from './Home'
import About from './About'
import Contact from './Contact'

class MainContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <Home />
                <About />
                <Contact />
            </React.Fragment>
        )
    }
}

export default MainContainer;