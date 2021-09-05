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
    
    <Nav className="me-auto">
    <Link to="/">
    <Navbar.Brand href="#home">Pachamama</Navbar.Brand>
      </Link>  
     
     
      <Link to="/categoria/plantas">
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