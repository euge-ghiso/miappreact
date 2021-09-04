import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; 

function Item ({producto}) {
    
return (   
    <div> 


    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Link to="/item/:id">
          <Card.Title>{producto.nombre}</Card.Title>
      </Link>
      <Card.Text>
      {producto.pictureurl}
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
     <Link to="/detalle">
           <Button variant="primary">detalle</Button>
      </Link>
    </Card.Body>
  </Card>
    
            <div>
                 {producto.precio} 
            </div>
        </div>   
    
    );
}

export default Item;