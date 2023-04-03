import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Row,Col,Spinner,Container,Card } from 'react-bootstrap'


function SinglePost() {

    const result = useSelector(state => state.PostReducer)
    const { PostList } = result
    const params = useParams()
    const PostData=PostList.find(item=>item.id==params.id)
  return (
    <div>
    <Header/>
    <>
            {PostData ? (
                <Row>
                   
                    <Col >
                    
                    <Container>
                    <Card className='mt-4 text-center' style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title className='display-4 fw-bold mb-3 card-title'>{PostData.title}</Card.Title>
                            <Card.Text className='card-text lead fs-2 '>
                                {PostData.body}
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>

                    </Col>
                </Row>



            ) : <Spinner />
            }
        </>

    <Footer/>
    </div>
  )
}

export default SinglePost