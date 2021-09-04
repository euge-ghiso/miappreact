import { useState } from 'react';

 function ItemCount({ stock, initial,  onAdd }){
   
    const [estado, setEstado] = useState(0);
    const sinStock="tu pedido supera el stock!!   ";

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
    };
    
    return(
        <div>
          {estado >stock ? sinStock :  <p> hay stock</p> }
        <label> {estado}  unidades en pedido   </label>
        <label> {stock}   unidades en stock </label>
          
        <button onClick={sumaCarro}> +</button> 
        <label> {stock}   cantidad </label>
        <button onClick={restaCarro}> -</button> 
        </div>
    );
    
    };
    export default ItemCount;
    