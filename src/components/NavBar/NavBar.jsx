import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';

function NavBar(){
    return (
        
            <>
  
  <Navbar bg="primary" variant="dark">
  <CartWidget/>
    <Container>
    <Navbar.Brand href="#home">Pachamama</Navbar.Brand>
    <Nav className="me-auto">
          
     
      <Nav.Link href="#home">Home</Nav.Link>
      <Link to="/category/:categoryId">
      <Nav.Link href="#features">Plantas</Nav.Link>
      </Link>
      <Link to="/categoria/semillas">
      <Nav.Link href="#pricing">Semillas</Nav.Link>
      </Link>
    </Nav>

    </Container>
  </Navbar>

</>

        
    )
}

export default NavBar;