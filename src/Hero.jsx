
import './css/Hero.css'
import burgerBackground from './assets/burg.png'

function Hero() {
  

  return (
    <>
     <section className="hero" style={{backgroundImage:`url(${burgerBackground})`}}>
      <div className="hero-text">
         <h1 className='logo-header'>MUNCH</h1>
         <div className="tag-line"><h2>restuarant - est. 2014</h2> <button className='btn-menu'>View Our Menu</button></div>
         
      </div>
   
     

     </section>
    </>
  )
}

export default Hero
