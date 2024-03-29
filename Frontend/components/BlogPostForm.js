import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function BlogPostForm({ onSubmit, initialValues, isEdit }) {
  const [title, setTitle] = useState(initialValues ? initialValues.title : "");
  const [content, setContent] = useState(
    initialValues ? initialValues.content : ""
  );

  return (
    <View style={styles.main}>
      <Text style={styles.label}>Başlığı Giriniz:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => {
          setTitle(text);
        }}
      />
      <Text style={styles.label}>İçeriği Giriniz:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => {
          setContent(text);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          onSubmit(title, content);
        }}
        style={styles.button}
      >
        {isEdit ? <Text>Güncelle</Text> : <Text>Kaydet</Text>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
  },
  label: {
    fontSize: 20,
    marginLeft: 10,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
  },
  button: {
    backgroundColor: "lightblue",
    padding: 10,
    margin: 10,
    alignItems: "center",
  },
});
