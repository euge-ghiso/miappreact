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
  //.doc("Ar7gdr7uayV7928kLPdf").get()
   
        useEffect(() => {

            let db = getFirestore()
            let productoDetalle = db.collection('Items')
            .doc(id).get()
          .then(resp=>{
              if(resp.size===0){
              console.log("no hay nada")}

              
              console.log(resp) 

              setProductoDetalle(
                  {id: resp.data().id, ...resp.data()})

              
              console.log(resp.data())
              setLoading(false);
            })
            

            }, [])
    
            console.log(id)

    return (
        <>
        
            {loading ?
            <h2>Aguarde unos segundos.... </h2> : 
           <ItemDetail item={productoDetalle} /> }
           <div>
          
           </div>
        </>
    );
}
export default ItemDetailContainer;