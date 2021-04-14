import React,{useState} from 'react'
import '../css/monthly.css'
import sedan from '../images/sedan.jpeg'
import xuv from '../images/xuv.jpeg'
import hatchback from '../images/hatchback.jpeg'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {useStateValue} from '../StateProvider'

function MonthlyDeals() {

    const[{cart},dispatch] = useStateValue()
    const[price,setPrice] = useState(3999)
    const[carType,setCarType] = useState("Hatch")

    const addHatch = () => {
        dispatch({
            type:'ADD',
            item:{
                id:"mhatch",
                carType: "Hatchback",
                price:350,
                subscription:"Monthly"
            }
        })
    }

    const addSedan = () => {
        dispatch({
            type:'ADD',
            item:{
                id:"msedan",
                carType: "Sedan",
                price:450,
                subscription:"Monthly"
            }
        })
    }

    const addXUV = () => {
        dispatch({
            type:'ADD',
            item:{
                id:"mxuv",
                carType: "XUV",
                price:650,
                subscription:"Monthly"
            }
        })
    }

    return (
        <div className='monthly-page'>
            <div className="monthly-heading-container">
                <div className="monthly-headings">
                    <h1>Browse our packages</h1>
                    <p>Check out our monthly and yearly packages!</p>
                </div>
                <div className="arrow">
                    <ArrowRightAltIcon/>
                </div>
            </div>
            
            <div className="monthly-deals">
                <div className="deal">
                    <img className='car-img' src={hatchback} alt=""/>
                    <h3 className='car-name'>Hatchback</h3>
                    <h3>350/month</h3>
                    <p onClick={addHatch}>Shop This</p>
                </div>
                <div className="deal">
                    <img className='car-img' src={sedan} alt=""/>
                    <h3 className='car-name'>Sedan</h3>
                    <h3>450/month</h3>
                    <p onClick={addSedan}>Shop This</p>
                </div>
                <div className="deal">
                    <img className='car-img' src={xuv} alt=""/>
                    <h3 className='car-name'>XUV</h3>
                    <h3>650/month</h3>
                    <p onClick={addXUV}>Shop This</p>
                </div>
            </div>
        </div>
    )
}

export default MonthlyDeals
