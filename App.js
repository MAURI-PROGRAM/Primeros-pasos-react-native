import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

// class Texto extends Component {
//   state = {
//     texto: "Hola Mundo",
//     presionado: false,
//     color: styles.text2
//   };
//   handlePress = () => {
//     const { presionado } = this.state;
//     if (!presionado) {
//       this.setState({
//         texto: "Adios Mundo Cruel",
//         presionado: true,
//         color: styles.text1
//       });
//     } else {
//       this.setState({
//         texto: "Hola Mundo",
//         presionado: false,
//         color: styles.text2
//       });
//     }
//   };
//  render() {
//     const { texto, color } = this.state;

//     return (
//       <Text onPress={this.handlePress} style={color}>
//         {texto}
//       </Text>
//     );
//   }
// }

export default function App() {
  return (
    <View style={styles.container}>
      <Texto />
      <Texto />
      <Texto />
    </View>
  );
}

const styles = StyleSheet.create({
  text1: {
    color: "red"
  },
  text2: {
    color: "black"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "left",
    justifyContent: "center"
  }
});
