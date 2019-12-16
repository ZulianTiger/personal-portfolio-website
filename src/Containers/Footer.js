import React, { Component } from 'react'
import styled from 'styled-components'
import { Section } from "react-scroll-section"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { Row } from 'react-bootstrap'


const FooterContainer = styled.div`
    background-color: #41424a;
    width: 100%;
    padding-bottom: 5vh;
    padding-top: 5vh;
`
const FooterInfoContainer = styled.div`
    height: 100%;
    width: 60%;
    margin-left: 20%;
    @media only screen and (max-width: 768px) {
        width: 100%;
        margin-left: 0px;
    }
    @media only screen and (min-width: 1200px) {
        width: 70%;
        margin-left: 15%;
    } 
`
const FooterEnd = styled.div`
    width: 100%;
    height: 1vh;
    background-color: #2b2d35;
`
const Logo = styled.img`
    height: 50px;
    width: auto;
`
const Signature = styled.img`
    margin-left: 10px;
    height: 20px;
    width: auto;
    margin-top: 20px;
`
const SignatureContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-bottom: 50px;
`
const LinksContainer = styled.div`
    width: 100%;
    flex-direction: row;
    display: flex;
    padding-bottom: 20px;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`
const SingleLinkContainer = styled.div`
    width: 287px;
    text-align: center;
    flex-direction: row;
    justify-content: center;
    display: flex;
    &:hover {
        a {
            color: #cc0c1c;
            font-size: 20px;
            text-decoration: none;
        }
    }

    @media only screen and (max-width: 768px) {
        padding-top: 15px;
    }
`
const Link = styled.a`
    color: #fafafa;
    font-weight: bold;
    margin-left: 10px;
    line-height: 22px;
    transition: 0.3s;
`

class Footer extends Component {
    render() {
        return (
            <Section id="footer">
                <FooterContainer>
                    <FooterInfoContainer>
                        <SignatureContainer>
                            <Logo src={require('../Images/logo.png')} />
                            <Signature src={require('../Images/signature.png')} />
                        </SignatureContainer>
                        <LinksContainer>
                            <SingleLinkContainer style={{flexDirection: "row", display: "flex"}}>
                                <i style={{color: "#fafafa", fontSize: 22}} class="fab fa-github"></i>
                                <Link href="http://www.github.com/ZulianTiger">github.com/ZulianTiger</Link>
                            </SingleLinkContainer>
                            <SingleLinkContainer style={{flexDirection: "row", display: "flex"}}>
                                <i style={{color: "#fafafa", fontSize: 22}} class="fab fa-linkedin-in"></i>
                                <Link href="https://www.linkedin.com/in/armin-sarajlic/">linkedin.com/armin-sarajlic</Link>
                            </SingleLinkContainer>
                            <SingleLinkContainer style={{flexDirection: "row", display: "flex"}}>
                                <i style={{color: "#fafafa", fontSize: 22}} class="fas fa-graduation-cap"></i>
                                <Link href="https://www.udemy.com/user/armin-sarajlic/">udemy.com/armin-sarajlic</Link>
                            </SingleLinkContainer>
                        </LinksContainer>
                    </FooterInfoContainer>
                </FooterContainer>
                <FooterEnd />
            </Section>
        )
    }
}

export default Footer;