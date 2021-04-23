import React from 'react'
import { Link } from 'react-router-dom'
import '../css/cart.css'
import DetailCard from './DetailCard'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useStateValue} from '../StateProvider'
import CartItem from './CartItem';

function Cart() {

    const[{cart,user},dispatch] = useStateValue()

    return (
        <div>
            <header className='cart-header'>
                <Link  to="/">
                <h3>BACK</h3>
                </Link>
            </header>

            <div className='cart-heading'>
                <h1>CART <ShoppingCartIcon/></h1>
                
            </div>
            <div className="cart-container">
                <div className="cart-items-cont left">

                    {cart.length>0?cart.map(item=>(
                        <CartItem carType={item.carType} price={item.price} subscription={item.subscription} id={item.id}/>
                        
                    )):user?<h2>Hello {user.email}, your cart is empty</h2>:<h2>Please sign in</h2>}
                </div>
                <div className="detail-card-cont right">
                    <DetailCard/>
                </div>
            </div>
        </div>
    )
}

export default Cart
