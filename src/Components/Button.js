import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    @media only screen and (max-width: 600px) {
        width: 100%;
        margin-left: 0px;
    }
    width: ${props => (props.containerWidth)};
    margin-left: ${props => (props.containerMargin)};
    padding-bottom: 30px;
    padding-top: 30px;
`
const Btn = styled.button`
    width: 100%;
    height: 50px;
    background-color: ${props => (props.primary ? "#cc0c1c" : "transparent")};
    border-width: ${props => (props.primary ? "0px" : "2px")};
    border-color: #cc0c1c;
    border-radius: 20px;
    margin-top: 15px;
`
const Text = styled.text`
    color: ${props => (props.primary ? "white" : "#cc0c1c")};
    font-size: 22;
    letter-spacing: 1.5px;
    text-align: center;
`

export default class Button extends Component {
    render() {
        return (
            <Container containerWidth={this.props.containerWidth} containerMargin={this.props.containerMargin}>
                <Btn primary={this.props.primary}>
                    <Text primary={this.props.primary}>
                        {this.props.text}
                    </Text>
                </Btn>
            </Container>
        )
    }
}