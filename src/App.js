import React, { createContext } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import LogIn from './Component/LogIn/LogIn';
import NotFound from './Component/NotFound/NotFound';
import OrderList from './Component/OrderList/OrderList';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import ServiceList from './Component/ServiceList/ServiceList';
import { useState } from 'react';
import OrderReview from './Component/OrderReview/OrderReview';

export const userContext = createContext();

function App() {
   const [logInUser,setLogInUser] =useState({});
  return (
    <userContext.Provider value={[logInUser, setLogInUser]}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/login'>
          <LogIn></LogIn>
        </Route>
            <Route path='/service'>
         <ServiceList/>
        </Route>
        <Route path='/review'>
         <OrderReview></OrderReview>
        </Route>
        <PrivateRoute path='/order'>
          <OrderList></OrderList>
        </PrivateRoute>
        
        <Route path="*">
            <NotFound></NotFound>
          </Route>

      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
