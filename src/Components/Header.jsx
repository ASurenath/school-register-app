import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        // <div className='sticky-top'>
            <Navbar bg="dark" data-bs-theme="dark" className='w-100 sticky-top' expand='lg'>
                <Container>
                    <Navbar.Brand>
                        <Link to={'/'} style={{ textDecoration: 'none',color:"white" }}>
                            <h1><i className="fa-solid fa-graduation-cap"></i>Education</h1>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item className='px-3 py-1'><Link to={'/'}>Home</Link></Nav.Item>
                        <Nav.Item className='px-3 py-1'><Link to={'/register'}>Register</Link></Nav.Item>
                        <Nav.Item className='px-3 py-1'><Link to={'/students'}>Students</Link></Nav.Item>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        // </div>
    )
}

export default Header