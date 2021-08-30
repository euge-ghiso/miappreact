import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'; 
import ItemListContainer from './components/container/ItemListContainer'; 



function App() {
  return (
    <div className="App">
     
   <NavBar />
   <ItemListContainer greeting={"¡¡¡Hola !!! "} />


   <h1> Desafio nro 5 </h1>
    </div>
  );
}

export default App;
