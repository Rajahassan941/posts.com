import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                       <img
                            alt=""
                            src="https://png.pngtree.com/png-vector/20211106/ourmid/pngtree-letter-p-logo-png-image_4011792.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                       <a href="" className='logo'>POST.COM</a> 
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
  )
}

export default Header