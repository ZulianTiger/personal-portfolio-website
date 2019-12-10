import React, { Component } from 'react'
import styled from 'styled-components'

import HomeTitle from '../Components/HomeTitle'
import NewButton from '../Components/NewButton'
import { Layout } from '../Components/Layout'
import { NavigationBar } from '../Components/NavigationBar'
import { Section } from "react-scroll-section";

import landingimg from '../Images/landingbg.png'

const LandingBg = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: url(${landingimg});
`

class Home extends Component {
    render() {
        return (
            <Section id="home">
                <LandingBg>
                    <NavigationBar />
                    <Layout>
                        <HomeTitle>This is a styled component header 1.</HomeTitle>
                        <NewButton primary slide text="Primary" containerWidth="30%" />
                        <NewButton text="Secondary" containerWidth="30%" />
                    </Layout>
                </LandingBg>
            </Section>

        )
    }
}

export default Home;