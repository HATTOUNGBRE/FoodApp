import { Children, createContext } from "react";
import React from "react";



const CartContext = createContext({});

const CartProvider= ({ children }) => {
    return (
        <CartContext.Provider 
        value={{ items: [], onAddItems: () => {}}}>
            {children}
        </CartContext.Provider>
    );

};

export { CartProvider, CartContext };