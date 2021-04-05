import React from 'react'
import '../css/monthly.css'
import sedan from '../images/sedan.jpeg'
import xuv from '../images/xuv.jpeg'
import hatchback from '../images/hatchback.jpeg'

function MonthlyDeals() {
    return (
        <div className='monthly-page'>
            <h1>Browse our packages</h1>
            <p>Check out our monthly and yearly packages!</p>
            <div className="monthly-deals">
                <div className="deal">
                    <img className='car-img' src={hatchback} alt=""/>
                    <h3 className='car-name'>Hatchback</h3>
                    <h3>350/month</h3>
                    <p>Shop This</p>
                </div>
                <div className="deal">
                    <img className='car-img' src={sedan} alt=""/>
                    <h3 className='car-name'>Sedan</h3>
                    <h3>450/month</h3>
                    <p>Shop This</p>
                </div>
                <div className="deal">
                    <img className='car-img' src={xuv} alt=""/>
                    <h3 className='car-name'>XUV</h3>
                    <h3>650/month</h3>
                    <p>Shop This</p>
                </div>
            </div>
        </div>
    )
}

export default MonthlyDeals
