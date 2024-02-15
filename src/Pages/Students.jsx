import React, { useEffect, useState } from 'react'
import { Button, Container, Spinner, Table } from 'react-bootstrap'
import { getAllStudentsApi } from '../../apiServices/allApi'
import { Link } from 'react-router-dom'


function Students() {
    const [allStudents, setAllStudents] = useState([])
    const [loading, setLoading] = useState(true)
    const getStudentData = async () => {
        setLoading(true)
        try {
            const result = await getAllStudentsApi()
            if (result.status == 200) {
                setAllStudents(result.data)
                setLoading(false)
            }
            else {
                console.log(result);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => { getStudentData() }, [])
    return (
        <div>
            <Container fluid={'sm'} className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: '70vh' }}>
            <h1 className='text-center py-2'>Student details</h1>
                {!loading?
                <div style={{width:'90vw',overflowX:'auto'}}>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>DOB</th>
                                <th>Gender</th>
                                <th>Course</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allStudents?.length>0?allStudents?.map((i,index)=>
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{i.firstName}</td>
                                <td>{i.lastName}</td>
                                <td>{i.address}</td>
                                <td>{i.email}</td>
                                <td>{i.mobile}</td>
                                <td>{i.dob}</td>
                                <td>{i.gender}</td>
                                <td>{i.course}</td>
                            </tr>):
                            <div><h1 className='text-center text-dark'>No students found!</h1></div>                        
                            }
                        </tbody>
                    </Table>
                </div>:
                 <div className='text-center'>
                     <Spinner animation="border" role="status">
                     <span className="visually-hidden">Loading...</span>
                   </Spinner>
                 </div>
                }
                <Link to={'/'}><Button variant='dark' className='p-3 m-3 fw-bold'>Back</Button></Link>
            </Container>
        </div>
    )
}

export default Students