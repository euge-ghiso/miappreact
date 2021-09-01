 import "../container/ItemListContainer.css"
 import ItemCount from '../ItemCount';
 import ItemList from '../ItemList';
 import { useEffect } from 'react';


 const productos = [
  { id: 1, nombre: "margarita",description:"planta", precio: 37 ,stock: 5,pictureUrl:""},
  { id: 2, nombre: "cosmos",description:"planta", precio: 27,stock: 5,pictureUrl:"" },
  { id: 3, nombre: "lupinos",description:"planta", precio: 40, stock: 5,pictureUrl:""},
  { id: 4, nombre: "monstera",description: "planta",precio: 55,stock: 5 ,pictureUrl:""},
  { id: 5, nombre: "lavanda",description:"planta", precio: 11,stock: 5 ,pictureUrl:""},
  { id: 6, nombre: "paspalum",description:"planta", precio: 19, stock: 5,pictureUrl:""},
  { id: 7, nombre: "rosa", description:"planta", precio: 2,stock: 5,pictureUrl:""  }
];



const ItemListContainer = ({greeting}) => {
  
  useEffect(() => {
       let tarea = new Promise((resolve) => {
        setTimeout(() => {
        resolve(productos);        
       }, 2000);
    
  });

  tarea.then((respuesta)=>(respuesta))
}, []).


    return (
      <>
        <h2> Saludo: {greeting} </h2>
        <ItemCount stock="5" initial="1" />
      
        <ItemList props={productos}/>
        
      </>
    )
  }
  
  export default ItemListContainer;

  