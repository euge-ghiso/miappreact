import { useState } from 'react';
import ItemDetail from '../ItemDetail';

 function ItemCount({ stock, initial }) {
   
    const [estado, setEstado] = useState(0)
    const sinStock="tu pedido supera el stock!!   "
    

    const sumaCarro=()=>{
      
      estado > stock ?(
     alert("no hay stock"))
    :   
    setEstado(estado +1)
    }
    
    const restaCarro=()=>{
        estado > 0 ?
      setEstado(estado -1) 
      : (console.log (stock))   
    }
    
    const onAdd =() =>{
      console.log(`la cantidad es: ${estado}`)
      alert(`la cantidad es: ${estado}`)
      
    }

        
       return(
      <>
        <div>
          {estado >stock ? sinStock :  <p> hay stock</p> }
        <label> {estado}  unidades en pedido   </label>
        <label> {stock}   unidades en stock </label>
          
        <button onClick={sumaCarro}> + </button> 
        
        <button onClick={restaCarro}> - </button> 
        <button className="btn btn-outline-primary btn-block" onClick={onAdd}>Agregar</button>
    
        </div>  

       <ItemDetail onAdd={onAdd} />   
      </>      
    )
}
export default ItemCount
