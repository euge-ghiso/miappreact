import {createContext,useContext} from "react";
import { useState } from 'react';

const CartContext=createContext()

//export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}){

    const [carrito, setCarrito] = useState([]);



    const addItem=(item,quantity)=> {
        if(isInCart(item.id)) {
			const updateCart = [...carrito];

			updateCart.forEach((element) => {
				if(element.item.id === item.id) {
					element.quantity += quantity
				}
			})
			setCarrito(updateCart)
		} else {
			setCarrito([...carrito, {item, quantity}])
		}
        
    }
    
    const isInCart = (id) => {
		return carrito.find(element => element.item.id === id)
	}

	const removeItem = (itemId) => {
		const cartFilter = carrito.filter(element => element.item.id !== itemId)
		return setCarrito(cartFilter)
	}


    const clear = () => setCarrito([])





return(
    <CartContext.Provider value={{addItem, removeItem, carrito, setCarrito,clear}}>
{children}
    </CartContext.Provider>


)


}
export default CartContextProvider;