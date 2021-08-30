 import "../container/ItemListContainer.css"
 import ItemCount from '../ItemCount';



const ItemListContainer = ({greeting}) => {
    return (
      <>
        <h2> Saludo: {greeting} </h2>
        <ItemCount/>
      </>
    )
  }
  
  export default ItemListContainer;