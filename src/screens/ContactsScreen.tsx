import React from "react";
import { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { styles } from "../theme/appTheme";

export const ContactsScreen = () => {
  const { signIn, authState: {estaLogueado} } = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactsScreen</Text>
      {!estaLogueado && <Button title='SignIn' onPress={signIn} />}
    </View>
  );
};
