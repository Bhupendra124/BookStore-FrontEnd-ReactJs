import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Redirect, Switch, Route } from 'react-router-dom';
import Login from './user/Login'
import SignUp from './user/signup';
import dashboard from './Dashboard/dashboard';


import MediaCard from './MediaCard/MediaCard';
import MyCart from './cart/MyCart';
import CustomerAddress from './CustomerDetails/CustomerAddress';
import PlaceOrder from './cart/Order';


function App() {
  return (
    <Router>
    <Switch>
    <Redirect path="/" to="/Login" exact />
    <Route path='/Login' component={Login}/>
            <Route path="/SignUp" component={SignUp} exact />
            <Route path="/Dashboard" component={dashboard} ></Route>
            <Route path="/image" component={MediaCard} ></Route>
            <Route path='/cart' component={MyCart} ></Route>
            <Route path='/customer' component={CustomerAddress} ></Route>
            <Route path='/placeorder' component={PlaceOrder} ></Route>
          
     </Switch>
   </Router>
 
  );
}

export default App;
