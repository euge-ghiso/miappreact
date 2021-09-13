import { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';


const items = [
    { id: 1, nombre: "margarita",categoria:"planta", precio: 37 ,stock: 5,pictureUrl:"../imagenes/planta1.jpg"},
    { id: 2, nombre: "cosmos",categoria:"planta", precio: 27,stock: 5,pictureUrl:"../imagenes/planta2.jpg" },
    { id: 3, nombre: "lupinos",categoria:"planta", precio: 40, stock: 5,pictureUrl:"../imagenes/planta3.jpg"},
    { id: 4, nombre: "monstera",categoria: "semilla",precio: 55,stock: 5 ,pictureUrl:"../imagenes/planta4.jpg"},
    { id: 5, nombre: "lavanda",categoria:"semilla", precio: 11,stock: 5 ,pictureUrl:"../imagenes/planta5.jpg"},
    { id: 6, nombre: "paspalum",categoria:"semilla", precio: 19, stock: 5,pictureUrl:"../imagenes/planta6.jpg"},
    { id: 7, nombre: "rosa", categoria:"planta", precio: 2,stock: 5,pictureUrl:"../imagenes/planta7.jpg"  }
  ];

function ItemDetailContainer() {

    const [productoDetalle, setProductoDetalle] = useState([])
    const [loading, setLoading] = useState(true)
    const {id}= useParams ()
   
          
  // console.log("item::",item.nombre);
  
   
        useEffect(() => {

            let getProducto = new Promise((resolve,reject) => {
                setTimeout(() => {
                items ? resolve(items) : reject("no hay productos");   
            
               }, 2000);})

        getProducto.then(resp => 
         {
         setProductoDetalle(resp[id-1])
         setLoading(false)
         console.log("itemdetailcontainer",resp[id-1])
    })
}, [items, id])
    
console.log(id)

    return (
        <>
        
            {loading ?
            <h2>Aguarde unos segundos.... </h2> : 
           <ItemDetail item={productoDetalle} /> }
           
        </>
    );
}
export default ItemDetailContainer;