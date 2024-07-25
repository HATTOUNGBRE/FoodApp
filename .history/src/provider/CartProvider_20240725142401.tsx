import { Children, createContext } from "react";
import React from "react";



const CartContext = createContext({});

const CartProvider= ({children}) => {
    return (
        <CartContext.Provider = ({children})=> {
            return(
                <CartContext.Provider 
                    value={{items: [], onAddItem: () => {} }}>
                    {children}
                </CartContext.Provider>
            );
        

}