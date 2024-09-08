/* eslint-disable react/prop-types */
// import React from 'react'
import { useContext } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  // console.log(id);

  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  // console.log(cartItems)

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/des/${id}`);
  };

  // Prevent propagation to the parent element (image click handler)
  const handleButtonClick = (e) => {
    e.stopPropagation(); // This prevents the click event from bubbling up to the parent
  };

  return (
    <div className="food-item" onClick={handleClick}>
      <div className="food-item-img-container">
        <img
        style={{cursor:'pointer'}}
          src={url + "/images/" + image}
          alt=""
          className="food-item-image"
        />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={(e) => {
              handleButtonClick(e);
              addToCart(id);
            }}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={(e) => {
                handleButtonClick(e);
                removeFromCart(id);
              }}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={(e) => {
                handleButtonClick(e);
                addToCart(id);
              }}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
