import { StyleSheet, Text, View } from 'react-native';
import EditScreenInfo from '@/src/components/EditScreenInfo';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text>Pizza Pepperoni</Text>
      <Text>$12.99</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
