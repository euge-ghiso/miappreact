import Item from './Item';
import ItemDetail from './ItemDetail';



const ItemList =({productos})=> {
          
      return (
          <div>
            <ul>
                 {productos.map((producto) => <Item key={producto.id}  producto ={producto} /> )}  
                 {productos.map((producto) => <ItemDetail key={producto.id}  producto ={producto} /> )}  



                 
            </ul>
            
           </div>
    );
}
export default ItemList;
