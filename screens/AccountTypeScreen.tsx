import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import colors from '../components/colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../components/navigation';

const AccountTypeScreen = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const navigation = useNavigation<
    NativeStackNavigationProp<RootStackParamList, 'Registration'>
  >();

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    Toast.show({
      type: 'success',
      text1: 'Account Type',
      text2: `You are registering as a ${option}`,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select account type</Text>
      <Text style={styles.subtitle}>
        By selecting your preferred account type, you have automatically set user role.
      </Text>

      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === 'Doctor/Specialist' && styles.selectedOption,
          ]}
          onPress={() => handleSelect('Doctor/Specialist')}
        >
          <Image
            source={require('../assets/images/1.png')} // Replace with actual doctor image
            style={styles.image}
          />
          <Text style={styles.optionText}>Doctor/Specialist</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === 'Patient' && styles.selectedOption,
          ]}
          onPress={() => handleSelect('Patient')}
        >
          <Image
            source={require('../assets/images/2.png')} // Replace with actual patient image
            style={styles.image}
          />
          <Text style={styles.optionText}>Patient</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          styles.getStartedButton,
          {
            backgroundColor: selectedOption
              ? colors.primary
              : colors.disabled, // Dynamically change color
          },
        ]}
        disabled={!selectedOption} // Disable the button if no option is selected
        onPress={() => navigation.navigate('GetStartedScreen')}
      >
        <Text style={styles.getStartedButtonText}>Continue</Text>
      </TouchableOpacity>

      <Toast />
    </View>
  );
};

export default AccountTypeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 40,
  },
  subtitle: {
    fontSize: 14,
    color: '#7a7a7a',
    marginBottom: 60,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  option: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: 'transparent',
    height: 200,
    elevation: 30,
  },
  selectedOption: {
    borderColor: colors.primary,
  },
  image: {
    width: 140,
    height: 140,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  getStartedButton: {
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 'auto'
  },
  getStartedButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
