import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';
import {CartContext} from '../../context/CartContext';
import { useContext } from 'react';




function NavBar(){

  const {iconCart} = useContext(CartContext)

  console.log(iconCart())

    return (
        
            <>
  
  <Navbar bg="primary" variant="dark">
  <CartWidget/>
    <Container>
    
    <Nav className="me-auto">
    <Link to="/">
    <Navbar.Brand href="#home">Pachamama</Navbar.Brand>
      </Link>  
     
     
      <Link to={"/category/planta"}>
      <Nav.Link href="#features">Plantas</Nav.Link>
      </Link>
      <Link to={"/category/semilla"}>
      <Nav.Link href="#pricing">Semillas</Nav.Link>
      </Link>

      <Nav.Link className="ml-2">
                        <NavLink to={`/cart`} style={{textDecoration: 'none'}} className="text-secondary"  activeClassName="text-red">
                                { iconCart() } cart                            
                        </NavLink>                
       </Nav.Link> 

    </Nav>

    </Container>
  </Navbar>

</>

        
    )
}

export default NavBar;