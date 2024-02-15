import React, { useState } from 'react'
import { Button, Col, Container, InputGroup, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { registerApi } from '../../apiServices/allApi';
import { useNavigate } from 'react-router-dom';
import image from '../assets/registration.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const navigate = useNavigate()
    const [studentData, setStudentData] = useState({ firstName: "", lastName: "", address: "", email: "", gender: "", mobile: "", password: "", dob: "", course: "Computer Science" })
    const [validity, setValidity] = useState({ firstName: false, lastName: false, address: false, email: false, gender: false, mobile: false, password: false, dob: false, course: true })
    const [changed, setChanged] = useState({ firstName: false, lastName: false, address: false, email: false, gender: false, mobile: false, password: false, dob: false, course: true })
    // ___________________________________________________setData
    const setData = (e) => {
        const { name, value } = e.target
        setStudentData({ ...studentData, [name]: value })
        setChanged({ ...changed, [name]: true })
    }
    // ____________________________________________________________Validity check
    const checkValidity = (e) => {
        const { name, value } = e.target
        if (name == "firstName" || name == "lastName") {
            console.log("step1");
            if (value.match(/^[a-zA-Z ]+$/)) {
                console.log("step2");
                setValidity({ ...validity, [name]: true })
            }
            else {
                console.log("step3");
                setValidity({ ...validity, [name]: false })
            }
        }
        else if (name == 'email') {
            if (value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
                setValidity({ ...validity, [name]: true })
            }
            else {
                setValidity({ ...validity, [name]: false })
            }
        }
        else if (name == "mobile") {
            if (value.match(/^\d{10}$/)) {
                setValidity({ ...validity, [name]: true })
            }
            else {
                setValidity({ ...validity, [name]: false })
            }
        }
        else if (value == "") {
            setValidity({ ...validity, [name]: false })
        }
        else {
            setValidity({ ...validity, [name]: true })
        }
    }
    console.log(studentData);
    console.log("validity", validity);
    console.log("changed", changed);
    // ________________________________________________handle Register
    const handleRegister = async () => {
        if (changed.firstName && changed.lastName && changed.address && changed.email && changed.gender && changed.mobile && changed.password && changed.dob && changed.course &&
            validity.firstName && validity.lastName && validity.address && validity.email && validity.gender && validity.mobile && validity.password && validity.dob && validity.course) {
            try {
                const result = await registerApi(studentData)
                if (result.status == 200) {
                    toast.success("successfully registered")
                    navigate('/students')
                }
                else {
                    toast.warning(result.response.data)
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        else {
            toast.warning("Please fill the form with valid data")
        }
    }

    // ________________________________________________clearData
    const clearData = () => {
        setStudentData({ firstName: "", lastName: "", address: "", email: "", gender: "", mobile: "", password: "", dob: "", course: "Computer Science" })
        setValidity({ firstName: false, lastName: false, address: false, email: false, gender: false, mobile: false, password: false, dob: false, course: true })
        setChanged({ firstName: false, lastName: false, address: false, email: false, gender: false, mobile: false, password: false, dob: false, course: true })
    }

    return (
        <div >
            <Container fluid={'sm'} className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: '70vh' }}>
                <Row className='w-100'>
                    <h1 className='text-center py-3 text-dark'>Register Now!</h1>
                    <Col lg={4}>
                        <img src={image} className="img-fluid" alt="Registration image" />
                    </Col>
                    <Col lg={4}>
                        {changed.firstName && !validity.firstName && <p className='invalid'>Invalid first name</p>}
                        <FloatingLabel controlId="floatingFirstName" label="First name" className="mb-3" >
                            <Form.Control type="text" name='firstName' value={studentData.firstName} onChange={e => { setData(e); checkValidity(e) }} placeholder="First Name" isValid={validity.firstName} />
                        </FloatingLabel>

                        {changed.lastName && !validity.lastName && <p className='invalid'>Invalid last name</p>}
                        <FloatingLabel controlId="floatingLastName" label="Last name" className="mb-3" >
                            <Form.Control type="text" name='lastName' value={studentData.lastName} onChange={e => { setData(e); checkValidity(e) }} isValid={validity.lastName} placeholder="Last Name" />
                        </FloatingLabel>

                        {changed.email && !validity.email && <p className='invalid'>Invalid email</p>}
                        <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3" >
                            <Form.Control type="email" name='email' value={studentData.email} onChange={e => { setData(e); checkValidity(e) }} placeholder="Email" isValid={validity.email} />
                        </FloatingLabel>
                        {/* {!validity.gender&&<p className='invalid'></p>} */}
                        <div className='p-3 my-4'>
                            <span> Gender:&nbsp; &nbsp;&nbsp; </span>
                            <Form.Check inline label="Male" name="gender" value="Male" onChange={e => { setData(e), checkValidity(e) }} type="radio" id="Male" />
                            <Form.Check inline label="Female" name="gender" value="Female" onChange={e => { setData(e), checkValidity(e) }} type="radio" id="Female" />
                        </div>
                        {changed.mobile && !validity.mobile && <p className='invalid'>Invalid mobile number</p>}
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                            <FloatingLabel controlId="floatingMobile" label="Mobile" >
                                <Form.Control type="tel" name='mobile' value={studentData.mobile} onChange={e => { setData(e); checkValidity(e) }} isValid={validity.mobile} placeholder="Mobile" size="lg" />
                            </FloatingLabel>
                        </InputGroup>

                    </Col>
                    <Col lg={4}>

                        {changed.dob && !validity.dob && <p className='invalid'>Mandatory field</p>}
                        <FloatingLabel controlId="floatingDob" label="Date of birth" className="mb-3" >
                            <Form.Control type="date" name='dob' value={studentData.dob} onChange={e => { setData(e); checkValidity(e) }} placeholder="" isValid={validity.dob} />
                        </FloatingLabel>
                        {changed.password && !validity.password && <p className='invalid'>Password is required</p>}
                        <FloatingLabel controlId="floatingpassword" label="Password" className="mb-3" >
                            <Form.Control type="password" value={studentData.password} onChange={e => { setData(e); checkValidity(e) }} isValid={validity.password} name='password' placeholder="Password" />
                        </FloatingLabel>
                        {/* {changed.course&&!validity.course&&<p className='invalid'>Please Select a course</p>} */}
                        <InputGroup className="mb-3">
                            <InputGroup.Text >Course</InputGroup.Text>

                            <Form.Select size="lg" name="course" onChange={e => { setData(e) }}>
                                <option disabled defaultChecked>Course</option>
                                <option>Computer Science</option>
                                <option>Biology</option>
                                <option>Humanities</option>
                                <option>Commerce</option>
                            </Form.Select>
                        </InputGroup>
                        {changed.address && !validity.address && <p className='invalid'>Mandatory field</p>}

                        <FloatingLabel controlId="floatingAddress" label="Adress">
                            <Form.Control as="textarea" name='address' onChange={e => { setData(e); checkValidity(e) }} isValid={validity.address} placeholder="Adress" style={{ height: '80px' }} />
                        </FloatingLabel>

                        <div className='d-flex justify-content-evenly p-5'>
                            <Button variant='warning' onClick={clearData}>Cancel</Button>
                            <Button variant='success' onClick={handleRegister}>Register</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

export default Register