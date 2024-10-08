import { View, Text, Platform, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  useCart } from '../provider/CartProvider';
import CartListItem from '../components/CartListItem';


const CartScreen = () => {
    const { items } = useCart();
  return (
    <View>
        <FlatList 
        data={items}
        renderItem={({item}) => <CartListItem cartItem={item}/>} />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

    </View>
  );
}

export default CartScreen; // src/app/cart.tsx

