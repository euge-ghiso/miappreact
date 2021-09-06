//hacer estilos de card y las fotos llamar a titulo precio detalle imagen


function ItemDetail ({producto}) {
console.log(producto)

    return (
        <>
            <label>Soy el detalle</label>
            <div className='card w-50'>
                <div className="container">
                    <label>{producto.nombre}</label>
                    <img src= {producto.pictureUrl}/>

                </div>
                <div className="container">
                    <img  src={producto.url} className="w-25" />
                    <br/>
                    <label>{producto.categoria}</label>
                    <label>{producto.precio}</label>
                </div>
                <div className="container">
                  
                </div>
             
            </div>


            <label>Soy el detalle {producto.id}</label>

          

      <div>
          
    
  </div>    
        </>    )
}

export default ItemDetail;
