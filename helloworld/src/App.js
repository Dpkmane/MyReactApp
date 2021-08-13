import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './Membership/login';
import Register from './Membership/register';
import List from './ProductCatalog/List';
import Hello from './Layout/Hello';
import GoodBye from './Layout/Goodbye';
import Cart from './ShoppingCart.js/Cart';
import Home from './Layout/Home';
import About from './Layout/About';
import Contact from './Layout/Contact';
import Dashboard from './Dashboard';
import Count from './count';
import Restlist from './ProductCatalog/RestList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routing></Routing>
      </header>
    
    </div>
  );
}
function Routing(){

  return(
    <div>
      <Router>
        <Link to="/">Home</Link>|
        <Link to="/about">About Us</Link>|
        <Link to="/contact">Contact Us</Link>|
        <Link to="/login">Login</Link>|
        <Link to="/register">Register</Link>|
        <Link to="/flowers">flowers</Link>|
        <Link to="/hello">Hello</Link>|
        <Link to="/cart">My SoppingCart</Link>
        <hr/>
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route exact path='/about'><About/></Route>
        <Route exact path='/Login'><Login/></Route>
        <Route exact path='/register'><Register/></Route>
       <Route exact path='/flowers'><List/></Route>
        <Route exact path='/contact'><Contact/></Route>
        <Route exact path='/hello' component={Hello}/>
       <Route exact path='/goodbye' component={GoodBye}/>
       <Route exact path='/cart' component={Cart}/>
      </Switch>

      </Router>
      
    </div>
  )

}




export default App;
