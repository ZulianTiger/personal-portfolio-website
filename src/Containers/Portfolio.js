import React, { Component } from 'react'
import { Section } from "react-scroll-section"

import PortfolioContainer from '../Components/PortfolioContainer'

class Portfolio extends Component {
    render() {
        return (
            <Section id="portfolio">
                <PortfolioContainer />
            </Section>
        )
    }
}

export default Portfolio;