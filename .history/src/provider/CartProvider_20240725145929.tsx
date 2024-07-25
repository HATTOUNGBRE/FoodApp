import { Children, createContext, PropsWithChildren, useContext, useState } from "react";
import React from "react";
import { CartItem, Product } from "../types";

type CartType = {
    items: CartItem[],
    addItems: (product: Product, size: CartItem['size']) => void;
}

const CartContext = createContext<CartType>({
    items: [],
    addItems: () => {},
});

const CartProvider= ({ children }: PropsWithChildren ) => {
    const [items, setItems]= useState<CartItem[]>([]);

    const addItems=(product: Product, size: CartItem['size']) => {
        console.log('addItems', product, size);
    }

    return (
        <CartContext.Provider 
        value={{ items, addItems}}>
            {children}
        </CartContext.Provider>
    );

};

export { CartProvider, CartContext };

export const useCart = () => useContext(CartContext);