import React, { useState } from 'react';
import './Popular.css';
import whitesuit from '../assets/Stylishwhitesuit.png';
import favorite_icon from '../assets/favorite.svg';
import viewmore_icon from '../assets/viewmore_icon.svg';  // Make sure to have this icon in your assets

const PopularProduct = ({ imgSrc, name, oldPrice, newPrice }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className='popularproduct griditems'>
      <div className='imageContainer'>
        <img src={imgSrc} alt={name} />
        <div className='item-rating'>4.5 ★</div>
        <div 
          className={`item-like ${liked ? 'liked' : ''}`} 
          onClick={toggleLike}
        >
          <img src={favorite_icon} alt="like" />
        </div>
      </div>
      <div className="item-name">{name}</div>
      <div className="item-oldprice">₹{oldPrice}</div>
      <div className="item-newprice">₹{newPrice}</div>
    </div>
  );
};

export const Popular = () => {
  const products = [
    { imgSrc: whitesuit, name: "Men's Suits", oldPrice: "1999", newPrice: "1699" },
    { imgSrc: whitesuit, name: "Men's Suits", oldPrice: "1999", newPrice: "1699" },
    { imgSrc: whitesuit, name: "Men's Suits", oldPrice: "1999", newPrice: "1699" },
    { imgSrc: whitesuit, name: "Men's Suits", oldPrice: "1999", newPrice: "1699" }
  ];

  return (
    <div className='popularproducts container'>
      <div className='middleitem'>
        <div className='productheading'>
          <h1>Popular Products</h1>
        </div>
        <div className='viewmore'>
          <button className='viewmorebtn'>
            View More
            <img src={viewmore_icon} alt="view more" className='viewmore-icon' />
          </button>
        </div>
      </div>
      <div className='popularproducts itemlist'>
        {products.map((product, index) => (
          <PopularProduct 
            key={index}
            imgSrc={product.imgSrc}
            name={product.name}
            oldPrice={product.oldPrice}
            newPrice={product.newPrice}
          />
        ))}
      </div>
    </div>
  );
};
