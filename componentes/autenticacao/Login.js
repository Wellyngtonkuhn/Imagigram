import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { View, TextInput, Button } from "react-native";


export default function Login() {
  
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const handleSubmit = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <View>
        <TextInput placeholder="E-mail" onChangeText={setEmail} />
        <TextInput
          placeholder="Senha"
          onChangeText={setSenha}
          secureTextEntry
        />
        <Button title="Logar" onPress={handleSubmit} />
      </View>
    </>
  );
}
