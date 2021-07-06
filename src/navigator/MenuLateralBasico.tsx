import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import SettingsPage from '../pages/SettingsPage';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

const MenuLateralBasico = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerType={width >= 768 ? 'permanent' : 'front'}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsPage" component={SettingsPage} />
    </Drawer.Navigator>
  );
};

export default MenuLateralBasico;
