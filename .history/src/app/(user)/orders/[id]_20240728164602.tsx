import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function OrderDetailsScreen() {
    const {id}= useLocalSearchParams();


    return (
        <View>
            <Stack.Screen options={{title:`Order #${id}`}} />
        <Text>Order Details: {id}</Text>
        </View>
    );
}