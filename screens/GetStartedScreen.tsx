import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../components/colors';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../components/navigation'; // Adjust the path if needed
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const { width } = Dimensions.get('window');

const GetStartedScreen = () => {
          const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Splash'>>();
    
  return (
    <View style={styles.container}>
      {/* Top Image Background */}
      <ImageBackground
        source={require('../assets/getbg.png')} // Replace with your image path
        style={styles.imageBackground}
        imageStyle={{
            resizeMode: 'cover',
            width: '100%',
            height: '100%',
            justifyContent: 'flex-end',
            alignItems: 'center',
  
        }}
      >
        <View style={styles.overlay} />
      </ImageBackground>

      {/* Content */}
      <View style={styles.content}>
        {/* Logo */}
        <Image
          source={require('../assets/logo.png')} // Replace with your logo path
          style={styles.logo}
        />
        <Text style={styles.title}>CosmicForge Healthnet Limited</Text>

        {/* Buttons */}
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('EmailRegister')}>
          <Text style={styles.primaryButtonText}>Sign Up with Email</Text>
        </TouchableOpacity>

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
        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Text style={styles.loginLink}>Log In</Text>
        </Text>

        {/* Terms */}
        <Text style={styles.termsText}>
          By signing up or logging in, I accept the app's{' '}
          <Text style={styles.link}>Terms of Service</Text> and{' '}
          <Text style={styles.link}>Privacy Policy</Text>.
        </Text>
      </View>
    </View>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageBackground: {
    width: '100%',
    height: '40%',
    resizeMode: 'cover',
    
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Optional dark overlay
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    borderTopLeftRadius: 30
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    top: -50
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 20,
    top: -120
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    top: -80,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 20,
    top: -50,
  },
  socialButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 14,
    color: '#777777',
    marginBottom: 10,
    top: -50,
  },
  loginLink: {
    color: colors.primary,
    fontWeight: '600',
  },
  termsText: {
    fontSize: 14,
    color: '#777777',
    textAlign: 'center',
  },
  link: {
    color: colors.primary,
    fontWeight: '600',
  },
});
