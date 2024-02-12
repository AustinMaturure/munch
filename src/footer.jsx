import React from "react";
import './css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faMessage, faPhone, faTextSlash } from "@fortawesome/free-solid-svg-icons";


export default function Footer(){
    return (
      <>
        <section className='footer'>
       
          
        <div className="foot-contact">
         
        <h3 className='foot-call-contact'> <FontAwesomeIcon icon={faPhone} className="clock-icon"/>   017 826 0016</h3>
        <h3>
   
        
        <FontAwesomeIcon icon={faLocation} className="clock-icon"/>   1 B Church Street Piet Retief 2380</h3>
<div className='opening-times'>
  <div>
    <h3>MON - FRI</h3>
    <h4>08:00 - 17:00</h4>
  </div>
  <div ><h3>SAT</h3>
    <h4>09:00 - 11:00</h4></div>
    <div ><h3>SUN</h3>
    <h4>CLOSED</h4></div>
</div>
  
        </div>
        <div className='logo-ctn' ><h1 className='logo'>
          Munch</h1>
          <p className='ocu-optometrist'>restaurant</p><p className='ocu-optometrist'>piet retief</p></div>
        
        <div className="map">
        
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7110.106818798368!2d30.7946965168632!3d-26.99686020475139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eeee482335c517d%3A0x563b7ed0c6ec3638!2sMunch%20Restaurant!5e0!3m2!1sen!2sza!4v1707730156774!5m2!1sen!2sza"
    width="400"
    height="200"
    className="map-frame"
    style={{ border: '2px solid #1f1f1f', borderRadius: "22px" }}
    allowFullScreen=""
    loading="async"  
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
      
      </section> 
      <section className="service-options">
                <h2>Service options</h2>
                <ul>
                    <li>Outdoor seating</li>
                    <li>Takeaway</li>
                    <li>Dine-in</li>
                </ul>
                <h2>Highlights</h2>
                <ul>
                    <li>Fireplace</li>
                    <li>Great cocktails</li>
                    <li>Sport</li>
                </ul>
                <h2>Amenities</h2>
                <ul>
                    <li>Bar on site</li>
                    <li>Toilets</li>
                    <li>Wi-Fi</li>
                    <li>Free Wi-Fi</li>
                </ul>
                <h2>Children</h2>
                <ul>
                    <li>Good for kids</li>
                    <li>High chairs</li>
                    <li>Kids' menu</li>
                </ul>
                
               
               
                
                <h2>Crowd</h2>
                <ul>
                    <li>Family friendly</li>
                    <li>Groups</li>
                </ul>
                
                <h2>Planning</h2>
                <ul>
                    <li>Accepts reservations</li>
                </ul>
             
             
                <h2>Parking</h2>
                <ul>
                    <li>Free parking lot</li>
                </ul>
                <h2>Dining options</h2>
                <ul>
                    <li>Breakfast</li>
                    <li>Brunch</li>
                    <li>Lunch</li>
                    <li>Dinner</li>
                    <li>Dessert</li>
                </ul>
               
                <h2>Payments</h2>
                <ul>
                    <li>Credit cards</li>
                    <li>Debit cards</li>
                    <li>NFC mobile payments</li>
                   
                </ul>
                <h2>Accessibility</h2>
                <ul>
                    <li>Wheelchair-accessible car park</li>
                    <li>Wheelchair-accessible entrance</li>
                    <li>Wheelchair-accessible seating</li>
                    <li>Wheelchair-accessible toilet</li>
                </ul>
                <h2>Offerings</h2>
                <ul>
                    <li>Alcohol</li>
                    <li>Coffee</li>
                    <li>Late-night food</li>
                    <li>Small plates</li>
                    <li>Spirits</li>
                    <li>Vegan & Vegetarian options</li>
                   
                </ul>
            </section>
      
       <div className="legal">
  <p className="copy-right">&copy; {new Date().getFullYear()} Munch Piet Retief. All rights reserved.</p>
  <p className="author">Designed and developed by <a className="austin-portfolio" href="https://austinmaturure.github.io/CV/" target="_blank" rel="noopener noreferrer">⚡</a></p>

</div></>
    )
}