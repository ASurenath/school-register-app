import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='sticky-top'>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to={'/'} style={{ textDecoration: 'none',color:"white" }}>
                            <h1><i className="fa-solid fa-graduation-cap"></i>Education</h1>
                        </Link>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to={'/'}>Home</Link></Nav.Link>
                        <Nav.Link><Link to={'/register'}>Register</Link></Nav.Link>
                        <Nav.Link><Link to={'/students'}>Students</Link></Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header