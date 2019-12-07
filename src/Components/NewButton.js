import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    @media only screen and (max-width: 600px) {
        width: 100%;
        margin-left: 0px;
    }

    width: ${props => (props.containerWidth)};
    margin-left: ${props => (props.containerMargin)};
`
const Button = styled.button`
    width: 100%;
    height: 50px;
    background-color: ${props => (props.primary ? "green" : "transparent")};
    border-width: ${props => (props.primary ? "0px" : "2px")};
    border-color: green;
    border-radius: 20px;
    margin-top: 15px;
`
const Text = styled.text`
    color: ${props => (props.primary ? "white" : "green")};
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
        let temp = (100 - parseInt(containerWidth.split("%"))) / 2;
        containerMargin = temp.toString() + "%";
    }

    componentWillMount() {
        this.defaultWidth();
        this.calculateMargin();
    }

    render() {
        return (
            <Container containerWidth={containerWidth} containerMargin={containerMargin}>
                <Button primary={this.props.primary}>
                    <Text primary={this.props.primary}>
                        {this.props.text}
                    </Text>
                </Button>
            </Container>
        )
    }
}