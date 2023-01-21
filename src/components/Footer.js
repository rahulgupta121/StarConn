import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <>
       <Container fluid className='navTab py-5'>
        <Row>
            <Col lg={2} className="text-center">
            <h6><strong>Company</strong></h6>
            <h6>About Us</h6>
            <h6>Security</h6>
            </Col>
            <Col lg={2} className="text-center">
            <h6><strong>Resourse</strong></h6>
            <h6><a>Blog</a></h6>
            <h6><a>Status</a></h6>
            </Col>
            <Col lg={2} className="text-center">
            <h6><strong>Legal</strong></h6>
            <h6><a>Privacy</a></h6>
            <h6><a>Terms</a></h6>
            </Col>
            <Col lg={2} className="text-center">
            <h6><strong>Contact Us</strong></h6>
            <h6><a>Contact</a></h6>
            <h6><a>Mini Logo</a></h6>
            </Col>
            <Col lg={4} className="text-center">
            <h6>@ 2023 Converterlly</h6>
            <p>Mabe in Delhi, India</p>
            {/* <a>Mini Logo</a> */}
            </Col>
        </Row>
        <Row className=''>
            <p className='text-center py-3 my-2'>We've already<b> converted 12,334,888 files </b> with a total size of <b>112,333,093 TB</b></p>
        </Row>
        </Container> 
    </>
  )
}

export default Footer