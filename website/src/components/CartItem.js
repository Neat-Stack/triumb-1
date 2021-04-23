import React from 'react'
import '../css/cartitem.css'
import {useStateValue} from '../StateProvider'

function CartItem({id,carType,price,subscription}) {
    const[{cart},dispatch]= useStateValue()

    const removefromcart = () => {
        dispatch({
            type:'REMOVE',
            id:id
        })
    }

    return (
        <div className='cartItem'>
            <div className="item-content">
            <h2>Type of car: {carType}</h2>
            <h2>Package: {subscription}</h2>
            <h2>Amount: {price}</h2>
            </div>
            <button onClick={removefromcart} className='rm-btn'>Remove</button>
        </div>
    )
}

export default CartItem
