// Librerias
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Estilos
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Componentes
import Layout from "./components/Layout/Layout";

//Pages
import Home from "./pages/Home/Home.";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import CartPage from "./pages/CartPage/CartPage";



function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/products/:idCategory/:idSubCategory"
              component={ProductPage}
            />
            <Route
              exact
              path="/productsDetail/:idProduct"
              component={ProductDetail}
            />
            <Route exact path="/cart" component={CartPage} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
