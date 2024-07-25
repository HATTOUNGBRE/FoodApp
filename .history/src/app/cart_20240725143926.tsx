import { View, Text, Platform  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useContext } from 'react';
import { CartContext, useCart } from '../provider/CartProvider';

const CartScreen = () => {
    const { items } = useCart();
  return (
    <View>
      <Text>Cart items length: {items.length} </Text>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

    </View>
  );
}

export default CartScreen;

