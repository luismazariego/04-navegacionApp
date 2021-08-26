import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext'
import { colores } from '../theme/appTheme';

export const SettingsScreen = () => {
  const { authState } = useContext(AuthContext);
  
  return (
    <View>
      <Text>Settings screen</Text>
      <Text>{JSON.stringify(authState, null, 2)}</Text>
      {authState.iconoFavorito && (
        <Icon
          name={authState.iconoFavorito}
          size={150}
          color={colores.primary}
        />
      )}
    </View>
  );
}
