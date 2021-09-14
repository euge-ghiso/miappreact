//hacer estilos de card y las fotos llamar a titulo precio detalle imagen

import ItemCount from './ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ItemDetail ({item}) { 

    const [cambioBoton, setCambiarBoton] = useState(false)

    const onAdd =(estado) =>{
        
        setCambiarBoton(true)
      }
    //const [enCarrito, setCarrito] = useState(false)
console.log("itemdetail",item)

    return (
        <>
            <label>Soy el detalle</label>
            <div className='card w-50'>
                <div className="container">
           
                    <img src= {item.pictureUrl}/>
                </div>
                
                <div className="container">
                    <img  src={item.pictureUrl} className="w-25" />
                    <br/>
                    <label>{item.categoria}</label>
                    <label>{item.precio}</label>
                </div>
                <div className="container">
             
                <ItemCount stock="5" initial="1" onAdd={onAdd} cambioBoton={cambioBoton}/>  

              
             { cambioBoton&&<Link to={"/cart"}><button> finalizar compra</button></Link>}
                </div>           
            </div>
            <label>Soy el detalle {item.id}</label>      
              
   
      
        </>    
        );
}

export default ItemDetail;
