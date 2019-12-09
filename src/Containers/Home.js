import React, { Component } from 'react'

import HomeTitle from '../Components/HomeTitle'
import NewButton from '../Components/NewButton'
import { Layout } from '../Components/Layout'
import { NavigationBar } from '../Components/NavigationBar'

import { Section } from "react-scroll-section";

class Home extends Component {
    render() {
        return (
            <Section id="home">
                <div style={{ height: "100vh", backgroundImage: "url(https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)" }}>
                    <NavigationBar />
                    <Layout>
                        <HomeTitle>This is a styled component header 1.</HomeTitle>
                        <NewButton primary slide text="Primary" containerWidth="30%" />
                        <NewButton text="Secondary" containerWidth="30%" />
                    </Layout>
                </div>
            </Section>

        )
    }
}

export default Home;