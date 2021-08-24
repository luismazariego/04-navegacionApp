import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {
  const navigator = useNavigation();
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2 Screen</Text>
      <Button
        title='Ir a pagina 3'
        onPress={() =>
          navigator.dispatch(
            CommonActions.navigate({
              name: "Pagina3Screen",
            })
          )
        }
      />
    </View>
  );
};
