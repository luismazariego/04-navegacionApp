import React from 'react'
import { useContext } from 'react';
import { View, Text, Button } from "react-native";
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const AlbumsScreen = () => {
  const { authState: {estaLogueado}, signOut } = useContext(AuthContext)
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>AlbumsScreen</Text>
      {
        estaLogueado && <Button title='SignOut' onPress={signOut} />
      }
    </View>
  )
}
