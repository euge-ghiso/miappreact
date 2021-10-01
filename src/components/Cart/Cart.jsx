import { useContext } from 'react';
//import useCartContext from '../../context/CartContext';
import {CartContext} from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { getFirestore } from "../../service/getFirebase";
import firebase from "firebase";
import 'firebase/firestore';
import { useEffect,useState } from 'react';



const Cart= ()=>  {

    const initialForm ={
        nombre:"",
        email:"",
        tel:""
    };
    
const [formData, setFormData] = useState(initialForm)


    let {carrito, clear,precioTotal,removeItem} = useContext(CartContext)
    
    console.log(precioTotal());
    console.log(carrito);
       
function handleChange(e){
    setFormData(
        {
        ...formData,
        [e.target.nombre]: e.target.value
    }
    )
}


console.log(formData);

function handleSubmit(e)
    {
    e.preventDefault()
    const newOrder={
        buyer: formData,
        items: carrito,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: precioTotal()
                    }
     
    console.log(newOrder)

    const db = getFirestore()
    const orders = db.collection('orders')

    //controlar si hay los productos que quiero agregar 
/*db.collection("items").doc().update({
    stock:
})*/



   orders.add(newOrder)
  .then(resp => alert(`la orden de compra es: ${resp.id}`))
  .catch(err => console.log(err))
  .finally(()=>{
       setFormData(initialForm)
     clear()
  })

}


        return (
            <div>
                   
                {
                  <div>
                  {!carrito.length ?
                   <Link to='/'>
                   <button className="btn btn-outline-danger btn-block"> Carrito Vacio Comprar!</button>
                   </Link>
                   :
                    carrito.map(pro =>
                             <div> 
                                    <p>{ pro.item.nombre}</p>
                                    <p>{ pro.quantity}</p>
                                     <button onClick={()=> removeItem(pro.item.id)} >Eliminar Producto</button>
                                     <button onClick={clear} >Borrar listado Cart</button>
                             </div>
                                 )
                   
                   }

                {precioTotal()}

                </div>
        
                }

               
    <br />

<form  onSubmit={handleSubmit}  onChange={handleChange}>
    <input type="text"  placeholder="ingresa nombre" name="nombre" value={formData.nombre}/>
    <input type="text"  placeholder="ingresa tel" name="tel" value={formData.tel} />
    <input type="email" placeholder="ingresa email" name="email" value={formData.email} />
    <input type="email" placeholder="confirme el mail" name="email2" />
    <button >Terminar compra</button>
    
</form>
<br />
              
            </div>
        )
    }
    
export default Cart;

