import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { useContext } from 'react';
import { Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext';
import { RootStackParams } from '../navigation/StackNavigator';
import { styles } from '../theme/appTheme'


// interface RouterParams {
//   id: number;
//   nombre: string;
// }
interface Props extends StackScreenProps<RootStackParams, "PersonaScreen"> {};

export const PersonaScreen = ({ navigation, route }: Props) => {
  const { changeUsername } = useContext(AuthContext);
  const params = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: params!.nombre
    })
  }, [])
  useEffect(() => {
    changeUsername(params!.nombre);
  }, [])
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{ JSON.stringify(params, null, 2) }</Text>
    </View>
  );
}
