import React, { useState, useRef } from 'react'; 
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../components/navigation';
import colors from '../components/colors';

const OtpVerification = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'OtpVerification'>>();

  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleInputChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to the next input if text is entered
    if (text.length === 1 && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Enable button if all inputs are filled
    setIsButtonDisabled(newOtp.some((digit) => digit === ''));
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
<ScrollView contentContainerStyle={styles.scrollViewContent}>
  <View style={styles.contentContainer}>
    {/* Back Button */}
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <AntDesign name="left" size={24} color="black" />
    </TouchableOpacity>

    {/* Title */}
    <Text style={styles.title}>OTP Code</Text>
    <Text style={styles.subtitle}>
      We sent you a 6-digit code via your number
      {'\n'}
      <Text style={styles.email}>adeagbojosiah1@gmail.com</Text>
    </Text>

    {/* OTP Input */}
    <View style={styles.otpContainer}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          style={styles.otpInput}
          keyboardType="number-pad"
          maxLength={1}
          value={digit}
          onChangeText={(text) => handleInputChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
        />
      ))}
    </View>

    {/* Resend Code */}
    <TouchableOpacity>
      <Text style={styles.resendCode}>Resend Code</Text>
    </TouchableOpacity>
  </View>

  {/* Button Container */}
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={[
        styles.continueButton,
        isButtonDisabled && styles.continueButtonDisabled,
      ]}
      disabled={isButtonDisabled}
      onPress={() => navigation.navigate('Registration')}
    >
      <Text style={styles.continueButtonText}>Continue</Text>
    </TouchableOpacity>

    {/* Log In Link */}
    <View style={styles.loginBtn}>
      <Text style={styles.loginText}>Already have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginLink}>Log In</Text>
      </TouchableOpacity>
    </View>
  </View>
</ScrollView>

  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: '#FFF',

  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#777777',
    marginBottom: 30,
  },
  email: {
    fontWeight: 'bold',
    color: '#333333',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 22,
    color: '#333333',
    fontWeight: 'bold',
  },
  resendCode: {
    color: colors.primary,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  buttonContainer: {
    marginTop: 'auto',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  continueButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  continueButtonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  loginBtn: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 6

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

