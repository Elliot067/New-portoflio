import '../styles/Portfolio.css'
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Portfolio_Main from '../assets/Portfolio_main.jpg';
import Portfolio_BTS from '../assets/Portfolio_BTS.jpg';

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
       <img src={Portfolio_Main} />
       <div id='projet1'>Mon portfolio : Réalisé avec REACT</div>
       </div>
       <div id="carousel2">
        <img src={Portfolio_BTS} />
        <div id='projet2'>Le porfolio que j'ai réalisé durant mon BTS : Réalisé en HTML / CSS et un peu de JS. https://elliot067.github.io/portfolio/Accueil
        </div>
        </div>
        <div id="carousel3">
        
        </div>

        </Carousel>
        </div>
        )
}

export default Portfolio