import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Navigation = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/login">login</Nav.Link>
            <Nav.Link href="/registration">
                Registration
            </Nav.Link>
            <Nav.Link href="/admin">
                Admin Dashboard 
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Navigation