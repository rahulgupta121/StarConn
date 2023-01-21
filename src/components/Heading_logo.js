import React from 'react'
import { Container, Row } from 'react-bootstrap'
import mainLogo from "../assets/converterlly(1).png"
function Heading_logo() {
  return (
    <Container>
        <Row className='justify-content-center my-1'>
        <img alt='main logo' src={mainLogo} className="main-logo" />
    </Row>
    </Container>
    
  )
}

export default Heading_logo