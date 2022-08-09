import { useState, useEffect } from "react";

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Landing from "./componentes/autenticacao/Landing";
import Login from "./componentes/autenticacao/Login";
import Registro from "./componentes/autenticacao/Registro";
import Main from "./componentes/Main";
import Add from './componentes/main/Add'



const firebaseConfig = {
  apiKey: "AIzaSyD6Us59LrRIGHgUQZL68e3lZGY98XvGb58",
  authDomain: "imagigram-86686.firebaseapp.com",
  projectId: "imagigram-86686",
  storageBucket: "imagigram-86686.appspot.com",
  messagingSenderId: "634528996230",
  appId: "1:634528996230:web:f8a4674ba6c787a6e2aa07",
};

export const app = initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsloading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
      setIsloading(false);
    });
  }, []);

  const Loading = () => {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Carregando...</Text>
    </View>;
  };

  const LoggedIn = () => {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Bem vindo!</Text>
    </View>;
  };

  const LoggedOut = () => {
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>;
  };

  const Teste = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>teste</Text>
      </View>
    );
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (isLoggedIn) {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
              name="Main"
              component={Main}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Add"
              component={Add}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
