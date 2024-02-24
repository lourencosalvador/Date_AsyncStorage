import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <Image
        source={{ uri: 'https://github.com/lourencosalvador.png' }}
        style={styles.avatar}
      />
        <TouchableOpacity style= {styles.tect}>
          <Text style={styles.h2}>Lorrys Code</Text>
          <Text style={styles.p}>lourencocardoso@gmail.com</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 40,
 
  },
  textContainer: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom:50
  },
  h1: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFF",
    marginRight: 10,
  },
  h2: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFF",
    marginRight: 10,
  },
  p: {
    fontSize: 12,
    fontWeight: "600",
    color: "#DEDEDE",
    marginRight: 10,
  },
  tect: {
    gap: 10
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 50,
  }
});
