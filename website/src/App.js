import React from 'react'
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

function App() {
  return (
       <Router>
         <Route exact path='/'>
         <div className="App">
           {/* Navbar */}
          <Navbar/>
          {/* Landing */}
          <Landing/>
          {/* Carwash Liquid */}
          <CarwashLiquid/>
          {/* yearly deals */}
          <YearlyDeals/>
          {/* monthly package */}
          <MonthlyDeals/>
          {/* create account */}
          <Account/>
          {/* contact us */}
          <Contact/>
          {/* Taskbar */}
          <Taskbar/>
          {/* footer */}
          <Footer/>
        </div>
         </Route>
    
    </Router>
  );
}

export default App;
