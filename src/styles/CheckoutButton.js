import React from 'react'
import "./CheckoutButton.css"
const CheckoutButton = () => {
  return (
    <button class="order"><span class="default">Complete Order</span><span class="success">Order Placed<svg viewbox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </svg></span>
    <div class="box"></div>
    <div class="truck">
        <div class="back"></div>
        <div class="front">
            <div class="window"></div>
        </div>
        <div class="light top"></div>
        <div class="light bottom"></div>
    </div>
    <div class="lines"></div>
</button>
$('.order').click(function(e) {
    let button = $(this);

    if(!button.hasClass('animate')) {
        button.addClass('animate');
        setTimeout(() => {
            button.removeClass('animate');
        }, 10000);
    }

});

  )
}

export default CheckoutButton