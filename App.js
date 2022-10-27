import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import Home from "./src/pages/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <Text>Meus Gastos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
