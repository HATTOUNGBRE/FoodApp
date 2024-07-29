import orders from "@/assets/data/orders";
import { View, Text, FlatList } from "react-native";
import OrderListItem from "@/src/components/OrderListItem";


export default function OrdersScreen() {
  return (
    <FlatList 
    data={orders}
    renderItem={({item}) =><OrderListItem order={item} />}
    contentContainerStyle={{padding: 10, gap: 10}}

    
    />
  );
}
