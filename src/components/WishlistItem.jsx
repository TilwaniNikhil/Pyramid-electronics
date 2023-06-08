import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import { FaTrash } from "react-icons/fa";
import { useWishlistContext } from "../context/wishlist_context";
import AddToCart2 from "./AddToCart2";
import { useProductContext } from "../context/productcontext";



const WishlistItem = ({ id, name, image, color, price}) => {
  const { singleProduct } =
    useProductContext();
  const { removeItem} = useWishlistContext();
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

     

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
      <AddToCart2  product={singleProduct} />
      
    </div>
    
  );
};

export default WishlistItem;
