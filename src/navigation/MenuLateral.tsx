import React from "react";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { SettingsScreen } from "../screens/SettingsScreen";
// import { StackNavigator } from "./StackNavigator";
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { styles } from "../theme/appTheme";
import { Tabs } from "./Tabs";
import Icon from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? "permanent" : "front",
        headerShown: width <= 768,
      }}
      drawerContent={(props) => <MenuInterno {...props} />}>
      <Drawer.Screen name='Tabs' component={Tabs} />
      <Drawer.Screen name='SettingsScreen' component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://www.pngkit.com/png/full/302-3022217_roger-berry-avatar-placeholder.png",
          }}
        />
      </View>
      {/* Opciones de menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Tabs")}
          style={styles.menuBoton}>
          <Text style={styles.menuTexto}>
            <Icon name='navigate-sharp' size={20} color='black' /> Navegacion
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SettingsScreen")}
          style={styles.menuBoton}>
          <Text style={styles.menuTexto}>
            <Icon name='settings-sharp' size={20} color='black' /> Ajustes
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
