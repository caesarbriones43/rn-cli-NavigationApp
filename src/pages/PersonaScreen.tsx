import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {ScreenStackProps} from 'react-native-screens';
import {RouteStackParams} from '../navigator/StackNavigator';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<RouteStackParams, 'PersonaScreen'> {}

const PersonaScreen = ({route, navigation}: Props) => {
  //   console.log(JSON.stringify(props, null, 3));
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

export default PersonaScreen;
