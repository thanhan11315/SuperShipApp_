import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/Colors';

import GetStartScreen from './GetStartScreen';
import ReconciliationListScreen from './ReconciliationListScreen';
import OrdersListScreen from './OrderListScreen';
import NotificationScreen from './NotificationScreen';
import HomeScreen from './HomeScreen';
import ListRequestScreen from './ListRequestScreen';

const Tab = createMaterialBottomTabNavigator();

const NavBottomNew = () => {
  const unreadCount = 1000;
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.brand}
      inactiveColor={colors.colorLightgray}
      barStyle={{
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
      }}
      shifting={true}
      backBehavior="history">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
          tabBarBadge: unreadCount > 99 ? '99+' : unreadCount,
        }}
      />
      <Tab.Screen
        name="GetStart"
        component={GetStartScreen}
        options={{
          tabBarLabel: 'Get Start',
          tabBarIcon: ({color}) => (
            <Icon name="university" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ReconciliationList"
        component={ReconciliationListScreen}
        options={{
          tabBarLabel: 'Reconciliation',
          tabBarIcon: ({color}) => (
            <Icon name="file-text" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="OrdersList"
        component={OrdersListScreen}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color}) => <Icon name="bell" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="ListRequest"
        component={ListRequestScreen}
        options={{
          tabBarLabel: 'Requests',
          tabBarIcon: ({color}) => (
            <Icon name="comments" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavBottomNew;
