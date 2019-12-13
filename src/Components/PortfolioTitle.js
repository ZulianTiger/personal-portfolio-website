import React, { Component } from 'react'
import styled from 'styled-components'

import SectionTitle from '../Components/SectionTitle'
import Button from '../Components/Button'

const Container = styled.div`
    
`
const SectionSubtitle = styled.h2`
    color: white;
    margin-top: 20px;
    @media only screen and (max-width: 600px) {
        font-size: 16px;
        margin-top: 5px;
    }
    @media only screen and (min-width: 600px) {
        font-size: 22px;
    }
    @media only screen and (min-width: 992px) {
        font-size: 20px;
    }
`

export default class PortfolioTitle extends Component {
    render() {
        return (
            <Container>
                <SectionTitle text="Portfolio" marginTop="5%" />
                <SectionSubtitle>
                    Most recent projects
                </SectionSubtitle>
            </Container>
        )
    }
}