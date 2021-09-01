import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'; 
import ItemListContainer from './components/container/ItemListContainer'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">    </div>
     
   <NavBar />
   <Switch>
   <Route exact path="/">
   <ItemListContainer greeting={"¡¡¡Hola !!! "} />
   </Route>



  
    </Switch>
    </Router>
  );
}

export default App;
