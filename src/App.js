import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'; 
import ItemListContainer from './components/container/ItemListContainer'; 
import ItemDetailContainer from './components/container/ItemDetailContainer'; 
import ItemDetail from './components/ItemDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartContexProvider from './context/CartContext';
import Cart from './components/Cart/Cart';




function App() {
  
  
  return (
    <CartContexProvider value={[]}>
    <Router>
      <div>

        <NavBar />
           <Switch>
           <Route exact path="/category/:categoria" > <ItemListContainer/></Route>
            <Route exact path="/" > <ItemListContainer/></Route>
            <Route exact path="/detalle/:id" > <ItemDetailContainer/></Route>
            <Route exact path="/item/:id" > <ItemDetailContainer/></Route>
            <Route exact path="/cart"> <Cart/> </Route>
          </Switch>
          
       </div>
   </Router>
  </CartContexProvider>
      );
}

export default App;
