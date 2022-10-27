import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Actions from "../../components/Actions";
import Balance from "../../components/Balance";
import Header from "../../components/Header";
import Movements from "../../components/Movements";

const list = [
  {
    id: 1,
    label: "Boleto de conta de luz",
    value: "300,90",
    date: "27/10/2022",
    type: 0, // despesas
  },
  {
    id: 2,
    label: "PIX para Cliente X",
    value: "2.500,00",
    date: "27/10/2022",
    type: 1, // receita / entradas
  },
  {
    id: 3,
    label: "Salário",
    value: "7.200,00",
    date: "27/10/2022",
    type: 1, // receita / entradas
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Nadilson" />

      <Balance saldo="9.250.90" gastos="-527,00" />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
