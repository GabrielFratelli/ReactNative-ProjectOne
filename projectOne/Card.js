import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function Card() {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Primeira tela de Mobile</Text>
      <Text style={styles.cardSubtitle}>
        Futuramente criando aplicações para Android e IOS.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    padding: 12,
    borderRadius: 16,
    backgroundColor: "#FFF",
    marginVertical: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardSubtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
});
