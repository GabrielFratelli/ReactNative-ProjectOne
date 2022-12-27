import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native"; // Tags padrões do RN.
import Card from "./Card";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Altera a cor dos elementos do header */}
      <StatusBar style="light" />
      <Text style={styles.title}>Hello World</Text>
      <ScrollView>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}

//Criando a const styles para estilizar direto no HTML, más o aconselhavel e criar o arquivo de estilo por fora.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2A2A2A",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
});
