import { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./Des.css";

const Des = () => {
  const { id } = useParams(); // Get the ID from the URL

  const { cartItems, food_list, url, addToCart, removeFromCart } =
    useContext(StoreContext); // Access the food_list from the context

  // Find the item based on the ID
  const item = food_list.find((food) => food._id === id);

  console.log(item);

  return (
    <div>
      {item ? (
        <div className="food-description">
          <img
            className="food-desc-page-image"
            src={url + "/images/" + item.image}
            alt={item.name}
          />

          <div className="food-desc-content-container">
            <h1>{item.name}</h1>
            <div className="food-desc-content">
              <p className="food-desc-desc2">{item.desc2}</p>
              {/* <p>{item.description}</p> */}
              <p className="food-desc-price-para">Price: ${item.price}</p>
              {!cartItems[id] ? (
                <h2
                  className="food-des-addtocart"
                  onClick={() => addToCart(id)}
                >
                  Add to cart
                </h2>
              ) : (
                <div className="food-des-incremtor">
                  <h2
                    className="food-desc-increment-signs"
                    onClick={() => removeFromCart(id)}
                  >
                    -
                  </h2>
                  <p>{cartItems[id]}</p>
                  <h2
                    className="food-desc-increment-signs"
                    onClick={() => addToCart(id)}
                  >
                    +
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
};

export default Des;
