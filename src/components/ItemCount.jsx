import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';



 function ItemCount({ stock,cambioBoton,onAdd,initial,clear}) {
   
    const [estado, setEstado] = useState(0)
    const sinStock="tu pedido supera el stock!!   "
    
    //const [estado, setEstado] = useState(0)

    const {addItem} = useContext(CartContext);
    
const sumaCarro=()=>{

  setEstado(estado+1)
}
    
    const restaCarro=()=>{
      if(estado > initial )
      setEstado(estado -1) 
        
    }
    const handlerOnAdd=()=>{
      onAdd(estado)
    //setEstado(initial)
    
     addItem({Producto: 'Producto'},1);
    
  }

       
       return(
      <>
        <div>
          {estado >stock ? sinStock :  <p> hay stock {stock} unidades</p> }

        <label> {estado}  unidades en pedido   </label>
         
        <button onClick={restaCarro}> - </button> 
        <button onClick={sumaCarro}> + </button> 

        {!cambioBoton&&
        <button className="btn btn-outline-primary btn-block" onClick={handlerOnAdd}>Agregar</button>
      }

        <button onClick={clear}>Vaciar Carrito</button>
        </div>  

         
      </>      
    );
}
export default ItemCount;
