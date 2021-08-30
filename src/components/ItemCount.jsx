import { useState } from 'react';

function ItemCount(){
    const stock=1;
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
          
        <button onClick={sumaCarro}> agrega al carrito</button> 
        <button onClick={restaCarro}> saca del carrito</button> 
        </div>
    );
    
    };
    export default ItemCount;
    