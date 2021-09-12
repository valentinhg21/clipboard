// Librerias
import React from 'react'
import {
  BrowserRouter  as Router,
   Switch,
   Route
} from 'react-router-dom'

// Estilos
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Componentes
import Layout from './components/Layout/Layout';

//Pages
import Home from './pages/Home/Home.';


function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route  exact path="/" component={Home}/>
          </Switch>
        </Layout>
      </Router>
      
    </>
  );
}

export default App;
