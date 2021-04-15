import React from 'react'
import { Link } from 'react-router-dom'
import '../css/cart.css'
import DetailCard from './DetailCard'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {useStateValue} from '../StateProvider'
import CartItem from './CartItem';
import Navbar from './Navbar'
import Footer from './Footer'


function Cart() {

    const[{cart,user},dispatch] = useStateValue()
    return (

        <div>
            <header className='cart-header'>
                <Navbar/>
            </header>
            <div className='whole-container'>
<span id='cartBg'>CART</span>
            <div className='cart-heading'>
                <h1>Your Cart </h1>
                <br></br>
            </div>
            <div className="cart-heading-para">
            <p>Product</p>
            <p className='cart-heading-right'>Cost</p>
            </div>
            <div className="cart-container">
                
                <div className="cart-items-cont left">

                    {cart.length>0?cart.map(item=>(
                        <CartItem carType={item.carType} price={item.price} subscription={item.subscription} id={item.id}/> 
                    )):user?<h2>Hello {user.email}, your cart is empty</h2>:
                    <h2>Guest Mode Does Not Allow Items in Cart</h2>}
                </div>
                {cart.length>0?<div className="detail-card-cont ">
                <DetailCard />
            </div>
            :user? <Link to="/#productid">
             <button id="checkoutBtn" >Please Add Items to Cart </button>
            </Link>
            :<Link to="/login">
            <button id="checkoutBtn" >Please Sign In</button>
           </Link>
            }
            </div>
         
            </div>
            <div className="foo">
            <Footer />
            </div>
         
        </div>
    )
}

export default Cart
