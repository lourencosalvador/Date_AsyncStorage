import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";



export default function Home() {
    const navigation = useNavigation();

  function handleAdd() {
    navigation.navigate("Form", {})
  }
  
  return (
    <View style={styles.container}>
      
     <View style={styles.cont}>
        <Text style={styles.h1}>
            Lista   📃👌
        </Text>
        <TouchableOpacity
        style={styles.button}
        onPress={handleAdd}
      >
        <Text style={styles.h1}>
            +
        </Text>
      </TouchableOpacity>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
  },
  h1: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFF",
  },
  avatar: {
    width: 100,
    height: 100,
    position: "absolute"
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 4,
    borderColor: '#E3E3E3',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cont: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    flexDirection: "row",
    padding: 10
  }
});
