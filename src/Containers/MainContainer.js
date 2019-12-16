import React, { Component } from 'react'

import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'

class MainContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <Home />
                <About />
                <Portfolio />
                <Footer />
            </React.Fragment>
        )
    }
}

export default MainContainer;