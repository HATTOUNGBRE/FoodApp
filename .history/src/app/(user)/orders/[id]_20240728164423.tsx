import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function OrderDetailsScreen() {
    const {id}= useLocalSearchParams();


    return (
        <View>
        <Text>Order Details: {id}</Text>
        </View>
    );
}