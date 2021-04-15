import React,{useState} from 'react'
import '../css/yearlypage.css'
import {useStateValue} from '../StateProvider'
import shiny1 from '../images/monthly.jpg'
function YearlyDeals() {
    const[{cart},dispatch] = useStateValue()
    const[price,setPrice] = useState("3999")
    const[carType,setCarType] = useState("Hatch")
    const[id,setid] = useState("yhatch")

    const hatch = () => {
        setPrice(3999)
        setCarType("Hatchback")
        setid("yhatch")

    }
    const sedan = () => {
        setCarType("Sedan")
        setPrice(4999)
        setid("ysedan")

    }
    const xuv = () => {
        setCarType("XUV")
        setPrice(5999)
        setid("yxuv")

    }

    const addtocart = () => {
        dispatch({
            type:'ADD',
            item:{
                carType: carType,
                price:price,
                subscription:"yearly",
                id:id,
            }
        })
    }

    return (
        <div className='yearly-page'>
            <img src={shiny1} className='shiny'></img>
            <div className="yearly-deals">
                
                <h1>Explore our yearly deals</h1>
                <p>Want to save money on the long run? Check out our yearly deals just for you. Select your car below and get the best offers!</p>
                <br></br>
                <div className="names">
                    <button className='name' onClick={hatch}>HATCHBACK</button>
                    <button className='name' onClick={sedan}>SEDAN</button>
                    <button className='name' onClick={xuv}>XUV</button>
                </div>
                <br></br>
                <h1 className='price'>₹{price}</h1>
                <br></br>
                <button  className='get-deal' onClick={addtocart}>Get Deal!</button>
            </div>

        </div>
 
    )
}

export default YearlyDeals
