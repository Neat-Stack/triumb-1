import React from 'react'
import '../css/cartitem.css'
import {useStateValue} from '../StateProvider'
import shiny3 from '../images/shiny3.jpg'
import DeleteIcon from '@material-ui/icons/Delete';

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
        <img className="item-image" src={shiny3}></img>
            <h2>{carType}</h2>
            <p> {subscription} Package</p>
            <a onClick={removefromcart} className=' item-right tab rm-btn'><DeleteIcon/></a>
            <h2 className="price tab" >{price}</h2>
            </div>
        </div>
    )
}

export default CartItem
