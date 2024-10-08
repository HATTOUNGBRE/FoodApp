import { Stack, Link, } from "expo-router";
import { Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/components/useColorScheme';

export default function MenuStack() {    
    return ( 
    
    <Stack screenOptions={{
        headerRight: () => (
            <Link href="/cart" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="plus-square-o"
                    size={25}
                    color={"green"}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          )
    }}>
    <Stack.Screen name="index"
        options={{title: 'Menu'}}
    />
         </Stack>);
    

}