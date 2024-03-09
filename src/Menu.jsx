import React from 'react';
import menuData from './menu.json'; // Assuming menu.json is in the same directory as this component
import pastaImage from './assets/pasta.webp';
import useElementInView from './ElementInView';
import burgerImage from './assets/burger.webp';
import seafoodImage from './assets/seafood.webp';
import drinksImage from './assets/milkshakes.webp';
import pizzaImage from './assets/pizza.webp'
import './css/menu.css'

const categoryImages = {
  pastas: pastaImage,
  burgers: burgerImage,
  seafood: seafoodImage,
  milkshakes: drinksImage,
  pizza: pizzaImage
};

const categoryDes = {
  pastas: "Pasta La Vista, Baby",
  burgers: "Flip for Flavor",
  seafood: "Catch a Wave of Flavor",
  milkshakes: "Sip into Sweet Surrender",
  pizza: "Slice Up Some Cheesy Grins"
};

const Menu = () => {
  return (
    <div className="menu" id='menu'>
      {Object.entries(menuData.menu).map(([category, data]) => {
        const categoryRef = useElementInView(`.cat-title-${category}`);
        const imageRef = useElementInView(`.cat-img-cnt-${category}`);
        const menuRef = useElementInView(`.menu-items-${category}`);
        const descRef = useElementInView(`.cat-desc-${category}`);

        return (
          <div className='food-category' key={category} id={`${category}-category`}>
            <h2 className={`cat-title cat-title-${category}`} ref={categoryRef}>- {category} -</h2>
            <h3 className={`cat-desc cat-desc-${category}`} ref={descRef}>-{categoryDes[category]}-</h3>

          <div className="cat-menu">
              <div className={`cat-img-cnt cat-img-cnt-${category}`} ref={imageRef}>
                <img className='cat-image' src={categoryImages[category]} alt={category} />
              </div>
              <div className={`menu-items menu-items-${category}`} ref={menuRef}>
                {data.map(item => (
                  <div className='menu-item' id={`menu-item-${item.name}`} key={item.name}>
                    <h3>{item.name}</h3>
                    <p className='item-description'>{item.description}</p>
                    {category === "pizza" ? (
                      <div className="price">
                        {item.prices && item.prices.small && <p className='item-price'>Small: R{parseFloat(item.prices.small).toFixed(2)}</p>}
                        {item.prices && item.prices.large && <p className='item-price'>Large: R{parseFloat(item.prices.large).toFixed(2)}</p>}
                      </div>
                    ) : (
                      <p className='item-price'> R {parseFloat(item.price).toFixed(2)}</p>
                    )}
                    <hr className='line' />
                  </div>
                ))}  
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
