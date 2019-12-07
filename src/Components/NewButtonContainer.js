import React, { Component } from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
    width: 50%;
    background-color: red;
`


export default class NewButtonContainer extends Component {

    render() {
        return (
            <ButtonContainer width={this.props.width}>

            </ButtonContainer>
        )
    }
}