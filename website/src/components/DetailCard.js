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

    const gstCalc =(cart)=>{
        let sum=0
        sum=gettotal(cart)*0.18
        return sum
    }

    return (
        <div className="detail-container">
                    <div className='detail-card'>
            <p className='subtotal'><strong>Subtotal({cart.length} items)</strong></p>
          <p className="right"><strong >₹{gettotal(cart)}</strong>
            </p>
        </div>
                    <div className='detail-card'>
            <p>GST (18%)</p>
          <p className="right"><strong >₹{(gstCalc(cart)).toPrecision(5)}</strong>
            </p>
        </div>
                    <div className='detail-card'>
            <p className='subtotal'><strong>Total({cart.length} items)</strong></p>
          <p className="right"><strong >₹{gstCalc(cart)+gettotal(cart)}</strong>
            </p>
        </div>
        <div className="btns">
        <button id="checkoutBtn" onClick={e=>history.push('/cart/checkout')}>Checkout</button>
        <br></br>
            {/* <button id="checkoutBtn" onClick={e=>history.push('/')}>Home</button> */}
        </div>
            
        </div>

    )
}

export default DetailCard
