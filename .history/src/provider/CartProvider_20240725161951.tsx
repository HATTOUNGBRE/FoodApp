import { Children, createContext, PropsWithChildren, useContext, useState } from "react";
import React from "react";
import { CartItem, Product } from "../types";
import { randomUUID } from "expo-crypto";

type CartType = {
    items: CartItem[],
    addItems: (product: Product, size: CartItem['size']) => void;
    updateQuantity:(itemId: string, amount: -1 | 1) => void; // -1 to decrement, 1 to increment
    total: number;
}

const CartContext = createContext<CartType>({
    items: [],
    addItems: () => {},
    updateQuantity: () => {},
    total: 0,
});

const CartProvider= ({ children }: PropsWithChildren ) => {
    const [items, setItems]= useState<CartItem[]>([]);

    const addItems=(product: Product, size: CartItem['size']) => {
        console.log('addItems', product, size);

        //if already in cart, increment quantity
        const existingItem= items.find((item) => item.product === product && item.size === size);
        if (existingItem) {
            updateQuantity(existingItem.id, 1);
            return;
        }

        const newCartItem: CartItem = {
            id: randomUUID(), // generated
            product,
            product_id: product.id,
            size,
            quantity: 1,
        };
        setItems([...items, newCartItem]); // add newCartItem to items
        
    };

    //update quantity
    const updateQuantity=(itemId: string, amount: -1 | 1) => {
       const updatedItems = items.map((item) =>
         item.id !== itemId ? item: {...item, quantity: item.quantity + amount}).filter((item) => item.quantity > 0);
        setItems(updatedItems);
    } // -1 to decrement, 1 to increment

    console.log('items', items);

const total= items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    return (
        <CartContext.Provider 
        value={{ items, addItems, updateQuantity, total}}>
            {children}
        </CartContext.Provider>
    );

};

export { CartProvider, CartContext };

export const useCart = () => useContext(CartContext);