//hacer estilos de card y las fotos llamar a titulo precio detalle imagen

import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../context/CartContext';

function ItemDetail ({item}) { 
   

    const [cambioBoton, setCambiarBoton] = useState(false)
    const {addItem}= useContext(CartContext)
  
    const onAdd =(estado) =>{
        alert(estado)
        setCambiarBoton(true)
        addItem(item,estado)
      }
    
console.log("itemdetail",item)


    return (
        <>
              
            <label>Soy el detalle</label>
            <div className='card w-50'>
                
                
                <div className="container">
                    <img  src={item.urlImagen} className="w-25" />
                    <br/>
                    <label>{item.categoriaID}</label>
                    <label>{item.precio}</label>
                </div>
                <div className="container">
             
                <ItemCount stock="5" initial="1" onAdd={onAdd} cambioBoton={cambioBoton}/>  

                          
                </div>           
            </div>
            <label>Soy el detalle {item.id}</label>      
                
              </>    
        );
}

export default ItemDetail;
