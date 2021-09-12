import { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';


const productos = [
    { id: 1, nombre: "margarita",categoria:"planta", precio: 37 ,stock: 5,pictureUrl:"../imagenes/planta1.jpg"},
    { id: 2, nombre: "cosmos",categoria:"planta", precio: 27,stock: 5,pictureUrl:"../imagenes/planta2.jpg" },
    { id: 3, nombre: "lupinos",categoria:"planta", precio: 40, stock: 5,pictureUrl:"../imagenes/planta3.jpg"},
    { id: 4, nombre: "monstera",categoria: "semilla",precio: 55,stock: 5 ,pictureUrl:"../imagenes/planta4.jpg"},
    { id: 5, nombre: "lavanda",categoria:"semilla", precio: 11,stock: 5 ,pictureUrl:"../imagenes/planta5.jpg"},
    { id: 6, nombre: "paspalum",categoria:"semilla", precio: 19, stock: 5,pictureUrl:"../imagenes/planta6.jpg"},
    { id: 7, nombre: "rosa", categoria:"planta", precio: 2,stock: 5,pictureUrl:"../imagenes/planta7.jpg"  }
  ];
  
function ItemDetailContainer() {

    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)
    const {item}= useParams ()
   
let getProducto = new Promise((resolve,reject) => {
    setTimeout(() => {
    productos ? resolve(producto) : reject("no hay productos");   

   }, 2000);})
     
  
   console.log(producto)
   console.log(item)
   
        useEffect(() => {
        getProducto.then(resp => 
         {
         setProducto(resp)
         setLoading(false)
    }
    )}, [producto,item])
    
console.log(item)
    return (
        <>
        
            {loading ?
            <h2>Aguarde unos segundos.... </h2> : 
           <ItemDetail producto={producto} /> }
           
        </>
    );
}
export default ItemDetailContainer;