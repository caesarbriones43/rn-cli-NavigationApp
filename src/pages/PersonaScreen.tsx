import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {ScreenStackProps} from 'react-native-screens';
import {AuthContext} from '../context/AuthContext';
import {RouteStackParams} from '../navigator/StackNavigator';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<RouteStackParams, 'PersonaScreen'> {}

const PersonaScreen = ({route, navigation}: Props) => {
  //   console.log(JSON.stringify(props, null, 3));
  const params = route.params;

  const {changerUsername} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  useEffect(() => {
    changerUsername(params.name);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

export default PersonaScreen;
