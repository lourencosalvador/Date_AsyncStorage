import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Users } from "../../@types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Item } from "../../components/Card";

export default function Home() {
  const [data, setData] = useState<Users[]>([]);
  const navigation = useNavigation();

  const handleFetch = async () => {
    const response = await AsyncStorage.getItem("@testStorage:users");
    const dataFecth = response ? JSON.parse(response) : [];
    console.log(dataFecth);
    setData(dataFecth);
  };

  useFocusEffect(useCallback(()=> {
    handleFetch();
  }, []))

  function handleAdd() {
    navigation.navigate("Form", {});
  }

    function handleremove(id: string) {
        throw new Error("Function not implemented.");
    }

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/back.svg")} style={styles.avatar} />
      <Header />
      <View style={styles.cont}>
        <Text style={styles.h1}>Lista 📃👌</Text>
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.h1}>+</Text>
        </TouchableOpacity>

       
      </View>
      <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item data={item} onPress={() => handleremove(item.id)} />
          )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080A0C",
    width: "100%",
    height: "100%",
    padding: 25,
  },
  h1: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFF",
  },
  avatar: {
    width: 100,
    height: 100,
    position: "absolute",
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 4,
    borderColor: "#E3E3E3",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cont: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    flexDirection: "row",
    padding: 10,
  },
});
