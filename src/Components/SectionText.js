import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: inline-block;
`
const Text = styled.p`
    color: white;
    margin-top: 20px;
    @media only screen and (max-width: 600px) {
        font-size: 16px;
    }
    @media only screen and (min-width: 600px) {
        font-size: 20px;
    }
    @media only screen and (min-width: 992px) {
        font-size: 22px;
    }
`

export default class SectionText extends Component {
    render() {
        return (
            <Container>
                <Text>
                    {this.props.text}    
                </Text>
            </Container>
        )
    }
}