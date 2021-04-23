import React,{useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import CarwashLiquid from './components/CarwashLiquid'
import MonthlyDeals from './components/MonthlyDeals'
import YearlyDeals from './components/YearlyDeals'
import Footer from './components/Footer'
import Landing from './components/Landing'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Account from './components/Account';
import Taskbar from './components/Taskbar'
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import {auth} from "./firebase"
import {useStateValue} from './StateProvider'
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Refund from './components/Refund';

function App() {
  const[{user},dispatch] = useStateValue()
  
  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log("user is >>>",authUser)

      if(authUser){
        // the user just logged in / the user was logged in

        dispatch({
          type:'SET_USER',
          user: authUser
        })
      }else{
        //user logged out
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
  }, [])
  
  return (
       <Router>
         <Route exact path='/'>
         <div className="App">
           {/* Navbar */}
          <Navbar/>
          {/* Landing */}
          <Landing/>
          {/* Carwash Liquid */}
          <span id="storyid"/>
          <CarwashLiquid/>
          {/* yearly deals */}
          <span id="productid"/>
          <YearlyDeals/>
          {/* monthly package */}
          <MonthlyDeals/>
          {/* create account */}
          <span id="login"/>
          <Account/>
          {/* contact us */}
          <span id="contactid"/>
          <Contact/>
          
          {/* footer */}
          <Footer/>
        </div>
         </Route>
        <Route exact path="/cart">
          <Cart/>
        </Route>
        <Route exact path ="/cart/checkout">
          <Checkout/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/tac">
          <Terms/>
        </Route>
        <Route exact path="/privacy">
          <Privacy/>
        </Route>
        <Route exact path="/refund">
          <Refund/>
        </Route>
    </Router>
  );
}

export default App;
