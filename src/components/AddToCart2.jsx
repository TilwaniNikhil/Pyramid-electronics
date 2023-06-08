import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { useCartContext } from "../context/cart_context";

import { useWishlistContext } from "../context/wishlist_context";
const AddToCart2 = ({ product }) => {
  const { addToCart } = useCartContext();
  const { removeItem} = useWishlistContext();

  const { id, colors } = product;

  const [color] = useState(colors[0]);
  const [amount] = useState(1);

  
  return (
    <Wrapper>
      
      <NavLink to="/cart" onClick={() => addToCart(id, color, amount, product)}>
        <Button className="btn" onClick={() => removeItem()}>Move To Cart</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .btn{
    padding:10%;
  }
`;
export default AddToCart2;
