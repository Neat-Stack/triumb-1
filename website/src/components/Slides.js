import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import shiny1 from '../images2/shiny1.jpg'

import shiny3 from '../images2/shiny3.jpg'
import shiny4 from '../images2/shiny4.jpg'
import '../css/slide.css'


function Slides() {
    return (
        <div id='slide'>
        <Carousel 
        autoPlay="true"
        infiniteLoop="true"
        interval="3000"
        width="100vw"
        emulateTouch="true"
        transitionTime="1000"
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
