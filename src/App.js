import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'; 
import ItemListContainer from './components/container/ItemListContainer'; 
import itemDetailContainer from './components/container/ItemDetailContainer'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>

        <NavBar />
           <Switch>
           <Route exact path="/categoria/:category" > <ItemListContainer/></Route>
               <Route exact path="/" > <ItemListContainer/></Route>
               <Route exact path="/category/:id" > <ItemListContainer/></Route>
               <Route exact path="/detalle" > <itemDetailContainer/></Route>
               <Route exact path="/item/:id" > <itemDetailContainer/></Route>
               
               
    
      
          </Switch>

       </div>
   </Router>

      );
}

export default App;
