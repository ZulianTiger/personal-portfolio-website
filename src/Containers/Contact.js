import React, { Component } from 'react'
import styled from 'styled-components'
import { Section } from "react-scroll-section";

import ContactForm from '../Components/ContactForm'

const Container = styled.div`
    min-height: 100vh;
    background-color: #2b2d35;
    
    @media only screen and (max-width: 600px) {
        padding-left: 10px;
        padding-right: 10px;
    }
    @media only screen and (min-width: 600px) {
        padding-left: 20px;
        padding-right: 20px;
    }
    @media only screen and (min-width: 992px) {
        padding-left: 100px;
        padding-right: 100px;
    }
`

class Contact extends Component {
    render() {
        return (
            <Section id="contact">
                <Container>
                    <ContactForm />
                </Container>
            </Section>
        )
    }
}

export default Contact;

