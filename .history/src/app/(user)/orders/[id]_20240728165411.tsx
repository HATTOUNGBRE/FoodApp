import orders from "@/assets/data/orders";
import OrderListItem from "@/src/components/OrderListItem";
import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function OrderDetailsScreen() {
    const {id}= useLocalSearchParams();

    const order = orders.find((o) => o.id.toString() === id);

    if (!order) {
        return <Text>Order not found</Text>;
    }

    return (
        <View>
            <Stack.Screen options={{title:`Order #${id}`}} />
        <OrderListItem order={order}/>
        </View>
    );
}