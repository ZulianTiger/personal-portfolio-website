import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
    @media only screen and (min-width: 992px) {
        width: 45%;
    }
`
const Image = styled.img`
    width: 50%;
    margin-left: 25%;
    height: auto;
    margin-top: 10%;
    @media only screen and (min-width: 992px) {
        margin-top: 20%;
    }
`

export default class AboutImage extends Component {
    render() {
        return (
            <Container>
                <Image src={require('../Images/coffee.png')} />
            </Container>
        )
    }
}