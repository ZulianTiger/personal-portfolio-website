import React, { Component } from 'react'
import styled from 'styled-components'
import { Section } from "react-scroll-section"
import Title from '../Components/Title'
import Button from '../Components/Button'

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
    background-color: #2b2d35;
    flex-direction: row;
    display: flex;
    transition: 0.4s;
    &:hover p {
        div {
            width: 80%;
            background-color: #fafafa;
        }
    }
    @media only screen and (max-width: 768px) {
        width: 90%;
        margin-left: 5%;
        margin-top: 10px;
        flex-direction: column;
    }
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
    @media only screen and (max-width: 768px) {
        width: 100%;
        background-color: #41424a;
    }
`
const RightPart = styled.div`
    width: 50%;
    height: 100%;
    background-color: #41424a;
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`
const CourseImage = styled.img`
    width: 100%;
`
const CourseTitle = styled.h5`
    margin-top: 20px;
    color: #fafafa;
    text-align: center;
    min-height: 48px;
`
const CourseDescription = styled.p`
    color: #c9c9c9;
    text-align: center;
    margin-top: 20px;
    padding-bottom: 20px;
    padding-left: 10%;
    padding-right: 10%;
    min-height: 92px;
`
const LearnMoreContainer = styled.div`
    justify-content: center;
    width: 100%;
    display: flex;
    padding-bottom: 20px;
`
const LearnMoreButton = styled.button`
    background-color: transparent;
    border-width: 0px;
`
const LearnMoreText = styled.p`
    color: white;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 0px;
`
const LearnMoreUnderline = styled.div`
    transition: 0.4s;
    width: 60%;
    height: 5px;
    background-color: #cc0c1c;
    border-radius: 20px;
`
const CourseFeatures = styled.p`
    color: #c9c9c9;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    margin-bottom: 0px;
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
                                <CourseFeatures>35 Lectures | 6,134 Students</CourseFeatures>
                            </LeftPart>
                            <RightPart>
                                <CourseTitle>Master React Native by Developing a Full Cross-Platform App</CourseTitle>
                                <CourseDescription>Learn how to design and create a cross platform mobile app with Adobe XD and React Native.</CourseDescription>
                                <LearnMoreContainer>
                                    <LearnMoreButton>
                                        <LearnMoreText>
                                            view on udemy
                                            <LearnMoreUnderline />
                                        </LearnMoreText>
                                    </LearnMoreButton>
                                </LearnMoreContainer>
                            </RightPart>
                        </CourseCard>
                        <CourseCard transition>
                        <LeftPart>
                                <CourseImage src={require('../Images/course2.jpg')} />
                                <CourseFeatures>10 Lectures | 869 Students</CourseFeatures>
                            </LeftPart>
                            <RightPart>
                                <CourseTitle>Unity: MySQL Database Management</CourseTitle>
                                <CourseDescription>Create a Login & Registration system for your game in 1 hour!</CourseDescription>
                                <LearnMoreContainer>
                                    <LearnMoreButton>
                                        <LearnMoreText>
                                            view on udemy
                                            <LearnMoreUnderline />
                                        </LearnMoreText>
                                    </LearnMoreButton>
                                </LearnMoreContainer>
                            </RightPart>
                        </CourseCard>
                    </CourseRow>
                    <CourseRow last>
                        <CourseCard>
                        <LeftPart>
                                <CourseImage src={require('../Images/course3.jpg')} />
                                <CourseFeatures>66 Lectures | 3,237 Students</CourseFeatures>
                            </LeftPart>
                            <RightPart>
                                <CourseTitle>Unity: Learn Android Game Development by recreating games</CourseTitle>
                                <CourseDescription>A guide on how to make the following games in Unity: Color Switch, aa, Flappy Bird, Dino T-Rex</CourseDescription>
                                <LearnMoreContainer>
                                    <LearnMoreButton>
                                        <LearnMoreText>
                                            view on udemy
                                            <LearnMoreUnderline />
                                        </LearnMoreText>
                                    </LearnMoreButton>
                                </LearnMoreContainer>
                            </RightPart>
                        </CourseCard>
                        <CourseCard>
                        <LeftPart>
                                <CourseImage src={require('../Images/course4.jpg')} />
                                <CourseFeatures>15 Lectures | 1,822 Students</CourseFeatures>
                            </LeftPart>
                            <RightPart>
                                <CourseTitle>IP Addressing for Beginners - CCNA Preparation</CourseTitle>
                                <CourseDescription>Everything a beginner needs to know about IP addresses and basics of Network Communication.</CourseDescription>
                                <LearnMoreContainer>
                                    <LearnMoreButton>
                                        <LearnMoreText>
                                            view on udemy
                                            <LearnMoreUnderline />
                                        </LearnMoreText>
                                    </LearnMoreButton>
                                </LearnMoreContainer>
                            </RightPart>
                        </CourseCard>
                    </CourseRow>
                </CoursesContainer>
            </Section>
        )
    }
}