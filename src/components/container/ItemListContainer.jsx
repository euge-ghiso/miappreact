 import "../container/ItemListContainer.css"
 import ItemCount from '../ItemCount';
 import ItemList from '../ItemList';
 import { useEffect,useState } from 'react';
 import { useParams } from 'react-router-dom';

 const productos = [
  { id: 1, nombre: "margarita",categoria:"planta", precio: 37 ,stock: 5,pictureUrl:""},
  { id: 2, nombre: "cosmos",categoria:"planta", precio: 27,stock: 5,pictureUrl:"" },
  { id: 3, nombre: "lupinos",categoria:"planta", precio: 40, stock: 5,pictureUrl:""},
  { id: 4, nombre: "monstera",categoria: "semilla",precio: 55,stock: 5 ,pictureUrl:""},
  { id: 5, nombre: "lavanda",categoria:"semilla", precio: 11,stock: 5 ,pictureUrl:""},
  { id: 6, nombre: "paspalum",categoria:"semilla", precio: 19, stock: 5,pictureUrl:""},
  { id: 7, nombre: "rosa", categoria:"planta", precio: 2,stock: 5,pictureUrl:""  }
];

let tarea = new Promise((resolve) => {
  setTimeout(() => {
  resolve(productos);        
 }, 2000);

});

function ItemListContainer() {

  const[productos, setProductos] = useState([])

  const {category} = useParams ()
  
  useEffect(() => {
    if(category===undefined){
      tarea.then((respuesta)=>setProductos(respuesta))
    }
else{
  tarea.then((respuesta)=>setProductos(respuesta.filter(r => category===r.categoria)))
}
},[category])
  console.log(category)
  
    return (
      <>
        
        <ItemCount stock="5" initial="1" />
      
        <ItemList productos={productos}/>
        
      </>
    );
  }
  
  export default ItemListContainer;

  