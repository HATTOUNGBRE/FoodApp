import { Stack, Link, } from "expo-router";
import { Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function MenuStack() {    
    return ( 
    
    <Stack screenOptions={{
        headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
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