import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Pagina1Screen from '../pages/Pagina1Screen';
import Pagina2Screen from '../pages/Pagina2Screen';
import Pagina3Screen from '../pages/Pagina3Screen';
import PersonaScreen from '../pages/PersonaScreen';

const Stack = createStackNavigator<RouteStackParams>();

export type RouteStackParams = {
  Pagina1Screen: undefined;
  Pagina2Screen: undefined;
  Pagina3Screen: undefined;
  PersonaScreen: {id: number; name: string};
};

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen
        name="Pagina1Screen"
        options={{title: 'Página 1'}}
        component={Pagina1Screen}
      />
      <Stack.Screen
        name="Pagina2Screen"
        options={{title: 'Página 2'}}
        component={Pagina2Screen}
      />
      <Stack.Screen
        name="Pagina3Screen"
        options={{title: 'Página 3'}}
        component={Pagina3Screen}
      />
      <Stack.Screen
        name="PersonaScreen"
        options={{title: 'Personas'}}
        component={PersonaScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
