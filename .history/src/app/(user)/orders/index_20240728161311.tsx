import orders from "@/assets/data/orders";
import { View, Text, FlatList } from "react-native";


export default function OrdersScreen() {
  return (
    <FlatList 
    data={orders}
    renderItem={({item}) =><Text>{item.id}</Text>}

    
    />
  );
}
