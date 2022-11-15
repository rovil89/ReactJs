import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <main >
        <NavBar />
        {/*<ItemListContainer greeting={"Hola Mundo, Somos Pacifica"}/>*/}
        <ItemDetailContainer />
      </main>
    </div>
  );
}

export default App;
