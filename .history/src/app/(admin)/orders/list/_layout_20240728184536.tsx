import { Tabs, withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from "react-native-safe-area-context";


const TopTab= withLayoutContext(createMaterialTopTabNavigator().Navigator);

export default function OrderListNavigation(){
    return (
    <SafeAreaView style={{flex:1, backgroundColor: "green"}}>
       <TopTab />
    </SafeAreaView>);
}