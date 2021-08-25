import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Tabs } from "./src/navigation/Tabs";
// import { StackNavigator } from "./src/navigation/StackNavigator";
// import { MenuLateralBasico } from "./src/navigation/MenuLateralBasico";
import { MenuLateral } from "./src/navigation/MenuLateral";

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <MenuLateralBasico /> */}
      <MenuLateral />
      {/* <Tabs /> */}
    </NavigationContainer>
  );
};
export default App;
