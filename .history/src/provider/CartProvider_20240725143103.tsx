import { Children, createContext } from "react";
import React from "react";
import { Stack } from 'expo-router';



const CartContext = createContext({});

const CartProvider= ({ children }) => {
    return (
        <CartContext.Provider 
        value={{ items: [], onAddItems: () => {}}}>
            (<Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="cart" options={{ presentation: 'modal' }} />

      </Stack>)
        </CartContext.Provider>
    );

};

export { CartProvider, CartContext };