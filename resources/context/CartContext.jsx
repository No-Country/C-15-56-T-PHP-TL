import React, {createContext, useContext, useState} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartData, setCartData] = useState([]);
    const [cartCount, setCartCount] = useState(0);


    const addToCart = (item) => {
        setCartData([...cartData, item]);
        setCartCount(cartCount+1);
    };

    const value = {
        cartData,
        cartCount,
        addToCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};

export const useCart = () => {
    return useContext(CartContext);
};