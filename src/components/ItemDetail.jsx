//hacer estilos de card y las fotos llamar a titulo precio detalle imagen


function ItemDetail ({item}) {

console.log("itemdetail",item)

    return (
        <>
            <label>Soy el detalle</label>
            <div className='card w-50'>
                <div className="container">
           
                    <img src= {item.pictureUrl}/>

                </div>
                <div className="container">
                    <img  src={item.pictureUrl} className="w-25" />
                    <br/>
                    <label>{item.categoria}</label>
                    <label>{item.precio}</label>
                </div>
                <div className="container">
                  
                </div>
             
            </div>


            <label>Soy el detalle {item.id}</label>

          

      <div>
          
    
  </div>    
        </>    )
}

export default ItemDetail;
