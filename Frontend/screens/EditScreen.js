import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/blogContext";
import BlogPostForm from "../components/BlogPostForm";

export default function EditScreen({ navigation, route }) {
  const { state, editBlogPost } = useContext(Context);
  const id = route.params.id;
  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      isEdit={true}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => {
          navigation.navigate("Index");
        });
      }}
    />
  );
}

const styles = StyleSheet.create({});
