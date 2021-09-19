import { useContext } from 'react';
//import useCartContext from '../../context/CartContext';
import {CartContext} from '../../context/CartContext';
import { Link } from 'react-router-dom';




function Cart  () {
   
    let {carrito, clear,precioTotal,removeItem} = useContext(CartContext)
    
       

        return (
            <div>
               {carrito.map(pro =><div> 
                   <p>{ pro.item.nombre}</p>
                   <p>{ pro.quantity}</p>
                   <button onClick={removeItem} >Eliminar Producto</button>
                   </div>
                   )}
                {precioTotal()}
              

               {carrito > "0" ?
              
              <button onClick={clear} >Borrar listado Cart</button>
                 : <Link to='/'>
                 <button className="btn btn-outline-primary btn-block"> Carrito Vacio Comprar!</button>
             </Link>
              }
               
               
              
            </div>
        )
    }
    
export default Cart;
