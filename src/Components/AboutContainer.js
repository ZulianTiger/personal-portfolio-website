import React, { Component } from 'react'
import styled from 'styled-components'

import AboutImage from '../Components/AboutImage'
import AboutText from '../Components/AboutText'

const Container = styled.div`
    min-height: 100vh;
    background-color: #2b2d35;
    
    @media only screen and (max-width: 600px) {
        padding-left: 10px;
        padding-right: 10px;
    }
    @media only screen and (min-width: 600px) {
        padding-left: 20px;
        padding-right: 20px;
    }
    @media only screen and (min-width: 992px) {
        flex-direction: row;
        display: flex;
        padding-left: 100px;
        padding-right: 100px;
    }
`

export default class AboutContainer extends Component {
    render() {
        return (
            <Container>
                <AboutImage />
                <AboutText />
            </Container>
        )
    }
}