
import './css/about.css'

import frntImage from "./assets/front-of-restaurant.webp"
import extImage from "./assets/munch-exterior.webp"
import intImage from "./assets/munch-interior.webp"
import useElementInView from './ElementInView';

function About() {
  
const abtRef = useElementInView('.about-text');
  return (
    <>
    
    
     <section className="About" id="about" >
     
      <div className="about-text"ref={abtRef}>
      
         
         <div className="about-info">
            <article>   <h1 className='about-header'>- Our Story -</h1>
            
                <p className='about-info-text'> 

                

Welcome to <span style={{fontFamily:
'paquito'}}>Munch</span>, Piet Retief's very own rustic diner since 2014.
Here, we blend cherished memories and classic flavors in every dish.

Inspired by traditional diners, we've crafted a cozy space for friends and families to enjoy hearty meals.
Our menu is a tribute to those timeless flavors, carefully prepared with quality ingredients.

From towering burgers to creamy milkshakes, each dish tells a story of comfort and satisfaction.
Join us for a taste of nostalgia and warm hospitality, where laughter fills the air and bonds are forged.<br/><br/>

Thank you for being a part of our journey. Here's to many more delicious memories together.
                </p>
            </article>
         </div>
         <div className='munch-images'> <div className={"about-img-cnt"} >
                <img className='about-img' src={frntImage} alt="burger and chips in piet retief" />
              </div>
              <div className={"about-img-cnt"} >
                <img className='about-img' src={extImage} alt="burger and chips in piet retief" />
              </div>
              <div className={"about-img-cnt"} >
                <img className='about-img' src={intImage} alt="burger and chips in piet retief" />
              </div></div>
        
         
      </div>
   
     

     </section>
     
     
     

    </>
  )
}

export default About
