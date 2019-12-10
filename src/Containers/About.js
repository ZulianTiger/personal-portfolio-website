import React, { Component } from 'react'
import { Section } from "react-scroll-section"

import AboutContainer from '../Components/AboutContainer'

class About extends Component {
    render() {
        return (
            <Section id="about">
                <AboutContainer />
            </Section>
        )
    }
}

export default About;