import { StyleSheet, Text, View, Image } from 'react-native';
import EditScreenInfo from '@/src/components/EditScreenInfo';
import Colors from '@/src/constants/Colors';
import { Product } from '../types';


const  defaultImagePizza= "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png"
type ProductListItemsProps = {
    product: Product;
    
};

const ProductListItems = ({product}: ProductListItemsProps) => {

  return (
     <View style={styles.container}>

      <Image source={{ uri: product.image || defaultImagePizza }} style={styles.image} resizeMode='contain' />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  );

}
export default ProductListItems;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    maxWidth: '50%',
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
    aspectRatio: 1 / 2,
  }
});
