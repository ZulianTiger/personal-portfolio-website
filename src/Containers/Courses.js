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
const CourseRow = styled.div`
    width: 100%;
    padding-bottom: ${props => (props.last ? "50px" : "10px")};
    margin-top: 50px;
    flex-direction: row;
    display: flex;
    justify-content: space-evenly;
    @media only screen and (max-width: 1199px) {
        flex-direction: column;
        margin-top: -10px;
    } 
`
const CourseCard = styled.div`
    width: 40%;
    height: 300px;
    background-color: #2b2d35;
    flex-direction: row;
    display: flex;
    @media only screen and (max-width: 1199px) {
        width: 90%;
        margin-left: 5%;
        margin-top: 10px;
    } 
`
const LeftPart = styled.div`
    width: 50%;
    height: 100%;
    background-color: #2b2d35;
`
const RightPart = styled.div`
    width: 50%;
    height: 100%;
    background-color: #41424a;
`
const CourseImage = styled.img`
    width: 100%;
    border-radius: 5px;
`

export default class Courses extends Component {
    render() {
        return (
            <Section id="courses">
                <CoursesContainer>
                    <Title title="Courses" />
                    <CourseRow>
                        <CourseCard>
                            <LeftPart>
                                <CourseImage src={require('../Images/course1.jpg')} />
                            </LeftPart>
                            <RightPart>

                            </RightPart>
                        </CourseCard>
                        <CourseCard transition>
                            <LeftPart>
                                <CourseImage src={require('../Images/course2.jpg')} />
                            </LeftPart>
                            <RightPart>

                            </RightPart>
                        </CourseCard>
                    </CourseRow>
                    <CourseRow last>
                        <CourseCard>
                            <LeftPart>
                                <CourseImage src={require('../Images/course3.jpg')} />
                            </LeftPart>
                            <RightPart>

                            </RightPart>
                        </CourseCard>
                        <CourseCard>
                            <LeftPart>
                                <CourseImage src={require('../Images/course4.jpg')} />
                            </LeftPart>
                            <RightPart>

                            </RightPart>
                        </CourseCard>
                    </CourseRow>
                </CoursesContainer>
            </Section>
        )
    }
}