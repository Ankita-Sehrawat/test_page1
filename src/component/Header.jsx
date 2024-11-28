import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/Logo.png';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary py-2">
                <Container className='py-1 '>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end align-items-center'>
                        <Nav className=" gap-4 align-items-center mt-4 mt-lg-0">
                            <Nav.Link href="/" className='fw-normal'>Home</Nav.Link>
                            <Nav.Link href="/blog" className='fw-normal'>Blog</Nav.Link>
                            <Nav.Link href="/about" className='fw-normal'>About us</Nav.Link>
                            <Nav.Link href="/contact" className='fw-normal'>Contact us</Nav.Link>
                            <button className='ms-2 fs_md fw-bold ff_sen bg-white sub_btn'>Subscribe</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header
