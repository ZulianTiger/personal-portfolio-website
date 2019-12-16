import React, { Component } from 'react'
import styled from 'styled-components'
import { Section } from "react-scroll-section"
import Title from '../Components/Title'

const CoursesContainer = styled.div`
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

export default class Courses extends Component {
    render() {
        return (
            <Section id="courses">
                <CoursesContainer>
                    <Title title="Courses" subtitle="Most recent" />
                </CoursesContainer>
            </Section>
        )
    }
}