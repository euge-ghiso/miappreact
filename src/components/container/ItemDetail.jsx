
//hacer estilos de card y las fotos llamar a titulo precio detalle imagen
function ItemDetail({producto}) {
    return (
        <>
            <label>Soy el detalle</label>
            <div className='card w-50'>
                <div className="container">
                    <label>{producto.name}</label>
                </div>
                <div className="container">
                    <img  src={producto.url} className="w-25" />
                    <br/>
                    <label>{producto.descripcion}</label>
                </div>
                <div className="container">
                    <label>{producto.price}</label>
                </div>
            </div>


            <label>Soy el detalle</label>

           <img src= {producto.pictureUrl}/>
        </>    )
}

export default ItemDetail;
