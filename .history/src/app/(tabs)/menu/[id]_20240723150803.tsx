import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams()
  return (
    <View>
      <Stack.Screen name="index" options={{ title: 'Product Detail' }} />
      <Text> ProductDetailScreen for {id} </Text>
    </View>
  )
}

export default ProductDetailScreen