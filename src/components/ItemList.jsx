import Item from './Item';

const ItemList =({props})=> {
          
      return (
          <div>
            <ul>
                 {props.map((producto) => <Item key={producto.id} producto ={producto} /> )}  
            </ul>
           </div>
    );
}
export default ItemList;