import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from './styles/Button';
import styled from "styled-components";
const Checkout = () => {
    return (
        <EmptyDiv>
          <h3>Thank You For Shopping with us!</h3>
          <h3>Your order has been placed successfully :)</h3>
          <div className="cart-new">
            <NavLink to="/products">
                
              <Button> Shop more </Button>
            </NavLink>
          </div>
        </EmptyDiv>
      );
}

const EmptyDiv = styled.div`
  display: grid;
  place-items: center;
  height: 80vh;

  .cart-new{
    margin-bottom:50rem;
  }
  h3 {
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 300;
    text-align:center;
    padding:3rem;
  }
`;

export default Checkout