import React, { Component } from 'react'
import styled from 'styled-components'

import { Layout } from '../Components/Layout'
import { NavigationBar } from '../Components/NavigationBar'
import { Section } from "react-scroll-section"
import Button from '../Components/Button'

import landingimg1080 from '../Images/landingbg1080.png'
import landingimg1440 from '../Images/landingbg1440.png'
import landingimg2160 from '../Images/landingbg2160.png'

const LandingBg = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #2b2d35;
    background-image: url(${landingimg1080});
    @media only screen and (min-width: 1920px) {
        background-image: url(${landingimg1080});
    }
    @media only screen and (min-width: 2560px) {
        background-image: url(${landingimg1440});
    }
    @media only screen and (min-width: 3840px) {
        background-image: url(${landingimg2160});
    }
`
const Hello = styled.h3`
    margin-top: 10%;
    color: #fafafa;
    margin-left: 0px;
    margin-bottom: 0px;
`
const Title = styled.h1`
    margin-left: 0px;
    color: #cc0c1c;
    font-size: 128px;
    display: inline-block;
    font-weight: bold;
    @media only screen and (max-width: 600px) {
        font-size: 50px;
    }
`
const SubTitle = styled.h2`
    color: #fafafa;
    font-weight: bold;
    margin-left: 0px;
    width: 50%;
    font-size: 48px;
    @media only screen and (max-width: 600px) {
        font-size: 30px;
        width: 100%;
    }
    @media only screen and (min-width: 768px) {
        width: 100%;
    }
    @media only screen and (min-width: 992px) {
        width: 50%;
    }
`

class Home extends Component {
    render() {
        return (
            <Section id="home">
                <LandingBg>
                    <NavigationBar />
                    <Layout>
                        <Hello>Hello</Hello>
                        <Title>I'm Armin</Title>
                        <SubTitle>Web & Mobile Application Developer</SubTitle>
                        <Button primary text="About me" containerWidth="20%" />
                    </Layout>
                </LandingBg>
            </Section>

        )
    }
}

export default Home;