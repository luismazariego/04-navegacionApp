import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { Platform } from "react-native";
import { Text } from "react-native";
import { Tab1Screen } from "../screens/Tab1Screen";
import { Tab2Screen } from "../screens/Tab2Screen";
import { colores } from "../theme/appTheme";
import { StackNavigator } from "./StackNavigator";
import { TopTabNavigator } from "./TopTabNavigator";
import Icon from "react-native-vector-icons/Ionicons";

export const Tabs = () => {
  return Platform.OS === "ios" ? <TabsIOS /> : <TabsAndroid />;
};

const bottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <bottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{ backgroundColor: colores.primary }}
      screenOptions={({route})=>({
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = "";
          switch (route.name) {
            case "Tab1Screen":
              iconName = "bulb-outline";
              break;
            case "Tab2Screen":
              iconName = "arrow-up-outline";
              break;
            case "StackNavigator":
              iconName = "file-tray-stacked-outline";
              break;
          }
          return <Icon name={ iconName } size={20} color='#fff' />
        }
      })}>
      <bottomTabAndroid.Screen
        name='Tab1Screen'
        options={{ title: "Tab1" }}
        component={Tab1Screen}
      />
      <bottomTabAndroid.Screen
        name='Tab2Screen'
        options={{ title: "Tab2" }}
        component={TopTabNavigator}
      />
      <bottomTabAndroid.Screen
        name='StackNavigator'
        options={{ title: "Stack" }}
        component={StackNavigator}
      />
    </bottomTabAndroid.Navigator>
  );
};

const bottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <bottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: "white",
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: string = "";
          switch (route.name) {
            case "Tab1Screen":
              iconName = "T1";
              break;
            case "Tab2Screen":
              iconName = "T2";
              break;
            case "StackNavigator":
              iconName = "St";
              break;
          }
          return <Text style={{ color }}>{iconName}</Text>;
        },
      })}>
      <bottomTabIOS.Screen
        name='Tab1Screen'
        options={{
          title: "Tab1",
          // tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text>,
          tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text>,
        }}
        component={Tab1Screen}
      />
      <bottomTabIOS.Screen
        name='Tab2Screen'
        options={{ title: "Tab2" }}
        component={Tab2Screen}
      />
      <bottomTabIOS.Screen
        name='StackNavigator'
        options={{ title: "Stack" }}
        component={StackNavigator}
      />
    </bottomTabIOS.Navigator>
  );
};
