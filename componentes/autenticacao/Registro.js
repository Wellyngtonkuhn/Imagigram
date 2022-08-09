import { useState } from "react";
import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";

import { View, TextInput, Button } from "react-native";

const firebaseConfig = {
  apiKey: "AIzaSyD6Us59LrRIGHgUQZL68e3lZGY98XvGb58",
  authDomain: "imagigram-86686.firebaseapp.com",
  projectId: "imagigram-86686",
  storageBucket: "imagigram-86686.appspot.com",
  messagingSenderId: "634528996230",
  appId: "1:634528996230:web:f8a4674ba6c787a6e2aa07",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default function Registro() {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  // Criar um usuário
  const handleSubmit = async () => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Logado
        const user = userCredential.user;
        console.log(`Usuário Logado`, user);
      })
      .catch((error) => {
        console.log(error);
      });

    try {
      const data = await addDoc(collection(db, "usuarios"), {
        nome: nome,
        email: email,
      });

      console.log("Documento adicionado com id", data.id);
      console.log("Data", data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <View>
        <TextInput placeholder="Nome" onChangeText={setNome} />
        <TextInput placeholder="E-mail" onChangeText={setEmail} />
        <TextInput placeholder="Senha" onChangeText={setSenha} secureTextEntry />
        <Button title="Criar conta" onPress={handleSubmit} />
      </View>
    </>
  );
}
