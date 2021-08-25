import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { styles } from "../theme/appTheme";
import Icon from "react-native-vector-icons/Ionicons";
interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1 Screen</Text>
      <Button
        title='Ir a pagina 2'
        onPress={() => navigation.navigate("Pagina2Screen")}
      />
      <Text
        style={{
          marginVertical: 20,
          fontSize: 20,
          // marginLeft: 5
        }}>
        Navegar con argumentos
      </Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{ ...styles.botonGrande, backgroundColor: "#5856d6" }}
          onPress={() =>
            navigation.navigate("PersonaScreen", {
              id: 1,
              nombre: "Pedro",
            })
          }>
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
          <Icon name='male-sharp' size={20} color='white' />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.botonGrande, backgroundColor: "#ff9427" }}
          onPress={() =>
            navigation.navigate("PersonaScreen", {
              id: 2,
              nombre: "Maria",
            })
          }>
          <Text style={styles.botonGrandeTexto}>Maria</Text>
          <Icon name='female-sharp' size={20} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  );
};
