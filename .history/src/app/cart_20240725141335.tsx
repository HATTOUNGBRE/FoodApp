import { View, Text  } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const CartScreen = () => {
  return (
    <View>
      <Text>Cart Screen</Text>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

    </View>
  );
}

export default CartScreen;

