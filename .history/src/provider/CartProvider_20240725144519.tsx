import { Children, createContext, PropsWithChildren, useContext } from "react";
import React from "react";
import { CartItem, Product } from "../types";

type CartType = {
    items: CartItem[],
    addItems: (product: Product, size: CartItem['size']) => void;
}

const CartContext = createContext({});

const CartProvider= ({ children }: PropsWithChildren ) => {
    return (
        <CartContext.Provider 
        value={{ items: [1,2,3,4], onAddItems: () => {}}}>
            {children}
        </CartContext.Provider>
    );

};

export { CartProvider, CartContext };

export const useCart = () => useContext(CartContext);