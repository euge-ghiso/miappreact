import {useContext} from "react";
//import useCartContext from '../../context/CartContext';
import CartContext from '../../context/CartContext';
import { useParams } from 'react-router-dom';




function Cart () {
    const {id} = useParams()
    const {addItem, setCarrito, carrito, removeItem} = useContext(CartContext)
    
    const itemId = 1
    const clear = () => setCarrito([])

    if(itemId === id) {

    return (
        <div>
           <p>{addItem}  </p> 
            <button onClick={clear}>Borrar items</button>
			{carrito.length > 0 && (
				carrito.map(element => {

					return (
						<div key={element.item.id}>
							<h1>{element.item.title}</h1>
							<button onClick={() => removeItem(element.item.id)}>Borrar del carrito</button>
						</div>)
                })
            )}
        </div>
    )}
    return (
        <p>Producto no encontrado</p>
    )

}
export default Cart;
