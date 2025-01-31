import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import colors from '../components/colors';
import { RootStackParamList } from '../components/navigation'; // Adjust the path if needed

const EmailPasswordReset = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'EmailPasswordReset'>>();
  const [email, setEmail] = useState('');
  
  const isValidEmail = (email: string) => {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isButtonDisabled = !isValidEmail(email);

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Password Reset</Text>
      <Text style={styles.subtitle}>Enter your Email for reset instructions.</Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email address"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity
        style={[
          styles.signupButton,
          isButtonDisabled && styles.signupButtonDisabled,
        ]}
        disabled={isButtonDisabled}
        onPress={() => navigation.navigate('PasswordResetVerification')} // Change to the next screen in your flow
      >
        <Text style={styles.signupButtonText}>Continue</Text>
      </TouchableOpacity>

      {/* Log In Link */}
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <Text style={styles.loginLink}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmailPasswordReset;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    marginBottom: 30,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    flex: 1,
    backgroundColor: colors.input
  },
  signupButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 'auto'
  },
  signupButtonDisabled: {
    backgroundColor: colors.secondary,
  },
  signupButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 'auto'
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
  loginBtn: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 6,

  },
  loginLink: {
    color: '#6C63FF',
    fontWeight: '600',
    textAlign: 'center'
  },
  loginText:{
    textAlign: 'center'
  }
});
