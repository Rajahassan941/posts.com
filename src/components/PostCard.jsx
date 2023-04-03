import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Col,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PostCard({data}) {
  return (
    <>
    <Col className='p-3' sm={6} md={6} lg={4} xl={3} >
            <Link style={{ textDecoration: "none" }} to={`/view-post/${data.id}`}>
                <Container>
                    <Card className='mt-4 text-center' style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>{data.title}</Card.Title>
                            {/* <Card.Text>
                                {data.body}
                                
                            </Card.Text> */}
                        </Card.Body>
                    </Card>
                </Container>
            </Link >
        </Col >
</>
  )
}

export default PostCard