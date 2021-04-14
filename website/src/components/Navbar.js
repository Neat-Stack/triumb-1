import React,{useState,useEffect} from 'react'
import '../css/navbar.css'
import {Link} from 'react-router-dom'
import logo from '../images/triumb logo T.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useStateValue} from '../StateProvider'
import {auth} from '../firebase'

function Navbar() {

    const[{cart,user},dispatch] = useStateValue()

    const handleAuthentication = () => {
        if(user){
            auth.signOut()
        }
    }
    
    function click(){  // DO NOT TOUCH THIS FUNCTION WITHOUT AMAN
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");

        //Hamburger Animation
        hamburger.classList.toggle("toggle");
       
        //Animate Links
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
         });
    }
      
    function clicked(){
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");

        hamburger.classList.toggle("toggle");
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
         });
    }

    //change color on scroll
    const [show, setshow] = useState(false)
   
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setshow(true);
            } else setshow(false);
        })
        return()=>{
            window.removeEventListener("scroll",()=>{
                if(window.scrollY > 100){
                    setshow(true);
                } else setshow(false);
            });
        };
    }, [])

    return (
        <div className={`navbar ${show && "nav_black"} `}>

        <div className='logo_div'>
            <img height="50px" className='logo'src={logo} alt='img'/>
        </div>

        <div className="hamburger" onClick={click} >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        <ul className="nav-links" onClick={clicked}>
            <li><a  className={show && "a-white"} href="#productid">PRODUCTS</a></li>
            <li><a  className={show && "a-white"} href="#storyid">OUR STORY</a></li>
            <li><a  className={show && "a-white"}href="#contactid">CONTACT US</a></li>
            <li><div className="a-white login-link" >
             <Link to={!user && "/login"}>
             <div onClick={handleAuthentication}className='header_option'>
                <span className='line_one'>{user?user.email:'Guest'}</span>
                <span className='line_two'>{user?'Logout':'Sign in'}</span>
                </div>
               </Link> 
            </div></li>
            
            <Link to='/cart'>
          <li className='cart-logo'>
              <ShoppingCartIcon/>
              {cart.length}
          </li>
           </Link>
        </ul>
    </div>
    )
}

export default Navbar
