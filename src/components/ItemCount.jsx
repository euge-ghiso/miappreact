import { useState } from 'react';



 function ItemCount({ stock,cambioBoton,onAdd,initial}) {
   
    const [estado, setEstado] = useState(0)
    const sinStock="tu pedido supera el stock!!   "
    
    //const [estado, setEstado] = useState(0)
    
const sumaCarro=()=>{

  setEstado(estado+1)
}
    
    const restaCarro=()=>{
      if(estado > initial )
      setEstado(estado -1) 
        
    }
    const handlerOnAdd=()=>{
      onAdd(estado)
    setEstado(initial)
     
      
  }

  
       
       return(
      <>
        <div>
          {estado >stock ? sinStock :  <p> hay stock {stock} unidades</p> }

        <label> {estado}  unidades en pedido   </label>
       
        <button onClick={sumaCarro}> + </button> 
        
        <button onClick={restaCarro}> - </button> 

        {!cambioBoton&&
        <button className="btn btn-outline-primary btn-block" onClick={handlerOnAdd}>Agregar</button>
      }
        </div>  

         
      </>      
    );
}
export default ItemCount;
