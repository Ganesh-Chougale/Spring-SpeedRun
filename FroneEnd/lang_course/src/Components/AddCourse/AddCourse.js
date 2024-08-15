import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Form, FormGroup, Button, Row } from 'reactstrap'
import baseUrl from '../../API/BootAPI';

function AddCourse() {

    // useEffect
    useEffect(()=>{
        document.title="Add Course";
      }, [])

      // useState
      const [course, setCourse] = useState({});


      //handleSubmit
      function handleSubmit(e){
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
      }

      // post data function
      function postDataToServer(data){
        axios.post(`${baseUrl}/courses`, data).then(
            (response)=>{
                console.log(response);
                console.log("Success");
            },
            (error)=>{
                console.log(error);
                console.log("Unsuccessful");
            }
        )
      }

      
  return (
    <div >
    <h1>Fill Details</h1>
    <Row>
    <Form className='md-12' onSubmit={handleSubmit}>
        <FormGroup>
            <label htmlFor='courseId' style={{width:"20%"}}>Course Id</label> 
            <input type='text' id='courseId' name='courseId'
            placeholder='Enter course id' style={{width:"50%"}}
            onChange={(e)=>{
                setCourse({...course, id:e.target.value })
            }}></input>
        </FormGroup>
        <FormGroup>
            <label htmlFor='courseTitle'  style={{width:"20%"}}>Course Title</label> 
            <input type='text' id='courseTitle' name='courseTitle'
            placeholder='Enter course Title' style={{width:"50%"}}
            onChange={(e)=>{
                setCourse({...course, title:e.target.value})
            }}></input>
        </FormGroup>
        <FormGroup>
            <label htmlFor='courseDesc' style={{width:"20%"}}>Course Description</label> 
            <input type='text' id='courseDesc' name='courseDesc'
            placeholder='Enter course Description' style={{height:"80px", width:"50%"}}
            onChange={(e)=>{
                setCourse({...course, description:e.target.value})
            }}></input>
        </FormGroup>

        <Container>
            <Button type='submit' color='primary' >Add Course</Button>
            <Button color='warning ms-3' type='reset'>Clear</Button>
        </Container>
    </Form>
    </Row>
    </div>
  )
}

export default AddCourse
