import React from "react";

//React Router Dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

//Components

import Header from './components/Header'
import Alert from './components/Alert'
import PrivateRoute from './components/PrivateRoute'


export default function App() {
  return (
    <Router>

      <Header/>
      <Alert/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <PrivateRoute path="/checkout" name="mehmet" msg="hello">
          <Checkout />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:id" 
        children={<ProductDetails></ProductDetails>}>          
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
