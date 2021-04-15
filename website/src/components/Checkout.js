import React from 'react'
import {useStateValue} from '../StateProvider'
import CartItem from './CartItem'
import '../css/checkout.css'
import Homenav from './Homenav'
import {Link} from 'react-router-dom'
import DetailCard from './DetailCard'
import Navbar from './Navbar'
import Footer from './Footer'


function Checkout() {
    const[{cart}] = useStateValue()
    const gettotal = (cart) => {
        let amount = 0
        cart.map(item=>(
           amount= amount+parseInt(item.price)
        ))    
      return amount
    }

    const[{user},dispatch] = useStateValue()

    return (
        <div>
        <header className='cart-header'>
            <Navbar/>
        </header>
        <div className='whole-container'>
<span id='cartBg'>Check</span>
        <div className='cart-heading'>
            <h1>Order Summary</h1>
            <br></br>
        </div>
        <div className="cart-user-para">
        <h3>Billing Info</h3>
        <h3>Email: {user.email}</h3>
        {/* ADD MORE TO USER DATABASE */}
        </div>
        <div className="cart-heading-para">
        <p>Product</p>
        <p className='cart-heading-right'>Cost</p>
        </div>

        <div className="cart-container">
            
            <div className="cart-items-cont left">

                {cart.length>0?cart.map(item=>(
                    <CartItem carType={item.carType} price={item.price} subscription={item.subscription} id={item.id}/> 
                )):<h2>Your Cart is Empty</h2>}
            </div>
            <div className="detail-card-cont ">
                <DetailCard />
            </div>
            
        </div>

        </div>
        <div className="foo" >
        <Footer />
        </div>
       
    </div>
    )
}

export default Checkout
