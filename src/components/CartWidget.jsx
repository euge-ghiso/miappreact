
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import {CartContext} from '../context/CartContext';
import { useContext } from 'react';


const CartWidget = () => {

  let {iconCart,carrito} = useContext(CartContext)
    return (
      <>
        <Nav.Link className="ml-2">
                        <NavLink to={`/cart`} style={{textDecoration: 'none'}} className="text-secondary"  activeClassName="text-red">
                                { iconCart() } CARRITO  <img src="/imagenes/cart.png" />                          
                        </NavLink>                
       </Nav.Link> 
     
      </>
    )
  }
  
  export default CartWidget;