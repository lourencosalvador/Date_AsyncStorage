import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Form from "./screens/Form";
import Home from "./screens/Home";
import { Routes } from "./routes";

export default function App() {
  return (
    <Routes />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  h1: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFF",
  },
});
