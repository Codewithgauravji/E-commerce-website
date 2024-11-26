import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><span style={{color:"orangered",fontWeight:"800",fontSize:"36px"}}>Big</span> Deal <span style={{color:"orangered",fontWeight:"800",fontSize:"36px"}}>Sale</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Man's Wear</Nav.Link>
            <Nav.Link href="#action2">Women's Wear</Nav.Link>
            <Nav.Link href="#action2">Kid's Wear</Nav.Link>
            <Nav.Link href="#action2">Grocery</Nav.Link>
            <Nav.Link href="#action2">Mobiles</Nav.Link>
            <Nav.Link href="#action2">Toys & Baby</Nav.Link>
            <Nav.Link href="#action2">Medicines</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;