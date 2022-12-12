import './App.css';

import { ItemListContainer } from './components/ItemListContainer';
import NavBar from './components/NavBar';
import logo from './logo.svg';
import {Layout} from "./components/Layout";
import {CartContext} from "./context/cartContext";

function App() {
  return (
      <CartContext.Provider value={[]}>
        <Layout >
          <ItemListContainer />
        </Layout>
      </CartContext.Provider>
    
  );
}

export default App;
