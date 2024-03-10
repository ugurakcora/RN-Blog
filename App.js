import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IndexScreen from "./screens/IndexScreen";
import CreateScreen from "./screens/CreateScreen";
import ShowScreen from "./screens/ShowScreen";
import { Provider } from "./context/blogContext";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <stack.Navigator screenOptions={{ headerTitle: "Blog" }}>
          <stack.Screen name="Index" component={IndexScreen} />
          <stack.Screen name="Create" component={CreateScreen} />
          <stack.Screen name="Show" component={ShowScreen} />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
