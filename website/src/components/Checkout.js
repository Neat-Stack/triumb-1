import React from 'react'
import {useStateValue} from '../StateProvider'
import CartItem from './CartItem'
import '../css/checkout.css'
import Homenav from './Homenav'
import {Link} from 'react-router-dom'

function Checkout() {

    const[{cart}] = useStateValue()
    const gettotal = (cart) => {
        let amount = 0
        cart.map(item=>(
           amount= amount+parseInt(item.price)
        ))    
      return amount
    }

    return (
        <div className='checkout-page'>
             <header className='cart-header'>
                <Link  to="/cart">
                <h3>BACK</h3>
                </Link>
            </header>
            <h1 className="checkout-heading">
                Checkout({cart.length} items)
            </h1>
            <div className="checkout_container">
                {/* review items */}
                <div className="checkout-section">
                <div className="checkout-title">
                    <h2>Review Items</h2>
                </div>
                <div className="checkout-items">
                    {cart.length>0?cart.map(item=>(
                        <CartItem
                        carType={item.cartType}
                        price = {item.price}
                        subscription={item.subscription}
                        id={item.id}
                        />
                    )):<h2>Nothing in cart</h2>}
                </div>
                </div>
                {/* total amount */}
                <div className="checkout-section">
                   <div className="checkout-title">
                       <h2>Total</h2>
                   </div>
                   <div className="checkout-des">
                       <h2>₹{gettotal(cart)}</h2>
                   </div>
               </div>
               {/* payment method */}
               <div className="checkout-section">
                   <div className="checkout-title">
                       <h2>Payment</h2>
                   </div>
                   <div className="checkout-des">
                       <button>Complete Payment</button>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Checkout
