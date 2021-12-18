import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import {
  Admin,
  Login,
  Products,
  Inventory,
  Users
} from './pages'
import { AdminLayout } from './layouts/AdminLayout/AdminLayout'

const Home = () => (
  <AdminLayout>
    <div>Home</div>
  </AdminLayout>
);

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/login" component={Login} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/admin/products' component={Products} />
        <Route exact path='/admin/inventory' component={Inventory} />
        <Route exact path='/admin/users' component={Users} />
      </Switch>
    </Router>
  );
}

export default App;
