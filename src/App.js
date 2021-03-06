// Libraries
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Layout from "./components/Layout/Layout";
// import { AuthContextUse } from "./context/AuthContext";

//Pages
import Home from "./pages/Home/Home.";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import CartPage from "./pages/CartPage/CartPage";
import  CartContextProvider  from "./context/CartContext";
import  AuthContextProvider  from "./context/AuthContext";
import SidebarContextProvider from "./context/SidebarContext";
import Login from "./pages/Login/Login";
import Store from "./pages/Store/Store";
import Checkout from "./pages/Checkout/Checkout";
import Register from "./pages/Register/Register";

//Routes
import PrivateRoute from "./routers/PrivateRoute";

function App() {
  
  return (
    <>
    <AuthContextProvider>
      <CartContextProvider>
        <SidebarContextProvider>
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
              <Route exact path="/store" component={Store}/>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <PrivateRoute exact path="/checkout" component={Checkout} />

            </Switch>
          </Layout>
        </Router>
        </SidebarContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
    </>
  );
}

export default App;
