import { useContext } from 'react';
//import useCartContext from '../../context/CartContext';
import {CartContext} from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { getFirestore } from "../../service/getFirebase";
import firebase from "firebase";
import 'firebase/firestore';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Cart= ()=>  {

    const initialForm ={
        nombre:"",
        email:"",
        email2:"",
        tel:""
    };
const {id}= useParams ()
const [formData, setFormData] = useState(initialForm)

    let {carrito, clear,precioTotal,removeItem} = useContext(CartContext)
    
    console.log(precioTotal());
    console.log(carrito);
       
function handleChange(e){
    setFormData(
        {
        ...formData,
        [e.target.name]: e.target.value
    }
    )
}


console.log(formData);
console.log(formData.email)


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


   orders.add(newOrder)
  .then(resp => alert(`la orden de compra es: ${resp.id}`))
  .catch(err => console.log(err))
  .finally(()=>{
       setFormData(initialForm)
     clear()
  })

}


        return (
            <>
            <div>
                   
                {
                  <div>
                  {!carrito.length ?
                   <Link to='/'>
                   <Button className="btn btn-outline-danger btn-block"> Carrito Vacio Comprar!</Button>
                   </Link>
                   :
                    carrito.map(pro =>
                             <div> 
                                    <h2>{ pro.item.nombre}</h2>
                                    <p>{ pro.quantity} cantidad </p>
                                    <p>precio $ { pro.item.precio}</p>
                                    <p>{ pro.item.categoriaID}</p>
                                   
                                     <Button  variant="secondary" onClick={()=> removeItem(pro.item.id)} >Eliminar Producto</Button>
                                     <Button  variant="secondary" onClick={clear} >Borrar listado Cart</Button>
                             </div>
                                 )
                   
                   }

                <p>Total a pagar $ {precioTotal()}</p>
               

                </div>
        
                }

               
                <br />


            <form  onSubmit={handleSubmit}  onChange={handleChange}>
                <input type="text"  placeholder="ingresa nombre" name="nombre" value={formData.nombre}/>
                <input type="text"  placeholder="ingresa tel" name="tel" value={formData.tel} />
                <input type="email" placeholder="ingresa email" name="email" value={formData.email} />
                <input type="email" placeholder="confirme el mail" name="email2" value={formData.email2} />
                {
                    formData.email != formData.email2
                     ? 
                    <button disabled={true}   >Terminar compra</button>
                    :   <button  >Terminar compra</button>
                }
              
            </form>
            
            
            <br />
            <div>
                {
                  
                   
                    
                  
                   
                   
                   
                }
            </div>
              
            </div>
            </>
        )
    }
    
export default Cart;
