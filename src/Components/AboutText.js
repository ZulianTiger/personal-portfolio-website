import React, { Component } from 'react'
import styled from 'styled-components'

import SectionTitle from '../Components/SectionTitle'
import SectionText from '../Components/SectionText'
import Button from '../Components/Button'

const Container = styled.div`
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
    @media only screen and (min-width: 992px) {
        width: 55%;
    }
`
const ButtonContainer = styled.div`
    @media only screen and (max-width: 600px) {
        width: 100%;
        margin-left: 0px;
    }
    width: ${props => (props.containerWidth)};
    margin-left: ${props => (props.containerMargin)};
    background-color: #cc0c1c;
    border-radius: 20px;
    margin-top: 50px;

    a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;

        &:hover {
            text-decoration: none;
        }
        &:active {
            p {
                font-weight: bold;
            }
        }

        p {
            margin-bottom: 0px;
            padding-top: 12.5px;
            padding-bottom: 12.5px;
            color: #fafafa;
            font-size: 22;
            letter-spacing: 1.5px;
        }
    }
`

export default class AboutText extends Component {
    render() {
        return (
            <Container>
                <SectionTitle text="About me" />
                <SectionText
                    text="Experienced software developer, computer technician, and hardware enthusiast. Currently specialized in Mobile application development, including both iOS and Android, using the React Native JavaScript framework. My other skills include Web Development, Game Development, Audio & Video production, and teaching online."
                />
                <SectionText
                    text="I teach over 10,000 students across four high rated courses ranging from Computer Networks to Game Development, and React Native mobile app development."
                />
                <ButtonContainer containerWidth="25%">
                    <a href={require('../Files/cv.pdf')} download>
                        <p>Download CV</p>
                    </a>
                </ButtonContainer>
            </Container>
        )
    }
}