//hacer estilos de card y las fotos llamar a titulo precio detalle imagen

import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../context/CartContext';
import Card from 'react-bootstrap/Card';

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
    <Card border="primary" style={{ width: '21rem' }}>
    <Card.Header>{item.nombre}</Card.Header>
    <Card.Body>
    <img  src={item.urlImagen}  className="w-25"   />
      <Card.Title>{item.categoriaID}</Card.Title>
      <Card.Text>
     
                    <br/>
                    <label>$ {item.precio}</label>
                    <br/>
                    <label>Stock {item.stock}</label>
      </Card.Text>
    </Card.Body>
    <ItemCount stock="5" initial="1" onAdd={onAdd} cambioBoton={cambioBoton}/>  
  </Card>
  <br />
                
                
              </>    
        );
}

export default ItemDetail;
