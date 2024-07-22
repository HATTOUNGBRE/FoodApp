import {  View, FlatList } from 'react-native';
import EditScreenInfo from '@/src/components/EditScreenInfo';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';
import ProductListItems from '@/src/components/ProductListItems';


export default function MenuScreen() {
  return( 
    <FlatList
      data={products}
      renderItem={({item}) => <ProductListItems product={item} />}
      numColumns={2}
      contentContainerStyle={{gap: 10}}
      columnWrapperStyle={{gap: 10}}
      />
    

  );
}


