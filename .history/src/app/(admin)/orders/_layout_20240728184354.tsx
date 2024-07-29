import { Stack, Link, } from "expo-router";
import { Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/components/useColorScheme';

export default function MenuStack() {    
    return ( 
    
    <Stack>
    <Stack.Screen name="index"
        options={{title: 'Orders',}}
    />
    <Stack.Screen name="list"
        options={{headerShown:false,}}
    />
         </Stack>);
    

}