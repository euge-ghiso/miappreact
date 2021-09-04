import { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';



const producto = { id: 1, nombre: "margarita",categoria:"planta", precio: 37 ,stock: 5,pictureUrl:""}

function ItemDetailContainer() {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const {id}= useParams ()


    let getProducto = new Promise((resolve) => {
        setTimeout(() => {
        resolve(producto)        
       }, 2000);})

       useEffect(()=>{
        getProducto.then(resp => 
        {
        setProducto(resp)
        setLoading(false)}
        ,)});  

        useEffect(() => {
        getProducto.then(resp => 
         {
         setProducto(resp)
        setLoading(false)
    })}, [id])
    
    return (
        <>
            {loading ?
            <h2>Aguarde unos segundos....</h2> : 
            <ItemDetail producto={producto} /> }
           
        </>
    );
}
export default ItemDetailContainer;