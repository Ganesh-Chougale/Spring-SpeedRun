import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardFooter, Button, Container} from "reactstrap";
import axios from 'axios';
import baseUrl from '../../API/BootAPI';

function Course({value, update}) {

  function deleteCourse(id){
    axios.delete(`${baseUrl}/courses/${id}`).then(
      (response)=>{
        alert(response);
        update(id);
      },
      (error)=>{
        alert(error);
      }
    )
  }

  return (
    <div>
      <Card>
        <CardBody>
        <CardSubtitle className="font-weight-bold">{value.title}</CardSubtitle>
        <CardText>{value.description}</CardText>
        <Container className='text-center'>
            <Button color='danger'
            onClick={()=>{deleteCourse(value.id)}}
            >Delete</Button>
            <Button color='primary ms-3'>Update</Button>
        </Container>
        </CardBody>
      </Card>
    </div>
  )
}

export default Course
