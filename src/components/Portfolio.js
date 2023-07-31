import '../styles/Portfolio.css'
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CV from '../assets/CV_ElliotGuiberteau.jpg'

function Portfolio() {
    return (
            
        <div>
            <div id='portfolio'>
            <h1>Mes réalisations</h1>
            </div>

    <Carousel
    infiniteLoop 
    renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
        hasPrev && (
            <button id='btn-prev' onClick={clickHandler}>
                ← 
            </button>
        )
    }
    renderArrowNext={(clickHandler, hasNext, labelNext) =>
        hasNext && (
            <button id="btn-next" onClick={clickHandler}>
               →  
            </button>
        )
    }
    renderThumbs={() => null}
    showStatus={false}
    >
        

       <div id="carousel1">
       </div>
       <div id="carousel2">
        
        </div>
        <div id="carousel3">
        
        </div>

        </Carousel>
        </div>
        )
}

export default Portfolio