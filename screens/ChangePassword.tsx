import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../components/colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../components/navigation';

const ChangePassword = () => {
  const navigation = useNavigation<
    NativeStackNavigationProp<RootStackParamList, 'ChangePassword'>
  >();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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

  const isContinueDisabled = password !== confirmPassword || password === '';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="left" size={22} />
      </TouchableOpacity>

      <Text style={styles.title}>Enter New Password</Text>
      <Text style={styles.subtitle}>Enter your new password.</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Enter New Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
      />

      {/* Password Strength Bars */}
      <View style={styles.passwordStrengthContainer}>
        {[0, 1, 2, 3, 4].map((index) => (
          <View
            key={index}
            style={[
              styles.passwordStrengthBar,
              { backgroundColor: getBarColors(index) },
            ]}
          />
        ))}
      </View>
      <Text style={styles.passwordInfo}>
        Must be at least 8 characters, contain uppercase, lowercase, number and
        symbol.
      </Text>

      {/* Continue Button */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={[
            styles.signupButton,
            isContinueDisabled && { backgroundColor: '#CCCCCC' },
          ]}
          onPress={() => navigation.navigate('PasswordResetSuccess')}
          disabled={isContinueDisabled}
        >
          <Text style={styles.signupButtonText}>Continue</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.link}>Log In</Text>
        </Text>
      </View>
    </View>
  );
};

export default ChangePassword;

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
    height: 5,
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
  },
  bottomContainer: {
    marginTop: 'auto',
  },
  link: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});
