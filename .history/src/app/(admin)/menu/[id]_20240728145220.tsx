import { View, Text, Image, StyleSheet, Pressable,  } from 'react-native'
import React from 'react'
import { Stack,Link, useLocalSearchParams, useRouter } from 'expo-router'
import products from '@/assets/data/products'
import Colors from '@/src/constants/Colors'
import Button from '@/src/components/Button'
import { useCart } from '@/src/provider/CartProvider'
import { useState } from 'react'
import { PizzaSize } from '@/src/types'
import { FontAwesome } from '@expo/vector-icons'

const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'] ;




const ProductDetailScreen = () => {

  const router= useRouter();
  const [selectedSize, setselectedSize]= useState<PizzaSize> ('M');

  const  defaultImagePizza= "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png"

  const { id } = useLocalSearchParams();
  const { addItems } = useCart();

  const product =products.find((p) => p.id.toString()=== id)

  const addToCart = () => {
    if (!product){
      return;
    }
   addItems(product, selectedSize);
   router.push('/cart');
  }

  if (!product){
    return <Text> Product not found </Text>
  }
  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          title: 'Menu',
          headerRight: () => (
          <Link href="/(admin/menu/create" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="pencil"
                  size={25}
                  color={"green"}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        )}}
    />
      <Stack.Screen  options={{ title: 'Detail for ' + product.name }} />
      <Image 
        source={{ uri: product.image || defaultImagePizza }}
        style={styles.image}
      /> 

  
         <View>

         </View>

      <Text style={styles.title}>{product.name}</Text>
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
    fontSize: 16,
    fontWeight: 'bold',
    color: "black",
    marginTop: 10,

  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,

  },
  sizes:{ // container for sizes
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  size:{ // container for each size
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor:"green",
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',

  },
  sizeText:{
    color: "green",
    fontWeight: 'bold',
  },

})

export default ProductDetailScreen