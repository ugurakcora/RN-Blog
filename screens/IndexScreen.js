import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import BlogContext from "../context/blogContext";
export default function IndexScreen() {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
