import * as React from 'react';
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
import LoginScreen from './screens/LoginScreen';
import PasswordReset from './screens/PasswordReset';
import EmailPasswordReset from './screens/EmailPasswordReset';
import PasswordResetVerification from './screens/PasswordResetVerification';
import ChangePassword from './screens/ChangePassword';
import PasswordResetSuccess from './screens/PasswordResetSuccess';
import HomeTab from './components/HomeTab';
import ChatScreen from './screens/ChatScreen';
import VideoCall from './screens/VideoCall';
import VoiceCall from './screens/VoiceCall';
import AppointmentDetails from './screens/AppointmentDetails';
import EditProfile from './screens/EditProfile';
import PatientsScreen from './screens/PatientsScreen';
import Certifications from './screens/Certifications';
import UploadLicense from './screens/UploadLicense';
import LicenseDetailsUpload from './screens/LicenseDetailsUpload';
import UploadCertificate from './screens/UploadCertificate';
import CertificateDetailsUpload from './screens/CertificateDetailsUpload';
import Faq from './screens/Faq';
import Language from './screens/Language';
import MyPatients from './screens/MyPatients';
import PatientDetails from './screens/PatientDetails';
import TestResult from './screens/TestResult';
import Scans from './screens/Scans';
import ChatBot from './screens/ChatBot';
import LiveChat from './screens/LiveChat';
import HelpCenter from './screens/HelpCenter';
import Notification from './screens/Notification';
import Category from './screens/Category';

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
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordReset" component={PasswordReset} options={{ headerShown: false }} />
        <Stack.Screen name="EmailPasswordReset" component={EmailPasswordReset} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordResetVerification" component={PasswordResetVerification} options={{ headerShown: false }} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordResetSuccess" component={PasswordResetSuccess} options={{ headerShown: false }} />
        <Stack.Screen name="HomeTab" component={HomeTab} options={{ headerShown: false }} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
        <Stack.Screen name="VideoCall" component={VideoCall} options={{ headerShown: false }} />
        <Stack.Screen name="VoiceCall" component={VoiceCall} options={{ headerShown: false }} />
        <Stack.Screen name="AppointmentDetails" component={AppointmentDetails} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
        <Stack.Screen name="PatientsScreen" component={PatientsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Certifications" component={Certifications} options={{ headerShown: false }} />
        <Stack.Screen name="UploadLicense" component={UploadLicense} options={{ headerShown: false }} />
        <Stack.Screen name="LicenseDetailsUpload" component={LicenseDetailsUpload} options={{ headerShown: false }} />
        <Stack.Screen name="UploadCertificate" component={UploadCertificate} options={{ headerShown: false }} />
        <Stack.Screen name="CertificateDetailsUpload" component={CertificateDetailsUpload} options={{ headerShown: false }} />
        <Stack.Screen name="Faq" component={Faq} options={{ headerShown: false }} />
        <Stack.Screen name="Language" component={Language} options={{ headerShown: false }} />
        <Stack.Screen name="MyPatients" component={MyPatients} options={{ headerShown: false }} />
        <Stack.Screen name="PatientDetails" component={PatientDetails} options={{ headerShown: false }} />
        <Stack.Screen name="TestResult" component={TestResult} options={{ headerShown: false }} />
        <Stack.Screen name="Scans" component={Scans} options={{ headerShown: false }} />
        <Stack.Screen name="ChatBot" component={ChatBot} options={{ headerShown: false }} />
        <Stack.Screen name="LiveChat" component={LiveChat} options={{ headerShown: false }} />
        <Stack.Screen name="HelpCenter" component={HelpCenter} options={{ headerShown: false }} />
        <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
        <Stack.Screen name="Category" component={Category} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}