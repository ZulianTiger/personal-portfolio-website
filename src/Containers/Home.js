import React, { Component } from 'react'
import styled from 'styled-components'

import { Layout } from '../Components/Layout'
import { NavigationBar } from '../Components/NavigationBar'
import { Section } from "react-scroll-section"
import Button from '../Components/Button'

import landingimg from '../Images/landingbg.png'

const LandingBg = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: url(${landingimg});
    background-color: #2b2d35;
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