import React, { Component } from 'react'

import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Courses from './Courses'
import Contact from './Contact'
import Footer from './Footer'

class MainContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <Home />
                <About />
                <Portfolio />
                <Courses />
                <Footer />
            </React.Fragment>
        )
    }
}

export default MainContainer;