import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Checkbox } from 'react-native-paper'; // Import Checkbox
import colors from '../components/colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../components/navigation';

const PasswordReset = () => {
  const navigation = useNavigation<
    NativeStackNavigationProp<RootStackParamList, 'PasswordReset'>
  >();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="left" size={22} />
      </TouchableOpacity>

      <Text style={styles.title}>Password Reset</Text>
      <Text style={styles.subtitle}>Choose how you want to reset your password.</Text>

   
      <View style={styles.bottomContainer}>
        

        {/* Sign-Up Button */}
        {/* Sign-Up Button */}
        <TouchableOpacity
        style={
            styles.signupButton}
        onPress={() => navigation.navigate('EmailPasswordReset')}
        >
        <Text style={styles.signupButtonText}>Email Address</Text>
        </TouchableOpacity>

         {/* Login Link */}
         <Text style={styles.loginText}>
          Don't  have an account? <Text style={styles.link}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

export default PasswordReset;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 15,
    color: '#555',
    marginBottom: 30,
  },
  input: {
    paddingVertical: 15,
    marginBottom: 20,
    fontSize: 14,
    color: '#333333',
    backgroundColor: colors.input,
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  passwordStrengthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 8,
    marginBottom: 10,
  },
  passwordStrengthBar: {
    flex: 1,
    marginHorizontal: 2,
    borderRadius: 4,
  },
  passwordInfo: {
    fontSize: 12,
    color: '#666',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  termsText: {
    fontSize: 13,
    color: '#777777',
    width: '95%',
    textAlign: 'center',
    marginBottom: 5
  },
  kepploggedin:{
    fontSize: 13,
    color: '#777777',
    width: '95%'
  },
  link: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  signupButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  loginText: {
    fontSize: 14,
    color: '#777777',
    textAlign: 'center',
    marginBottom: 40,
  },
  bottomContainer: {
    marginTop: 'auto'
  },
  forgotPassword:{
    alignSelf: 'flex-end'
  },
  termsContainer:{
    alignItems: 'center',
    marginBottom: 20
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 50
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#777777',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  socialButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    alignItems: 'center',
  },
});
