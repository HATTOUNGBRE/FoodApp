import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function OrderDetailsScreen() {
    const {id}= useLocalSearchParams();


    return (
        <View>
            <Stack.Screen title="Order Details" />
        <Text>Order Details: {id}</Text>
        </View>
    );
}