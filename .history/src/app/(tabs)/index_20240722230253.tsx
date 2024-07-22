import { StyleSheet, Text, View } from 'react-native';
import EditScreenInfo from '@/src/components/EditScreenInfo';
import Colors from '@/src/constants/Colors';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pizza Pepperoni</Text>
      <Text style={styles.price}>$12.99</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

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
});
