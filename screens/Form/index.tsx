import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Input from "../../components/Input";
import { Button } from "../../components/Buttom";
import { useCallback, useEffect, useState } from "react";
import uuid from "react-native-uuid";
import { Users } from "../../@types";
import { Item } from "../../components/Card";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Form() {
  const navigation = useNavigation()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  const handleSet = async () => {
    const id = uuid.v4();

    const newData = {
      id,
      name,
      email,
    };

    const response = await AsyncStorage.getItem("@testStorage:users")
    const previuDate = response ? JSON.parse(response) : []
    const date = [...previuDate, newData]

   await AsyncStorage.setItem("@testStorage:users", JSON.stringify(date));
  
    setName("");
    setEmail("");
  };

  
  
  return (
    
    <View style={styles.container}  
    >
       <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        <MaterialIcons
          name="chevron-left"
          size={32}
          color="#1967FB"
        />
      </TouchableOpacity>
      <Text style={styles.h1}>Testando AsyncStorage 🚀❤️</Text>
      <Input label="Digite o seu nome" onChangeText={setName} value={name} />
      <Input label="Digite o seu email" onChangeText={setEmail} value={email} />
      <Button title="Cadastrar" onPress={handleSet} />
   
    
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
    paddingTop: 200
  },
  h1: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 30,
  },
  button: {
    zIndex: 100,
    position: "absolute",
    top: 60,
    left: 20
  }
});
