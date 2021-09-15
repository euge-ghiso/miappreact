import {useContext} from "react";
//import useCartContext from '../../context/CartContext';
import CartContext from '../../context/CartContext';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount';


function Cart ({item)} {
    const {id} = useParams()
    const {addItem, setCarrito, carrito, removeItem} = useContext(CartContext)
    //tiene que venir del dato que eligio el usuario al agregar
    const itemId = item.id
    const clear = () => setCarrito([])

    if(itemId === id) {

    return (
        <div>
           <ItemCount addItem={addItem} />
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
