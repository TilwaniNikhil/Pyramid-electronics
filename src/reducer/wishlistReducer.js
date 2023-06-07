const wishlistReducer = (state, action) => {
    if (action.type === "ADD_TO_WISHLIST") {
      let { id, color, amount, product } = action.payload;
  
      // tackle the existing product
  
      let existingProduct = state.wishlist.find(
        (curItem) => curItem.id === id + color
      );
  
      if (existingProduct) {
        let updatedProduct = state.wishlist.map((curElem) => {
          if (curElem.id === id + color) {
            let newAmount = curElem.amount + amount;
  
            if (newAmount >= curElem.max) {
              newAmount = curElem.max;
            }
            return {
              ...curElem,
              amount: newAmount,
            };
          } else {
            return curElem;
          }
        });
        return {
          ...state,
          wishlist: updatedProduct,
        };
      } else {
        let wishlistProduct = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };
  
        return {
          ...state,
          wishlist: [...state.wishlist, wishlistProduct],
        };
      }
    }
  
    // to set the increment and decrement
    if (action.type === "SET_DECREMENT2") {
      let updatedProduct = state.wishlist.map((curElem) => {
        if (curElem.id === action.payload) {
          let decAmount = curElem.amount - 1;
  
          if (decAmount <= 1) {
            decAmount = 1;
          }
  
          return {
            ...curElem,
            amount: decAmount,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, wishlist: updatedProduct };
    }
  
    if (action.type === "SET_INCREMENT2") {
      let updatedProduct = state.wishlist.map((curElem) => {
        if (curElem.id === action.payload) {
          let incAmount = curElem.amount + 1;
  
          if (incAmount >= curElem.max) {
            incAmount = curElem.max;
          }
  
          return {
            ...curElem,
            amount: incAmount,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, wishlist: updatedProduct };
    }
  
    if (action.type === "REMOVE_ITEM2") {
      let updatedwishlist = state.wishlist.filter(
        (curItem) => curItem.id !== action.payload
      );
      return {
        ...state,
        wishlist: updatedwishlist,
      };
    }
  
    // to empty or to clear to wishlist
    if (action.type === "CLEAR_WISHLIST2") {
      return {
        ...state,
        wishlist: [],
      };
    }
  
    if (action.type === "WISHLIST_TOTAL_ITEM2") {
      let updatedItemVal = state.wishlist.reduce((initialVal, curElem) => {
        let { amount } = curElem;
  
        initialVal = initialVal + amount;
        return initialVal;
      }, 0);
  
      return {
        ...state,
        total_item_wishlist: updatedItemVal,
      };
    }
  
    if (action.type === "WISHLIST_TOTAL_PRICE2") {
      let total_price = state.wishlist.reduce((initialVal, curElem) => {
        let { price, amount } = curElem;
  
        initialVal = initialVal + price * amount;
  
        return initialVal;
      }, 0);
  
      return {
        ...state,
        total_price,
      };
    }
  
    // if (action.type === "wishlist_ITEM_PRICE_TOTAL") {
    //   let { total_item, total_price } = state.wishlist.reduce(
    //     (accum, curElem) => {
    //       let { price, amount } = curElem;
  
    //       accum.total_item += amount;
    //       accum.total_price += price * amount;
  
    //       return accum;
    //     },
    //     {
    //       total_item: 0,
    //       total_price: 0,
    //     }
    //   );
    //   return {
    //     ...state,
    //     total_item,
    //     total_price,
    //   };
    // }
  
    return state;
  };
  
  export default wishlistReducer;
  