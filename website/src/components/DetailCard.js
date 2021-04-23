import React from 'react'
import '../css/detailcard.css'
import {useStateValue} from '../StateProvider'
import { useHistory } from 'react-router-dom';

function DetailCard() {
    const history = useHistory()
    const[{cart},dispatch] = useStateValue()

    const gettotal = (cart) => {
        let amount = 0
        cart.map(item=>(
           amount= amount+parseInt(item.price)
        ))    
      return amount
    }

    return (
        <div className='detail-card'>
            <p className='subtotal'>Subtotal({cart.length} items):
            <strong>₹{gettotal(cart)}</strong>
            </p>
            <button onClick={e=>history.push('/cart/checkout')}>Checkout</button>
        </div>
    )
}

export default DetailCard
