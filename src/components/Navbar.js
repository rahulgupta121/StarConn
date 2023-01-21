import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TopNavbar() {
  return (
    <>
        <Navbar className="bg-nav" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="m-auto">
            <Nav.Link className="navMenu" href="#home">GIF Maker </Nav.Link>
            <Nav.Link className="navMenu" href="#features">Video to  GIF</Nav.Link>
            <Nav.Link className="navMenu" href="#pricing">Resize</Nav.Link>
            <Nav.Link className="navMenu" href="#home">Rotate</Nav.Link>
            <Nav.Link className="navMenu" href="#features">Crop</Nav.Link>
            <Nav.Link className="navMenu" href="#pricing">Cut</Nav.Link>
            <Nav.Link className="navMenu" href="#home">Optimize</Nav.Link>
            <Nav.Link className="navMenu" href="#features">Effects</Nav.Link>
            <Nav.Link className="navMenu" href="#pricing">Split</Nav.Link>
            <Nav.Link className="navMenu" href="#home">Add text</Nav.Link>
            <Nav.Link className="navMenu" href="#features">WebP</Nav.Link>
            <Nav.Link className="navMenu" href="#pricing">APNG</Nav.Link>
            <Nav.Link className="navMenu" href="#pricing">AVIP</Nav.Link>
         
          </Nav>
      
        </Container>
      </Navbar>
    </>
  )
}

export default TopNavbar