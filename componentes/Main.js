import { useEffect } from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import Feed from "./main/Feed";
import Profile from "./main/profile";

const Tab = createMaterialBottomTabNavigator()

const Null = () => null


const Main = () => {



  return (
    <>
     <Tab.Navigator initialRouteName="Fedd" backBehavior="initialRoute" labeled={false}>
      <Tab.Screen name="Feed" component={Feed} options={{
        tabBarIcon: ({ color, size }) =>(
          <Icon name="newspaper-variant" size={26} color={color} />
        )
      }} />

       <Tab.Screen name="AddContainer" component={Null} options={{
        tabBarIcon: ({ color, size }) =>(
          <Icon name="plus-box" size={26} color={color} />
        )
      }}  listeners={({ navigation }) => ({
        tabPress: (event) => {
          event.preventDefault()
          navigation.navigate('Add')
        },
      })}/>

       <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ color, size }) =>(
          <Icon name="account-circle" size={26} color={color} />
        )
      }} />
    </Tab.Navigator>
    </>
  );
}


export default Main