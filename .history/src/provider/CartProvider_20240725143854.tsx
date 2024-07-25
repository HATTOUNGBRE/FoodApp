import { Children, createContext, useContext } from "react";
import React from "react";



const CartContext = createContext({});

const CartProvider= ({ children }) => {
    return (
        <CartContext.Provider 
        value={{ items: [1,2,3,4], onAddItems: () => {}}}>
            {children}
        </CartContext.Provider>
    );

};

export { CartProvider, CartContext };

export const useCart = () => useContext(CartContext);