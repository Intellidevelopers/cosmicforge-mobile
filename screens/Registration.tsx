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

const Registration = () => {
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

      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>Start providing Healthcare services</Text>

      {/* Input Fields */}
      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />

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

      {/* Checkbox */}
      <View style={styles.bottomContainer}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={isChecked ? 'checked' : 'unchecked'}
            onPress={() => setIsChecked(!isChecked)}
            color={colors.primary}
          />
          <Text style={styles.termsText}>
            I accept the <Text style={styles.link}>Privacy Policy</Text> and{' '}
            <Text style={styles.link}>Terms of Service</Text>
          </Text>
        </View>

        {/* Sign-Up Button */}
        {/* Sign-Up Button */}
        <TouchableOpacity
        style={[
            styles.signupButton,
            { backgroundColor: isChecked ? colors.primary : colors.disabled }, // Dynamically change color
        ]}
        disabled={!isChecked}
        onPress={() => navigation.navigate('Success')}
        >
        <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>


        {/* Login Link */}
        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.link}>Log In</Text>
        </Text>
      </View>
    </View>
  );
};

export default Registration;

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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  termsText: {
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
  },
  bottomContainer: {
    marginTop: 'auto',
  },
});
