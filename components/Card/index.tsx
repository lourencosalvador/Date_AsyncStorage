import { View, Text } from "react-native";
import { Users } from "../../@types";
import { styles } from "./styles";


type Props = {
    data: Users;
    onPress?: () => void;
  }

export function Item({data, onPress}: Props){
    return(
        <View style={styles.Bodydate}>
            <Text style={styles.conteudo}>
            <Text>{data.name}</Text>
            <Text>{data.email}</Text>
          </Text>
        
        </View>
    )
}