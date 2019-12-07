import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
    width: 200px;
    height: 50px;
    background-color: ${props => (props.primary ? "green" : "transparent")};
    border-width: 2px;
    border-color: "green";
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 20px;
`
const Text = styled.text`
    color: ${props => (props.primary ? "white" : "green")};
    font-size: 22px;
    letter-spacing: 1.5px;
    text-align: left;
`


export default class NewButton extends Component {

    render() {
        return (
            <Button primary={this.props.primary}>
                <Text primary={this.props.primary}>
                    {this.props.text}
                </Text>
            </Button>
        )
    }
}