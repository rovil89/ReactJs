import './App.css';

import ItemListContainer from "./components/ItemListContainer";
import NavBar from './components/NavBar';
import logo from './logo.svg';
import {Layout} from "./components/Layout"

function App() {
  return (
      <Layout >
        <ItemListContainer />
      </Layout>
    
  );
}

export default App;
