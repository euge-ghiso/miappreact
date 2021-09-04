import { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';



const producto = {id, nombre, descripcion, precio , stock, pictureUrl}

let getProducto = new Promise((resolve) => {
    setTimeout(() => {
    resolve(producto);        
   }, 2000);

function ItemDetailContainer() {
    const {id}= useParams ()

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        getProducto.then(resp => 
       {setProducto(resp)
       setLoading(false)
    })      

}, [])
    
    return (
        <>
            {loading ?
            <h2>Aguarde unos segundos....</h2> : 
            <ItemDetail produ={produ} /> }
           
        </>
    )
}
export default ItemDetailContainer;