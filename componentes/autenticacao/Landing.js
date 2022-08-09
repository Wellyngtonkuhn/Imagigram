import { View, Text, Button } from "react-native";

export default function Landing({ navigation }) {
  return (
    <>
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
        <Text>Bem Vindo ao ImagiGram</Text>
        <Button
          title="Registrar"
          onPress={() => navigation.navigate("Registro")}
        />
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
      </View>
    </>
  );
}
