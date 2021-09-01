 import "../container/ItemListContainer.css"
 import ItemCount from '../ItemCount';
 import ItemList from '../ItemList';

 const productos = [
  { id: 1, nombre: "margarita", precio: 37 ,stock: 5},
  { id: 2, nombre: "cosmos", precio: 27,stock: 5 },
  { id: 3, nombre: "lupinos", precio: 40, stock: 5},
  { id: 4, nombre: "monstera", precio: 55,stock: 5 },
  { id: 5, nombre: "lavanda", precio: 11,stock: 5 },
  { id: 6, nombre: "paspalum", precio: 19, stock: 5},
  { id: 7, nombre: "rosa", precio: 2,stock: 5  }
];



const ItemListContainer = ({greeting}) => {
  let tarea = new Promise((resolve) => {
 
    setTimeout(() => {
        resolve(productos);        
    }, 2000);
    
  });

  tarea.then((respuesta)=>(respuesta))
    return (
      <>
        <h2> Saludo: {greeting} </h2>
        <ItemCount stock="5" initial="1" />
      
        <ItemList props={productos}/>
        
      </>
    )
  }
  
  export default ItemListContainer;

  