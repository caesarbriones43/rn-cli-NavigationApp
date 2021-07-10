import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Tab1Screen from '../pages/Tab1Screen';
import StackNavigator from './StackNavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Tab2Screen from '../pages/Tab2Screen';
// import Tab3Screen from '../pages/Tab3Screen';
import {colors} from '../theme/appTheme';
import {Text, Platform} from 'react-native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {TopTabNavigator} from './TopTabNavigator';

const BottomTabOIS = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const TabsAndroid = () => {
  return (
    <Tab.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.primary,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'caret-back';
              break;
            case 'TopTabNavigator':
              iconName = 'stop-circle';
              break;
            case 'StackNavigator':
              iconName = 'caret-forward';
              break;
            default:
              iconName = '?';
              break;
          }
          return (
            <Text style={{color: color}}>
              <Icon name={iconName} size={25} color="#fff" />
            </Text>
          );
        },
      })}>
      <Tab.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{title: 'Tab1'}}
      />
      <Tab.Screen
        name="TopTabNavigator"
        component={TopTabNavigator}
        options={{title: 'TopTabNavigator'}}
      />
      <Tab.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{title: 'Stck'}}
      />
    </Tab.Navigator>
  );
};

export const TabsIOS = () => {
  return (
    <BottomTabOIS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white  ',
      }}
      tabBarOptions={{
        activeTintColor: colors.primary,
        style: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        labelStyle: {
          fontSize: 15,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            default:
              iconName = '?';
              break;
          }
          return <Text style={{color: color}}>{iconName}</Text>;
        },
      })}>
      {/* <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1Screen}
      /> */}
      <BottomTabOIS.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <BottomTabOIS.Screen
        name="TopTabNavigator"
        options={{title: 'TopTabNavigator'}}
        component={TopTabNavigator}
      />
      <BottomTabOIS.Screen
        name="StackNavigator"
        options={{title: 'Stck'}}
        component={StackNavigator}
      />
    </BottomTabOIS.Navigator>
  );
};
