import React from 'react'
import '../css/landing.css'
import Slides from './Slides'

function Landing() {
    return (
        <div className='landing-page'>
              <div className="text-container">
                <pre >
                    <h1 className='tagline'>A Moment</h1>
                    <h1 className='tagline'>of Shine</h1>
                    <br></br>
                    <br></br>
                    <a href="#storyid" className='explore-btn'>
                Explore Now
                </a>
                </pre>
                
                
           </div>
           <div className="slideshow">
            <Slides/>
           </div>
        </div>
    )
}

export default Landing
