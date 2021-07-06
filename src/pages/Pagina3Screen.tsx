import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina3Screen</Text>
      <Button
        title="Go back <---"
        onPress={() => {
          navigation.pop();
        }}
      />
      <Button
        title="Go home "
        onPress={() => {
          navigation.popToTop();
        }}></Button>
    </View>
  );
};

export default Pagina3Screen;
