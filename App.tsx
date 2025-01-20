import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import Onboarding from './screens/Onboarding';
import GetStartedScreen from './screens/GetStartedScreen';
import OtpVerification from './screens/OtpVerification';
import Registration from './screens/Registration';
import EmailRegister from './screens/EmailRegister';
import SuccessScreen from './screens/SuccessScreen';
import AccountTypeScreen from './screens/AccountTypeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EmailRegister" component={EmailRegister} options={{ headerShown: false }} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} options={{ headerShown: false }} />
        <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
        <Stack.Screen name="Success" component={SuccessScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AccountType" component={AccountTypeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}