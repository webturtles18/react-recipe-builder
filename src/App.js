import React from 'react';
import Layout from './components/Layout/Layout';
import Recipe from './containers/Recipe/Recipe';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Aux from './hoc/ReactAux';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Recipe />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
