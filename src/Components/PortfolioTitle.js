import React, { Component } from 'react'
import styled from 'styled-components'

import SectionTitle from '../Components/SectionTitle'
import SectionText from '../Components/SectionText'
import Button from '../Components/Button'

const Container = styled.div`
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
    @media only screen and (min-width: 992px) {
        width: 55%;
    }
`

export default class PortfolioTitle extends Component {
    render() {
        return (
            <Container>
                <SectionTitle text="Portfolio" marginTop="5%"/>
            </Container>
        )
    }
}