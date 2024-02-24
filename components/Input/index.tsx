import { TextInput, View, Text, TextInputProps } from "react-native";
import { styles } from "./style";

type inputProps = TextInputProps & {
  label: string;
}

export default function Input({ label, ...res }: inputProps) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.input} {...res} />
      </View>
    </>
  );
}
