import { Route, Routes } from 'react-router-dom'
import './App.css'
import Posts from './pages/post/Posts'
import SinglePost from './pages/post/SinglePost'


function App() {
 

  return (
    <>
    <Routes>
      <Route exact path='/' element={<Posts/>}/>
      <Route path='/view-post/:id' element={<SinglePost/>}/>
    </Routes>
    </>
  )
}

export default App
