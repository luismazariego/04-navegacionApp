import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { Text } from "react-native";
import { AlbumsScreen } from "../screens/AlbumsScreen";
import { ChatScreen } from "../screens/ChatScreen";
import { ContactsScreen } from "../screens/ContactsScreen";
import { colores } from "../theme/appTheme";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: "white" }}
      screenOptions={({ route }) => ({
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,
        },
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = "";
          switch (route.name) {
            case "ChatScreen":
              iconName = "chatbox-ellipses-outline";
              break;
            case "ContactsScreen":
              iconName = "people-outline";
              break;
            case "AlbumsScreen":
              iconName = "albums-outline";
              break;
          }
          return <Icon name={iconName} size={20} color={color} />
        },
      })}>
      <Tab.Screen
        name='ChatScreen'
        options={{ title: "Chat" }}
        component={ChatScreen}
      />
      <Tab.Screen
        name='ContactsScreen'
        options={{ title: "Contacts" }}
        component={ContactsScreen}
      />
      <Tab.Screen
        name='AlbumsScreen'
        options={{ title: "Albums" }}
        component={AlbumsScreen}
      />
    </Tab.Navigator>
  );
};
