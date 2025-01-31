import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../components/colors'; // Ensure colors file is configured
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../components/navigation'; // Adjust the path if needed
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const PasswordResetSuccess = () => {
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'PasswordResetSuccess'>>();
  
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Text style={styles.header}>Success!</Text>
      <Text style={styles.subtitle}>
        You have successfully reset your password.
      </Text>

      {/* Image with Gradient */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/tthub.png')} // Replace with your actual image path
          style={styles.image}
          resizeMode="contain"
        />
        <LinearGradient
          colors={['transparent', '#FFFFFF']} // Transparent to white gradient
          style={styles.gradient}
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.primaryButtonText}>Back To Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordResetSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 80,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 30,
  },
  imageContainer: {
    position: 'relative',
    width: 300, // Match image width
    height: 300, // Match image height
    marginBottom: 40,
    marginTop: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%', // Adjust gradient height
  },
  primaryButton: {
    backgroundColor: colors.primary, // Use your defined primary color
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  secondaryButton: {
    backgroundColor: colors.fair, // Use a light gray or secondary color
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#fff', // Use your primary color for text
    fontSize: 14,
  },
  buttonContainer: {
    marginTop: 'auto',
    width: '100%',
    alignItems: 'center',
  },
});
