import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { SectionLink } from "react-scroll-section";

import logoimg from '../Images/logo.png'

const Styles = styled.div`
    .navbar {
        background-color: transparent;
        width: 100%;
    }

    .navbar-brand, navbar-nav {
        color: #bbb;

        @media only screen and (max-width: 600px) {
            width: 0px;
        }

        &:hover {
            color: white;
        }
    }

    .nav-link {
        a {
            color: white;
            text-align: right;
            width: 95%;
            display: inline-block;
        }
    }
`;
const Logo = styled.img`
    height: 50px;
    width: auto;
`
const Signature = styled.img`
    margin-left: 10px;
    height: 20px;
    width: auto;
`


export const NavigationBar = () => (
    <Styles>
        <Navbar variant="dark" expand="lg">
            <Navbar.Brand href="/">
                <Logo src={require('../Images/logo.png')} />
                <Signature src={require('../Images/signature.png')} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">

                    <Nav.Item>
                        <Nav.Link>
                            <SectionLink section={"home"} >
                                {link => (
                                    <Link onClick={link.onClick} selected={link.isSelected}>
                                        Home
                                    </Link>)}
                            </SectionLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <SectionLink section={"about"} >
                                {link => (
                                    <Link onClick={link.onClick} selected={link.isSelected}>
                                        About
                                    </Link>)}
                            </SectionLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <SectionLink section={"contact"} >
                                {link => (
                                    <Link onClick={link.onClick} selected={link.isSelected}>
                                        Contact
                                    </Link>)}
                            </SectionLink>
                        </Nav.Link>
                    </Nav.Item>



                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles >
)