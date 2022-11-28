import './App.css';

import ItemListContainer from "./components/ItemListContainer";
import NavBar from './components/NavBar';
import logo from './logo.svg';
import {Layout} from "./components/Layout";
import {cartContext} from "./context/cartContext";

function App() {
  return (
      <cartContext.Provider value={[]}>
        <Layout >
          <ItemListContainer />
        </Layout>
      </cartContext.Provider>
    
  );
}

export default App;
