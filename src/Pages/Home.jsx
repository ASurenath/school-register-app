import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import image from '../assets/blended-learning.png'


function Home() {
    return (
        <Container fluid={'sm'} className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: '70vh' }}>
            <Row>
                <Col lg={7} className='d-flex flex-column align-items-center justify-content-center'>
                <img src={image} className="img-fluid" alt="Registration image" />
                </Col>

                <Col lg={5} className='d-flex flex-column align-items-center justify-content-center pb-3'>
                <h1><i className="fa-solid fa-graduation-cap"></i>Education</h1>

                    <p className='text-center'>Lorem ipsum dolor, sit amet conse ctetur adipis icing elit. Nemo quos dicta labore ducimus dolorum porro explicabo repssumenda saepe, molestiae recusandae doloremque. Itaque.</p>
                    <Link to={'/register'} className='text-center'>
                        <Button variant='success'>Register Now!</Button>
                    </Link>  
                      </Col>
            </Row>
        </Container>
    )
}

export default Home