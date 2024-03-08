import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IndexScreen from "./screens/indexScreen";
import CreateScreen from "./screens/CreateScreen";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerTitle: "Blog" }}>
        <stack.Screen name="Index" component={IndexScreen} />
        <stack.Screen name="Create" component={CreateScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
