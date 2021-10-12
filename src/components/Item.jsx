import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; 

function Item ({item}) {
    
return (   
    <div> 


    <Card style={{ width: '25rem' }}>
    

    <Card.Body>
      <Link to={"/detalle/"+ item.id}>
          <Card.Title> {item.nombre}</Card.Title>
      </Link>
      
        
        <Card.Title>{item.categoriaID}</Card.Title>
      
      <img src= {item.urlImagen}/>
     
      <Card.Text>
      ${item.precio} 
      
      </Card.Text>
     <Link to={"/detalle/"+ item.id}>
           <Button variant="dark">detalle</Button>

      </Link>
    </Card.Body>
  </Card>
    
            
        </div>   
    
    );
}

export default Item;