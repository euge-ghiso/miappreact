import Item from './Item';

const ItemList =({productos})=> {
          
      return (
          <div>
            <ul>
                 {productos.map((producto) => <Item key={producto.id} producto ={producto} /> )}  
            </ul>
           </div>
    );
}
export default ItemList;