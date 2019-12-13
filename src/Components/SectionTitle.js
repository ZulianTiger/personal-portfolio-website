import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: inline-block;
    
    margin-top: ${props => (props.marginTop ? props.marginTop : "20%")};
    @media only screen and (max-width: 600px) {
        margin-top: 5%;
    }
    @media only screen and (min-width: 600px) {
        margin-top: 5%;
    }
    @media only screen and (min-width: 992px) {
        margin-top: ${props => (props.marginTop ? props.marginTop : "20%")};
    }
`
const Title = styled.h1`
    color: white;
    @media only screen and (max-width: 600px) {
        font-size: 20px;
    }
    @media only screen and (min-width: 600px) {
        font-size: 28px;
    }
    @media only screen and (min-width: 992px) {
        font-size: 36px;
    }
`
const Underline = styled.div`
    width: 75%;
    height: 5px;
    background-color: red;
    border-radius: 25px;
`

export default class SectionTitle extends Component {
    render() {
        return (
            <Container marginTop={this.props.marginTop}>
                <Title>
                    {this.props.text}    
                </Title>
                <Underline />
            </Container>
        )
    }
}