import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import {Image, TouchableOpacity, useWindowDimensions} from 'react-native';
import {View, Text} from 'react-native';
import {colors, styles} from '../theme/appTheme';
import SettingsPage from '../pages/SettingsPage';
import {Tabs} from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const MenuLateral = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      //   drawerPosition="right"
      drawerType={width >= 500 ? 'permanent' : 'front'}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsPage" component={SettingsPage} />
      <Drawer.Screen name="Tabs" component={Tabs} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de menu */}
      <View style={styles.menuContainer}>
        <View>
          <TouchableOpacity style={{...styles.menuBoton, flexDirection: 'row'}}>
            <Icon name="compass-outline" size={23} color={colors.primary} />
            <Text
              onPress={() => {
                navigation.navigate('StackNavigator');
              }}
              style={styles.menuText}>
               Navegacion Stack
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          {/* SettingsPage */}
          <TouchableOpacity style={styles.menuBoton}>
            <Text
              onPress={() => {
                navigation.navigate('SettingsPage');
              }}
              style={styles.menuText}>
              Ajustes
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          {/* Tabs */}
          <TouchableOpacity style={styles.menuBoton}>
            <Text
              onPress={() => {
                navigation.navigate('Tabs');
              }}
              style={styles.menuText}>
              Tabs
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default MenuLateral;
