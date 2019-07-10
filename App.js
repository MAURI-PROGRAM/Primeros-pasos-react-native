import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Texto = ({ texto }) => {
  return <Text>{texto}</Text>;
};

export default function App() {
  console.log("Hola Mundo....");
  return (
    <View style={styles.container}>
      <Texto texto="Hola mundo" />
      <Texto texto="Adios Mundo" />
      <Texto texto="Chanchito" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
