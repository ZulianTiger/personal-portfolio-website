import React, { Component } from 'react'

import HomeTitle from '../Components/HomeTitle'
import NewButton from '../Components/NewButton'
import { Layout } from '../Components/Layout'
import { NavigationBar } from '../Components/NavigationBar'

import { Section } from "react-scroll-section";

class Contact extends Component {
    render() {
        return (
            <Section id="contact">
                <div style={{ height: "100vh", backgroundImage: "url(https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)" }}>
                    <NavigationBar />
                    <Layout>
                        <HomeTitle>CONTACT PAGE.</HomeTitle>
                        <NewButton primary slide text="Primary" containerWidth="30%" />
                        <NewButton text="Secondary" containerWidth="30%" />
                    </Layout>
                </div>
            </Section>
        )
    }
}

export default Contact;

