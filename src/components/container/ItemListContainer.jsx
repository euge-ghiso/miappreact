 import "../container/ItemListContainer.css"
 import { getFirestore } from '../../service/getFirebase';
 import ItemList from '../ItemList';
 import { useEffect,useState } from 'react';
 import { useParams } from 'react-router-dom';
// import  getFirestore  from '../../service/getFirebase';
 


function ItemListContainer() {

  const[productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams ()
  const user = false
  
console.log("category",categoryId)

  
  useEffect (() => {
        let db = getFirestore()
        let itmesCollection = db.collection('Items')
        console.log(itmesCollection)
        const dbQuery = categoryId ?  itmesCollection.where('categoryId', '==', categoryId) : itmesCollection
        dbQuery.get().then(resp => {
            if (resp.size === 0) {
                console.log('No Result!!')
            }
            setProductos(resp.docs.map(item=> ({id: item.id, ...item.data()}) ))
        })
        .catch((error) => {
            console.log("Error searching items", error)
        }).finally(() => {
            setLoading(false)
        })



} ,[categoryId])


if(user){
  return <h1>Login</h1>
}



 // console.log(items)
  
    return (
      <>
        
       
      
        <ItemList items={productos} />
       
       
        
      </>
    )
  }
  
  export default ItemListContainer;

  