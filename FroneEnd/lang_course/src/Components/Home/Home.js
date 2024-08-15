import React, { useEffect } from 'react'
import { Button, Card, Container } from 'reactstrap'

function Home() {
  useEffect(()=>{
    document.title="Home";
  }, [])
  return (
    <div>
      <Card className='text-center'>
        <h1 className='display-3'>Some title here</h1>
        <p>learn front-end and back-end with React JS and Springboot JAVA with postgreSQL as Database</p>
        <Container>
            <Button color='primary' outline>
                Start Using
            </Button>
        </Container>
      </Card>
    </div>
  )
}

export default Home
