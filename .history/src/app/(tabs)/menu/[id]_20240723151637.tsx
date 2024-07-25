import { View, Text, Image } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@/assets/data/products'


const ProductDetailScreen = () => {

  const { id } = useLocalSearchParams()

  const product =products.find((p) => p.id.toString()=== id)
  return (
    <View>
      <Stack.Screen  options={{ title: 'Detail for ' + product?.name }} />
      <Text> ProductDetailScreen for {id} </Text>
      <Image 
        source={{uri: product?.image}}
        style={{width: 200, height: 200}}
      />
    </View>
  )
}

export default ProductDetailScreen