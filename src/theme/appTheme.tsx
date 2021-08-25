import { StyleSheet } from "react-native";

export const colores = {
  primary: '#5656d6',
  
}

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  botonGrande: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  botonGrandeTexto: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 25,
    marginHorizontal: 40,
  },
  menuTexto: {
    fontSize: 25,    
  },
  menuBoton: {
    marginVertical: 15,
  },
});