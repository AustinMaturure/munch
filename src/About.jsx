
import './css/about.css'
import swapImage from "./assets/hands.jpg"

function About() {
  

  return (
    <>
     <section className="About" id="about">
     
      <div className="about-text">
      
         
         <div className="about-info">
            <article>   <h1 className='about-header'>OUR STORY</h1>
                <p className='about-info-text'> 

Welcome to Munch, where every meal is a journey through the flavors of nostalgia. Established in 2014 in the heart of Piet Retief, Munch brings the timeless essence of diner-style cuisine to life.

Our story began with a simple idea: to create a place where friends and families could come together to enjoy delicious, comforting meals in a welcoming atmosphere. Inspired by the classic diners of yesteryear, we set out to capture the essence of those cherished memories and infuse them into every dish we serve.

At Munch, we believe in the power of good food to bring people together and create lasting memories. From our mouthwatering burgers piled high with all your favorite toppings to our crispy golden fries and creamy milkshakes, each bite is a taste of tradition and a celebration of the simple joys of life.

Over the years, we have grown and evolved, but our commitment to quality and authenticity has remained unwavering. We take pride in sourcing the finest ingredients and crafting each dish with care and attention to detail, ensuring that every meal that leaves our kitchen is nothing short of perfection.

But Munch is more than just a restaurant; it's a place where laughter fills the air, friendships are forged, and stories are shared. Whether you're joining us for a quick bite on your lunch break or gathering with loved ones for a leisurely dinner, we invite you to sit back, relax, and savor the flavors of Munch.

Thank you for being a part of our journey. We look forward to serving you for many years to come.
                </p>
            </article>
         </div>
         <div className={"about-img-cnt"} >
                <img className='about-img' src={swapImage} alt="burger and chips in piet retief" />
              </div>
         
      </div>
   
     

     </section>
    </>
  )
}

export default About
