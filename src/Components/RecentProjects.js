import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
    @media only screen and (max-width: 600px) {
        padding-top: 10px;
        padding-bottom: 10px;
    }
    @media only screen and (min-width: 992px) {
        flex-direction: row;
        display: flex;
        justify-content: space-evenly;
    }
`
const CardContainer = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 25%;
    min-height: 50vh;
    background-color: rgba(255,255,255,0.1);
    transition: 0.4s;
    &:hover {
        background-color: #cc0c1c;
        width: 26%;
    }
    @media only screen and (max-width: 768px) {
        width: 90%;
        margin-left: 5%;
        &:hover {
        background-color: #cc0c1c;
        width: 100%;
        margin-left: 0px;
        }
    }
`
const CardTitle = styled.h3`
    color: white;
    text-align: center;
    margin-top: 20px;
`
const CardDescription = styled.p`
    color: white;
    text-align: center;
    margin-top: 20px;
    padding-bottom: 50px;
    padding-left: 10%;
    padding-right: 10%;
`
const CardImage = styled.img`
    width: 30%;
    margin-left: 35%;
    margin-top: 20px;
`

export default class SectionText extends Component {
    render() {
        return (
            <Container>
                <CardContainer>
                    <CardImage src={require('../Images/bbqlogo.png')} />
                    <CardTitle>
                        Card title.
                    </CardTitle>
                    <CardDescription>
                        It looks so good, I might as well not stop. Let's make some happy little clouds in our world. This is the fun part Be brave. You are only limited by your imagination. Zip. That easy.
                    </CardDescription>
                </CardContainer>
                <CardContainer>
                    <CardImage src={require('../Images/bbqlogo.png')} />
                    <CardTitle>
                        Card title.
                    </CardTitle>
                    <CardDescription>
                        It looks so good, I might as well not stop. Let's make some happy little clouds in our world. This is the fun part Be brave. You are only limited by your imagination. Zip. That easy.
                    </CardDescription>
                </CardContainer>
                <CardContainer>
                    <CardImage src={require('../Images/bbqlogo.png')} />
                    <CardTitle>
                        Card title.
                    </CardTitle>
                    <CardDescription>
                        It looks so good, I might as well not stop. Let's make some happy little clouds in our world. This is the fun part Be brave. You are only limited by your imagination. Zip. That easy.
                    </CardDescription>
                </CardContainer>
            </Container>
        )
    }
}