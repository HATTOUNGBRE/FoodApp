import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@/assets/data/products'


const ProductDetailScreen = () => {

  const  defaultImagePizza= "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png"

  const { id } = useLocalSearchParams()

  const product =products.find((p) => p.id.toString()=== id)

  if (!product){
    return <Text> Product not found </Text>
  }
  return (
    <View>
      <Stack.Screen  options={{ title: 'Detail for ' + product.name }} />
      <Text> ProductDetailScreen for {product.name} </Text>
      <Image 
        source={{ uri: product.image || defaultImagePizza }}
        style={styles.image}
      />
      <Text>{product.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },

})

export default ProductDetailScreen