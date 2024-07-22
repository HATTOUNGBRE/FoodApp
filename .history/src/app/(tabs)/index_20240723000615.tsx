import { StyleSheet, Text, View, Image } from 'react-native';
import EditScreenInfo from '@/src/components/EditScreenInfo';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';
import ProductListItems from '@/src/components/ProductListItems';


export default function MenuScreen() {
  return( <View>
    <ProductListItems product = {products[5]}/>
    <ProductListItems product = {products[1]}/>
    <ProductListItems product = {products[2]}/>
    <ProductListItems product = {products[3]}/>
    

  </View>);
}


