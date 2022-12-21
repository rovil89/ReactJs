import './App.css';
import { index } from "./router/index";
import { ItemListContainer } from './components/ItemListContainer';
import NavBar from './components/NavBar';
import logo from './logo.svg';
import {Layout} from "./components/Layout";
import {CartContext} from "./context/cartContext";

function App() {
  return (
        <Layout >
          <ItemListContainer />
        </Layout>
    
  );
}

export default App;
