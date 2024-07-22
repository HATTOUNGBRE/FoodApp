import { StyleSheet, Text, View, Image } from 'react-native';
import EditScreenInfo from '@/src/components/EditScreenInfo';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';
import ProductListItems from '@/src/components/ProductListItems';


export default function MenuScreen() {
  return( <View>
    <ProductListItems product = {products[0]}/>
    <ProductListItems product = {products[1]}/>
    <ProductListItems product = {products[2]}/>
    <ProductListItems product = {products[3]}/>
    

  </View>);
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },

  price: {
    fontSize: 16,
    color: Colors.light.tint,
  },
  image:{
    width:" 100%",
    height: 200,
  }
});
