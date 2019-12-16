import React, { Component } from 'react'
import styled from 'styled-components'

import SectionTitle from './SectionTitle'

const Container = styled.div`
    
`
const SectionSubtitle = styled.h2`
    color: white;
    margin-top: 20px;
    @media only screen and (max-width: 600px) {
        font-size: 16px;
        margin-top: 5px;
    }
    @media only screen and (min-width: 600px) {
        font-size: 22px;
    }
    @media only screen and (min-width: 992px) {
        font-size: 20px;
    }
`

export default class Title extends Component {
    render() {
        return (
            <Container>
                <SectionTitle text={this.props.title} marginTop="5%" />
                <SectionSubtitle>
                    {this.props.subtitle}
                </SectionSubtitle>
            </Container>
        )
    }
}