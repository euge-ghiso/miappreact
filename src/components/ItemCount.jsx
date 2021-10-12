import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';




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
         
        <Button variant="secondary"  onClick={restaCarro}> - </Button> 
        <Button variant="secondary" onClick={sumaCarro}> + </Button> 
        { cambioBoton && 
                <div>
                    <Link to='/cart'>
                        <Button className="btn btn-outline-dark btn-block">Terminar compra</Button>
                    </Link>
                    <Link to='/'>
                        <Button className="btn btn-outline-dark btn-block">Seguir Comprando</Button>
                    </Link>
                </div>
            }   


        {!cambioBoton&&
        <Button className="btn btn-outline-dark btn-block" onClick={handlerOnAdd}>Agregar</Button>
      }






        </div>  

         
      </>      
    );
}
export default ItemCount;
