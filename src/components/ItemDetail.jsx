//hacer estilos de card y las fotos llamar a titulo precio detalle imagen

import ItemCount from './ItemCount';
import { useState, useContext } from 'react';

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
    



    return (
        <>
    <Card border="primary" style={{ width: '21rem' }}>
    <Card.Header>{item.nombre}</Card.Header>
    <Card.Body>
    <img  src={item.urlImagen}  className="w-25"   />
      <Card.Title>{item.categoriaID}</Card.Title>
      <Card.Text>
     
                    <br/>
                    <label>Precio $ {item.precio}</label>
                    <br/>
                    
      </Card.Text>
    </Card.Body>
    <ItemCount stock="5" initial="1" onAdd={onAdd} cambioBoton={cambioBoton}/>  
  </Card>
  <br />
                
                
              </>    
        );
}

export default ItemDetail;
