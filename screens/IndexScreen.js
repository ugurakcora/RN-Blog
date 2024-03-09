import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import BlogContext from "../context/blogContext";
export default function IndexScreen() {
  const blogPosts = useContext(BlogContext);
  return (
    <View>
      <Text>indexScreen</Text>
      <FlatList
        data={blogPosts}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
