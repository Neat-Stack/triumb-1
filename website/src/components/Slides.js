import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import shiny1 from '../images/shiny1.jpg'

import shiny3 from '../images/shiny3.jpg'
import shiny4 from '../images/shiny4.jpg'
import '../css/slide.css'


function Slides() {
    return (
        <div>
        <Carousel 
        autoPlay="true"
        infiniteLoop="true"
        interval="2000"
        width="600px"
        emulateTouch="true"
       
       showThumbs={false}
        >
                <div>
                    <img className='slideshow-img' src={shiny1} />
                    
                </div>
                <div>
                    <img className='slideshow-img' src={shiny4} />
                   
                </div>
                <div>
                    <img className='slideshow-img' src={shiny3} />
                    
                </div>
            </Carousel>      
        </div>
    )
}

export default Slides
