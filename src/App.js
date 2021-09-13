import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'; 
import ItemListContainer from './components/container/ItemListContainer'; 
import ItemDetailContainer from './components/container/ItemDetailContainer'; 

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>

        <NavBar />
           <Switch>
           <Route exact path="/category/:categoria" > <ItemListContainer/></Route>
            <Route exact path="/" > <ItemListContainer/></Route>
            <Route exact path="/detalle/:id" > <ItemDetailContainer/></Route>
              
                           
          </Switch>

       </div>
   </Router>

      );
}

export default App;
