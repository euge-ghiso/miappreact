import { useState } from 'react';

 function ItemCount({ stock, initial,  onAdd })
 {
   
    const [count, setCount] = useState(initial);
    const sinStock="tu pedido supera el stock!!   ";

    const sumaCarro=()=>{
      
      setCount > stock ?(
     alert("no hay stock"))
    :   
    setCount(count +1)
    }
    
    const restaCarro=()=>{
        count > 0 ?
      setCount(count -1) 
      : (console.log (stock))   
    };

    
    const handlerOnAdd=()=>{
      onAdd(count)
      setCount(initial)
  }

    
    return(
        <div>
          {count >stock ? sinStock :  <p> hay stock</p> }
        <label> {count}  unidades en pedido   </label>
        <label> {stock}   unidades en stock </label>
        
        <button onClick={sumaCarro}> +</button> 
        <label> {stock}   cantidad </label>
        <button onClick={restaCarro}> -</button> <br />
        <button className="btn btn-outline-primary btn-block" onClick={handlerOnAdd}>Agregar</button>
        </div>           
    )
}


export default ItemCount

       