import {createContext,useState } from "react";

export const CartContext = createContext()

export function CartContextProvider({children}){
	
    const [carrito, setCarrito] = useState([])

	let addItem = (item, quantity) => {

		const index = carrito.findIndex(i => i.item.id === item.id)
  
		  if (index > -1) {
			const oldQy = carrito[index].quantity
  
			carrito.splice(index, 1)
			setCarrito([...carrito, { item, quantity: quantity + oldQy}])
		  }
		  else {
			setCarrito([...carrito, {item, quantity}])
		  }
	  }
  

	  const removeItem = (itemId) => {
        const deleteProduct = carrito.filter((prod) => prod.item.id !== itemId);
        setCarrito([...deleteProduct]);
      };

    const clear = () => setCarrito([])

	const iconCart = () => {
		return carrito.reduce( (acum, valor)=> acum + valor.quantity, 0) 
	
	  }
  
	  const precioTotal =()=>{
		return carrito.reduce((acum, valor)=>(acum + (valor.quantity * valor.item.precio)), 0) 
	  }
  

console.log(carrito)

//console.log(item.id)


return(
    <CartContext.Provider value={{carrito,addItem,iconCart,precioTotal, removeItem,setCarrito,clear}}>
{children}
    </CartContext.Provider>


)


}
export default CartContextProvider;