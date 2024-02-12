
import './css/Hero.css'
import burgerBackground from './assets/burg.png'

function Hero() {
  

  return (
    <>
     <section className="hero" id="#home"style={{backgroundImage:`url(${burgerBackground})`}}>
      <div className="hero-text">
         <h1 className='logo-header'>MUNCH</h1>
         <div className="tag-line"><h2> Where Every Bite Leaves a Lasting Impression </h2> <button className='btn-menu'><a className="btn-menu-link"href="#menu">View Our Menu</a></button></div>
         
      </div>
   
     

     </section>
    </>
  )
}

export default Hero
