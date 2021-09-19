import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';




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
    //setEstado(initial)
    window.confirm('Esta seguro?')
     
    
  }

       
       return(
      <>
        <div>
          {estado >stock ? sinStock :  <p> hay stock {stock} unidades</p> }

        <label> {estado}  unidades en pedido   </label>
         
        <button onClick={restaCarro}> - </button> 
        <button onClick={sumaCarro}> + </button> 
        { cambioBoton && 
                <div>
                    <Link to='/cart'>
                        <button className="btn btn-outline-primary btn-block">Terminar compra</button>
                    </Link>
                    <Link to='/'>
                        <button className="btn btn-outline-primary btn-block">Seguir Comprando</button>
                    </Link>
                </div>
            }   


        {!cambioBoton&&
        <button className="btn btn-outline-primary btn-block" onClick={handlerOnAdd}>Agregar</button>
      }

        </div>  

         
      </>      
    );
}
export default ItemCount;
