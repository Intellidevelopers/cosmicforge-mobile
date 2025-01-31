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

const LoginScreen = () => {
  const navigation = useNavigation<
    NativeStackNavigationProp<RootStackParamList, 'Registration'>
  >();

  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const calculatePasswordStrength = () => {
    if (!password) return 0;

    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^a-zA-Z0-9]/.test(password)) strength += 1;

    return strength; // Strength ranges from 0 to 5
  };

  const getBarColors = (index: number) => {
    const strength = calculatePasswordStrength();
    if (index < strength) {
      if (strength <= 2) return 'red';
      if (strength === 3) return 'orange';
      if (strength === 4) return 'blue';
      return 'green';
    }
    return '#E0E0E0'; // Default gray for unfilled bars
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="left" size={22} />
      </TouchableOpacity>

      <Text style={styles.title}>Log In</Text>
      <Text style={styles.subtitle}>Welcome back, we've missed you.</Text>

      {/* Input Fields */}
      <TextInput style={styles.input} placeholder="Email/username" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>

        <View style={styles.checkboxContainer}>
          <Checkbox
            status={isChecked ? 'checked' : 'unchecked'}
            onPress={() => setIsChecked(!isChecked)}
            color={colors.primary}
          />
          <Text style={styles.kepploggedin}>
            Keep me logged in
          </Text>
        </View>
        <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate('PasswordReset')}>
        <Text style={{fontWeight: '500'}}>Forgot Password?</Text>
      </TouchableOpacity>
      </View>

      {/* Checkbox */}
      <View style={styles.bottomContainer}>
        

        {/* Sign-Up Button */}
        {/* Sign-Up Button */}
        <TouchableOpacity
        style={
            styles.signupButton}
        onPress={() => navigation.navigate('HomeTab')}
        >
        <Text style={styles.signupButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.orText}>Or</Text>
            <View style={styles.divider} />
        </View>

            {/* Social Buttons */}
        <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
                <AntDesign name="facebook-square" size={24} color="#3b5998" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
                <AntDesign name="google" size={24} color="#DB4437" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
                <AntDesign name="apple1" size={24} color="#000000" />
            </TouchableOpacity>
        </View>

         {/* Login Link */}
        <TouchableOpacity style={styles.loginLinkContainer} onPress={() => navigation.navigate('EmailRegister')}>
          <Text>Don't have an account?</Text>
          <Text style={styles.loginLink}>Sign up</Text>
        </TouchableOpacity>

        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>By signing up or logging in, i accept the apps</Text>
            <Text style={styles.link}>Terms of Service and Privacy Policy</Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

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
    fontSize: 16,
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
  },
  bottomContainer: {
    marginTop: 'auto'
  },
  forgotPassword:{
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
  loginLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 6,
    alignSelf: 'center'
  },
  loginLink: {
    color: colors.primary,
    fontWeight: '600',
  },
});
