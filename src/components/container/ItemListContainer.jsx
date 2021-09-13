 import "../container/ItemListContainer.css"
 import ItemCount from '../ItemCount';
 import ItemList from '../ItemList';
 import { useEffect,useState } from 'react';
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


function ItemListContainer() {

  const[productos, setProductos] = useState([]);
  const {categoria} = useParams ()
  
console.log("category",categoria)

  
  useEffect (() => {
    let tarea = new Promise((resolve,reject) => {
      setTimeout(() => {
     items && items.length ? resolve (items) : reject ("error 404")        
     }, 2000);
    
    });

   if (categoria) 
   {
    console.log("es categoria")
      tarea.then((respuesta) => {setProductos(respuesta.filter( r => categoria===r.categoria) ) })
      
    }
    
else
{
  tarea.then(
    (respuesta)=>{setProductos(respuesta)}
  )}
 
} ,[categoria])


  console.log(items)
  
    return (
      <>
        
        <ItemCount stock="5" initial="1" />
      
        <ItemList items={productos} />
       
       
        
      </>
    )
  }
  
  export default ItemListContainer;

  