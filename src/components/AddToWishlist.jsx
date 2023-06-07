import { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { useWishlistContext } from "../context/wishlist_context";

const AddToWishlist = ({ product }) => {
  const { addToWishlist } = useWishlistContext();

  const { id, colors, stock } = product;

  // const [amount, setAmount] = useState(1);

  // const setDecrease = () => {
  //   amount > 1 ? setAmount(amount - 1) : setAmount(1);
  // };

  // const setIncrease = () => {
  //   amount < stock ? setAmount(amount + 1) : setAmount(stock);
  // };

  return (
    <Wrapper>
      

      
      
      <NavLink to="/wishlist" onClick={() => addToWishlist(id, product)}>
        <Button className="btn-clear">Add To wishlist</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
.btn-clear {
  background-color: #e74c3c;
}
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #e74c3c;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddToWishlist;
