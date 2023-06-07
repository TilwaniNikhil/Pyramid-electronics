import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { useProductContext } from "../context/productcontext";
import { useWishlistContext } from "../context/wishlist_context";

import { useCartContext } from "../context/cart_context";
import AddToCart from "./AddToCart";

const WishlistItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setDecrease, setIncrement } = useWishlistContext();
  const { addToCart } = useCartContext();
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

    const {
    
      
      stock,
      
    } = singleProduct;
  // const setDecrease = () => {
  //   amount > 1 ? setAmounts(amount - 1) : setAmounts(1);
  // };

  // const setIncrease = () => {
  //   amount < stock ? setAmounts(amount + 1) : setAmounts(stock);
  // };

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}></div>
          </div>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* Quantity  */}
     
      {/* //Subtotal */}
      {/* <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div> */}

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
      <NavLink to="/cart" >
        <Button className="btn">Move To Cart</Button>
      </NavLink>
      
    </div>
    
  );
};

export default WishlistItem;
