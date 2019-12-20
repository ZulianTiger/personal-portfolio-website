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
                <Button primary containerWidth="25%" containerMargin="0%" text="Download CV"/>
            </Container>
        )
    }
}