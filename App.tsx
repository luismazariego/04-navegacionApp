import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { Tabs } from "./src/navigation/Tabs";
// import { StackNavigator } from "./src/navigation/StackNavigator";
// import { MenuLateralBasico } from "./src/navigation/MenuLateralBasico";
import { MenuLateral } from "./src/navigation/MenuLateral";
import { AuthProvider } from "./src/context/AuthContext";

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <MenuLateralBasico /> */}
        <MenuLateral />
        {/* <Tabs /> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({ children }: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};
export default App;
