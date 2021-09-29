import { useContext } from 'react';
//import useCartContext from '../../context/CartContext';
import {CartContext} from '../../context/CartContext';
import { Link } from 'react-router-dom';




function Cart  () {

    
    let {carrito, clear,precioTotal,removeItem} = useContext(CartContext)
    
       
    


        return (
            <div>

                   
               {
                   <div>
                   

                  {!carrito.length ?
                   <Link to='/'>
                   <button className="btn btn-outline-danger btn-block"> Carrito Vacio Comprar!</button>
                   </Link>
                   :
              carrito.map(pro =>
                <div> 
                   <p>{ pro.item.nombre}</p>
                   <p>{ pro.quantity}</p>
                   <button onClick={()=> removeItem(pro.item.id)} >Eliminar Producto</button>
                   <button onClick={clear} >Borrar listado Cart</button>
                   </div>
                   )
                   
                   }
                {precioTotal()}

               

                </div>
        
                }

               
              
            </div>
        )
    }
    
export default Cart;
