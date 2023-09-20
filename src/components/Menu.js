// Menu.js

import React from 'react';
import recipes from '../recipes.js';

function Menu() {
  return (
    <div className='menu-container'>
      <div className='menu-header'>
        <h2>This week's specials!</h2>
        <button aria-label='Order Menu'>Order Menu</button>
      </div>

      {/* menu cards */}
      <div className='cards'>
        {
            recipes.map(recipe => <div key={recipe.id} className='menu-items'>
                <img src={recipe.image} alt={`Image of ${recipe.title}`} />
                <div className='menu-content'>
                    <div className='heading'>
                        <h5>{recipe.title}</h5>
                        <p>{recipe.price}</p>
                    </div>
                    <p>{recipe.description}</p>
                    <button className='orderbtn' aria-label={`Order ${recipe.title}`}>Order Now!</button>
                </div>
            </div>)
        }
      </div>
    </div>
  );
}

export default Menu;