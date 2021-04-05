import React from 'react'
import '../css/carwash.css'
import chem from '../images/chem.jpg'

function CarwashLiquid() {
    return (
        <div className='carwash'>
          <h1 className="carwash-heading">
              Special Carwash Liquid
          </h1>
          <div className="container-carwash">
              <div className="text-container-white">
                  <p>
                  Triumb cares for the
            environment and uses least
            amount of water. We have
            developed a special chemical
            composition for a car cleaner to
            give your car the best shine
                  </p>
              
              </div>
              <div className="image">
                  <img  className='chem' src={chem} alt=""/>
              </div>
          </div>
        </div>
    )
}

export default CarwashLiquid
