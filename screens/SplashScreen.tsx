import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import colors from '../components/colors';
import { RootStackParamList } from '../components/navigation'; // Adjust the path if needed

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Splash'>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop the loader when navigating
      navigation.navigate('Onboarding'); // Replace with your onboarding screen route
    }, 3000); // 3-second timeout

    return () => clearTimeout(timer); // Clear timeout if the component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.text}>Cosmicforge Healthnet Limited</Text>
      {loading && <ActivityIndicator size="large" color={colors.primary} style={styles.loader} />}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.primary,
    position: 'absolute',
    bottom: 40,
    textAlign: 'center',
  },
  loader: {
    position: 'absolute',
    bottom: 100, // Adjust the position of the loader
  },
});
