import React from 'react';
import menuData from './menu.json'; // Assuming menu.json is in the same directory as this component
import pastaImage from './assets/pasta.jpg';
import burgerImage from './assets/burger.jpg';
import seafoodImage from './assets/seafood.jpg';
import drinksImage from './assets/drinks.jpg';
import './css/menu.css'

const categoryImages = {
  pastas: pastaImage,
  burgers: burgerImage,
  seafood: seafoodImage,
  drinks: drinksImage
};

const Menu = () => {
  return (
    <>
    {Object.entries(menuData.menu).map(([category, data]) => (
      <div className='food-category'key={category}>
        <h2 className='cat-title'>{category}</h2>
        <div className="cat-menu">
             <div className="cat-img-cnt">
            <img className='cat-image' src={categoryImages[category]} alt={category} />
        </div>
        <div className='menu-items'>
           {data.map(item => (
          <div className='menu-item' key={item.name}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: R{item.price.toFixed(2)}</p>
          </div>
        ))}  
        </div>
       
      </div>
        </div>
       
    ))}
  </>
  );
}

export default Menu;
