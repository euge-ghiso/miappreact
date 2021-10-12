import { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../service/getFirebase';


function ItemDetailContainer() {

    const [productoDetalle, setProductoDetalle] = useState({})
    const [loading, setLoading] = useState(true)
    const {id}= useParams ()
    
      
        useEffect(() => {

            let db = getFirestore()
            let productoDetalle = db.collection('Items')
            .doc(id).get()
          .then(resp=>{
              if(resp.size===0){
              console.log("no hay nada")}

           

              setProductoDetalle(
                  {id: resp.id, ...resp.data()}
                  )

              
              setLoading(false);
            })
            

            }, [])
    
           
           
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