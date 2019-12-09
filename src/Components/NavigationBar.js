import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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



export const NavigationBar = () => (
    <Styles>
        <Navbar variant="dark" expand="lg">
            <Navbar.Brand href="/">Styled Components Test1</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/">Home</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/about">About</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/contact">Contact</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles >
)