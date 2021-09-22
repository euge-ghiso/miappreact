import { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../service/getFirebase';


function ItemDetailContainer() {

    const [productoDetalle, setProductoDetalle] = useState({})
    const [loading, setLoading] = useState(true)
    const {id}= useParams ()
    
   

  // console.log("item::",item.nombre);
  
   
        useEffect(() => {

            let db = getFirestore()
            let productoItem = db.collection('Items').doc("Ar7gdr7uayV7928kLPdf").get()
          .then(data=>{
              if(data.size===0){
              console.log("no hay nada")}

              
              console.log(data) 

              setProductoDetalle({id: data.id, ...data.data()})

              
              console.log(data.data())
          })

}, [])
    
console.log(id)

    return (
        <>
        
            {loading ?
            <h2>Aguarde unos segundos.... </h2> : 
           <ItemDetail item={productoDetalle} /> }
           <div>
          /
           </div>
        </>
    );
}
export default ItemDetailContainer;