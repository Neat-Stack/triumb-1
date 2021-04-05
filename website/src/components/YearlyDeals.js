import React,{useState} from 'react'
import '../css/yearlypage.css'



function YearlyDeals() {

    const[price,setPrice] = useState(3999)

    const hatch = () => {
        setPrice(3999)
    }
    const sedan = () => {
        setPrice(4999)
    }
    const xuv = () => {
        setPrice(5999)
    }

    return (
        <div className='yearly-page'>
            
            <div className="yearly-deals">
                
                <h1>Explore our yearly deals</h1>
                <p>Want to save money on the long run? Check out our yearly deals just for you. Select your car below and get the best offers!</p>
                <div className="names">
                    <h3 className='name' onClick={hatch}>HATCHBACK{'>'} </h3>
                    <h3 className='name' onClick={sedan}>SEDAN{'>'}</h3>
                    <h3 className='name' onClick={xuv}>XUV{'>'}</h3>
                </div>
                <h1>₹{price}</h1>
                <button className='get-deal'>Get Deal</button>
            </div>
        </div>
    )
}

export default YearlyDeals
