import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IndexScreen from "./screens/IndexScreen";
import CreateScreen from "./screens/CreateScreen";
import ShowScreen from "./screens/ShowScreen";
import EditScreen from "./screens/EditScreen";
import { Provider } from "./context/blogContext";

import { Feather } from "@expo/vector-icons";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <stack.Navigator screenOptions={{ headerTitle: "Blog" }}>
          <stack.Screen
            name="Index"
            component={IndexScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  <Feather name="plus" size={30} />
                </TouchableOpacity>
              ),
            })}
          />
          <stack.Screen name="Create" component={CreateScreen} />
          <stack.Screen
            name="Show"
            component={ShowScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
                  <Feather name="edit" size={30} />
                </TouchableOpacity>
              ),
            })}
          />
          <stack.Screen name="Edit" component={EditScreen} />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
