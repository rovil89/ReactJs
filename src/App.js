import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <main >
        <NavBar />
        <ItemListContainer greeting={"Hola Mundo, Somos Pacifica"}/>
      </main>
    </div>
  );
}

export default App;
