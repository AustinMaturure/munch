import React from 'react';
import menuData from './menu.json'; // Assuming menu.json is in the same directory as this component
import pastaImage from './assets/pasta.jpg';
import burgerImage from './assets/burger.jpg';
import seafoodImage from './assets/seafood.jpg';
import drinksImage from './assets/milkshakes.jpg';
import pizzaImage from './assets/pizza.jpg'
import './css/menu.css'

const categoryImages = {
  pastas: pastaImage,
  burgers: burgerImage,
  seafood: seafoodImage,
  milkshakes: drinksImage,
  pizza: pizzaImage
};

const Menu = () => {
  return (
    <div className="menu" id='#menu'>
    {Object.entries(menuData.menu).map(([category, data]) => (
      <div className='food-category'key={category}  id = {`${category}-category`}>
        <h2 className='cat-title'>{category}</h2>
        <div className="cat-menu">
             <div className="cat-img-cnt">
            <img className='cat-image' src={categoryImages[category]} alt={category} />
        </div>
        <div className='menu-items'>
           {data.map(item => (
          <div className='menu-item' id = {`menu-item-${item.name}`} key={item.name}>
            <h3>{item.name}</h3>
            <p className='item-description'>{item.description}</p>
            {category === "pizza" ? (
                <div className="price">
                  {item.prices && item.prices.small && <p className='item-price'>Small: R{parseFloat(item.prices.small).toFixed(2)}</p>}
                  {item.prices && item.prices.large && <p className='item-price'>Large: R{parseFloat(item.prices.large).toFixed(2)}</p>}
                  <hr className='line' />
                </div>
              ) : (
                <p className='item-price'>Price: R{parseFloat(item.price).toFixed(2)}</p>
              )}
            
          </div>
          
        ))}  
        </div>
       
      </div>
        </div>
       
    ))}
</div>
  );
}

export default Menu;
