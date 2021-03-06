import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    @media only screen and (max-width: 600px) {
        width: 100%;
        margin-left: 0px;
    }

    @keyframes slideInFromLeft {
        0% {
            transform: translateX(-300%);
        }
        100% {
            transform: translateX(0);
        }
    }

    animation: 0.4s ease-out 0s 1 ${props => (props.slide ? "slideInFromLeft" : "none")};
    width: ${props => (props.containerWidth)};
    margin-left: ${props => (props.containerMargin)};
    padding-bottom: 30px;
    padding-top: 30px;
`
const Button = styled.button`
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

let containerWidth;
let containerMargin;

export default class NewButton extends Component {

    defaultWidth = () => {
        if (!this.props.containerWidth)
            containerWidth = "100%";
        else
            containerWidth = this.props.containerWidth;
    }

    calculateMargin = () => {
        if (!this.props.containerMargin) {
            let temp = (100 - parseInt(containerWidth.split("%"))) / 2;
            containerMargin = temp.toString() + "%";
        }
        else {
            containerMargin = this.props.containerMargin;
        }
    }

    componentWillMount() {
        this.defaultWidth();
        this.calculateMargin();
    }

    render() {
        return (
            <Container containerWidth={containerWidth} containerMargin={containerMargin} slide={this.props.slide}>
                <Button primary={this.props.primary}>
                    <Text primary={this.props.primary}>
                        {this.props.text}
                    </Text>
                </Button>
            </Container>
        )
    }
}