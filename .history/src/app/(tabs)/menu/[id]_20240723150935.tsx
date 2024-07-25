import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams()
  return (
    <View>
      <Stack.Screen  options={{ title: 'Product Detail for ' + id }} />
      <Text> ProductDetailScreen for {id} </Text>
    </View>
  )
}

export default ProductDetailScreen