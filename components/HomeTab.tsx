import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import colors from '../components/colors';
import AppointmentsScreen from '../screens/AppointmentsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { StatusBar } from 'expo-status-bar';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Appointments') {
            return (
              <AntDesign
                name="calendar"
                size={size}
                color={focused ? colors.primary : '#999'}
              />
            );
          } else if (route.name === 'Messages') {
            return (
              <Ionicons
                name="chatbox-ellipses-outline" // Valid Ionicons name
                size={size}
                color={focused ? colors.primary : '#999'}
              />
            );
          } else if (route.name === 'Analytics') {
            return (
              <MaterialIcons
                name="analytics" // Valid MaterialIcons name
                size={size}
                color={focused ? colors.primary : '#999'}
              />
            );
          } else if (route.name === 'Profile') {
            return (
              <FontAwesome5
                name="user-alt" // Valid FontAwesome5 name
                size={size}
                color={focused ? colors.primary : '#999'}
              />
            );
          }
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#999',
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          height: 75,
          paddingBottom: 5,
          paddingTop: 5,
        },
      })}
    >
      <Tab.Screen name="Appointments" component={AppointmentsScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  screenText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
