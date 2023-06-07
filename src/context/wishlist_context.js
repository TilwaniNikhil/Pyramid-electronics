import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/wishlistReducer";

const WishlistContext = createContext();

const initialState = {
  wishlist: [],
  // wishlist: getLocalwishlistData(),
  total_item_wishlist: "",
  total_price: "",
  shipping_fee: 50000,
};

const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToWishlist = (id, product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: { id,  product } });
  };

  // increment and decrement the product

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT2", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT2", payload: id });
  };

  // to remove the individual item from wishlist
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM2", payload: id });
  };

  // to clear the wishlist
  const clearWishlist = () => {
    dispatch({ type: "CLEAR_WISHLIST2" });
  };

  // to add the data in localStorage
  // get vs set

  useEffect(() => {
    dispatch({ type: "WISHLIST_TOTAL_ITEM2" });
    dispatch({ type: "WISHLIST_TOTAL_PRICE2" });
    dispatch({ type: "wishlist_ITEM_PRICE_TOTAL" });

    localStorage.setItem("mywishlist", JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  return (
    <WishlistContext.Provider
      value={{
        ...state,
        addToWishlist,
        removeItem,
        clearWishlist,
        setDecrease,
        setIncrement,
      }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlistContext = () => {
  return useContext(WishlistContext);
};

export { WishlistProvider, useWishlistContext };
