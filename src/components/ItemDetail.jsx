//hacer estilos de card y las fotos llamar a titulo precio detalle imagen

import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

function ItemDetail ({item,onAdd}) {

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
             
             <ItemCount stock="5" initial="1"  estado >0 ? {onAdd} : <Link to="/cart"><button>Finalizar Compra</button>  </Link>   </ItemCount>
             
                </div>           
            </div>
            <label>Soy el detalle {item.id}</label>      
              
   
      
        </>    
        )
}

export default ItemDetail;
