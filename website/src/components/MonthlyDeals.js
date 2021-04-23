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
    //     <div className='monthly-page'>
    //         <div className="monthly-heading-container">
    //             <div className="monthly-headings">
    //                 <h1>Browse our packages</h1>
    //                 <p>Check out our monthly and yearly packages!</p>
    //             </div>
    //             <div className="arrow">
    //                 <ArrowRightAltIcon/>
    //             </div>
    //         </div>
            
    //         <div className="monthly-deals">
    //             <div className="deal">
    //                 <img className='car-img' src={hatchback} alt=""/>
    //                 <h3 className='car-name'>Hatchback</h3>
    //                 <h3>350/month</h3>
    //                 <a target="blank" href="https://rzp.io/l/MTZgV2Pe">
    //                 <p >Shop This</p>
    //                 </a>
                    
    //             </div>
    //             <div className="deal">
    //                 <img className='car-img' src={sedan} alt=""/>
    //                 <h3 className='car-name'>Sedan</h3>
    //                 <h3>450/month</h3>
    //                 <a target='blank' href="https://rzp.io/l/1BmyfTS1u">
    //                 <p >Shop This</p>
    //                 </a>
                    
    //             </div>
    //             <div className="deal">
    //                 <img className='car-img' src={xuv} alt=""/>
    //                 <h3 className='car-name'>XUV</h3>
    //                 <h3>650/month</h3>
    //                 <a target='blank' href="https://rzp.io/l/WRKpXbK">
    //                 <p>Shop This</p>
    //                 </a>
                    
    //             </div>
    //         </div>
    //     </div>
    <div className='monthly-page'>
    <span id="best">best</span>
    <div className="monthly-heading-container">
        <div className="monthly-headings">
            <h1>Browse our packages</h1>
            <p>Check out our monthly and yearly packages!</p>
        </div>
    </div>
    
    <div className="monthly-deals">
        <div className="deal">
            <img className='car-img' src={hatchback} alt=""/>
            <h3 className='car-name'>Hatchback</h3>
            <h3>350/month</h3>
            <a target="blank" href="https://rzp.io/l/MTZgV2Pe">
                <button  className='monthly-btn'>Shop This</button>        
             </a>
           
        </div>
        <div className="deal">
            <img className='car-img' src={sedan} alt=""/>
            <h3 className='car-name'>Sedan</h3>
            <h3>450/month</h3>
            <a target='blank' href="https://rzp.io/l/1BmyfTS1u">
                <button  className='monthly-btn'>Shop This</button>    
           </a>
          
        </div>
        <div className="deal">
            <img className='car-img' src={xuv} alt=""/>
            <h3 className='car-name'>XUV</h3>
            <h3>650/month</h3>
            <a target='blank' href="https://rzp.io/l/WRKpXbK">
            <button className='monthly-btn' >Shop This</button>
            </a>
           
        </div>
    </div>
</div>
    )
}

export default MonthlyDeals
