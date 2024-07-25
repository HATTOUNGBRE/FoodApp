import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@/assets/data/products'
import Colors from '@/src/constants/Colors'

const sizes = ['S', 'M', 'L', 'XL'] ;

const ProductDetailScreen = () => {

  const  defaultImagePizza= "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png"

  const { id } = useLocalSearchParams()

  const product =products.find((p) => p.id.toString()=== id)

  if (!product){
    return <Text> Product not found </Text>
  }
  return (
    <View style={styles.container}>
      <Stack.Screen  options={{ title: 'Detail for ' + product.name }} />
      <Text style={styles.title}> ProductDetailScreen for {product.name} </Text>
      <Image 
        source={{ uri: product.image || defaultImagePizza }}
        style={styles.image}
      /> 

      <Text>Select a Size</Text>
      <View style ={styles.sizes}>
        {sizes.map((size) =>(
          <View style ={styles.sizes} key={size}>
          <Text style={styles.sizeText}>{size}</Text>
          </View>
         ))}
      </View>
         <View>

         </View>


      <Text style={styles.price}>{product.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  price:{
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light.tint,

  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,

  },
  sizes:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  sizeText:{
    color: Colors.light.tint,
    fontWeight: 'bold',
  },

})

export default ProductDetailScreen