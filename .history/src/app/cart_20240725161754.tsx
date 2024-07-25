import { View, Text, Platform, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  useCart } from '../provider/CartProvider';
import CartListItem from '../components/CartListItem';
import Button from '../components/Button';


const CartScreen = () => {
    const { items, total } = useCart();
  return (
    <View style={{padding:10}}>
        <FlatList 
        data={items}
        renderItem={({item}) => <CartListItem cartItem={item}/>}
        contentContainerStyle={{padding:10, gap:10}} />

        <Text style={{margin:3, marginLeft:10, textAlign:'left', fontSize:20, fontWeight:'bold'}}>Total: ${total.toFixed(2)}</Text>

        <Button text='Checkout' onPress={() => console.log('checkout')} />

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

    </View>
  );
}

export default CartScreen; // src/app/cart.tsx

