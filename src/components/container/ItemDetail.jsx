
//hacer estilos de card y las fotos llamar a titulo precio detalle imagen
function ItemDetail({produ}) {
    return (
        <>
            <label>Soy el detalle</label>
            <div className='card w-50'>
                <div className="container">
                    <label>{produ.name}</label>
                </div>
                <div className="container">
                    <img  src={produ.url} className="w-25" />
                    <br/>
                    <label>{produ.descripcion}</label>
                </div>
                <div className="container">
                    <label>{produ.price}</label>
                </div>
            </div>


            <label>Soy el detalle</label>

           <img src= {produ.pictureUrl}/>
        </>    )
}

export default ItemDetail;
