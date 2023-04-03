import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { PostListAction } from '../../actions/PostActions'
import PostCard from '../../components/PostCard'
import { Row } from 'react-bootstrap'

function Posts() {
    const dispatch = useDispatch()
    const result = useSelector(state => state.PostReducer)
    const { PostList } = result

    useEffect(() => {
        dispatch(PostListAction())
    }, [])
  return (
    <div>
        <Header/>
            {console.log(PostList)}
        {PostList ? (
                <Row>
                    {
                        PostList.map(item => (<PostCard data={item} />))
                    }
                </Row>



            ) : 'nopost'
            }


        <Footer/>
    </div>
  )
}

export default Posts