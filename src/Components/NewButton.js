import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
    width: 200px;
    height: 50px;
    background-color: green;
    margin-left: 20px;
    margin-right: 20px;
`
const Text = styled.text`
    color: white;
    font-size: 22px;
    letter-spacing: 1.5px;
    text-align: left;
`


export default class NewButton extends Component {

    render() {
        return (
            <Button>
                <Text>
                    {this.props.text}
                </Text>
            </Button>
        )
    }
}