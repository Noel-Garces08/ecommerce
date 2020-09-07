import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Sidebar, Navbar, Products, ProductDetails } from './components';

const App = () => (
  <Router>
    <Navbar />
    <Sidebar />
    <Switch>
      <Route exact path="/">
        <Products />
      </Route>
      <Route exact path="/product-details">
        <ProductDetails />
      </Route>
    </Switch>
  </Router>
);

export default App;

