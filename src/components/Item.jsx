import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; 

function Item ({producto}) {
    
return (   
    <div> 


    <Card style={{ width: '50rem' }}>
    {producto.precio} 

    <Card.Body>
      <Link to="/nombre/:item">
          <Card.Title>NOMBRE{producto.nombre}</Card.Title>
      </Link>
      <Link to="/id/:item">
        
        <Card.Title>ID  {producto.id}</Card.Title>
      </Link>
      <img src= {producto.pictureUrl}/>
     
      <Card.Text>
      
      {producto.categoria}
      </Card.Text>
     <Link to="/detalle">
           <Button variant="primary">detalle</Button>
           
      </Link>
    </Card.Body>
  </Card>
    
            
        </div>   
    
    );
}

export default Item;