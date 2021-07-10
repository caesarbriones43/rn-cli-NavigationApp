import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatScreen from '../pages/ChatScreen';
import ContactsScreen from '../pages/ContactsScreen';
import AlbumScreen from '../pages/AlbumScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../theme/appTheme';
import {Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{paddingTop: top}}
      sceneContainerStyle={{backgroundColor: 'white'}}
      tabBarOptions={{
        pressColor: colors.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colors.primary,
        },
        style: {
          //   borderTopColor: colors.primary,
          //   borderTopWidth: 0,
          //   elevation: 0,
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'ChatScreen':
              iconName = 'chatbubbles-outline';
              break;
            case 'ContactsScreen':
              iconName = 'people-outline';
              break;
            case 'AlbumScreen':
              iconName = 'albums-outline';
              break;
            default:
              iconName = '?';
              break;
          }
          return (
            <Text style={{color: color}}>
              <Icon name={iconName} size={25} color={colors.primary} />
            </Text>
          );
        },
      })}>
      <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{title: 'Chat'}}
      />
      <Tab.Screen
        name="ContactsScreen"
        component={ContactsScreen}
        options={{title: 'Contact'}}
      />
      <Tab.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{title: 'Album'}}
      />
    </Tab.Navigator>
  );
};
