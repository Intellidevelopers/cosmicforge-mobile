import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Keyboard } from 'react-native';
import Header from '../components/HeadersComponent/Header';
import colors from '../components/colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../components/navigation';

const CertificateDetailsUpload = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'CertificateDetailsUpload'>>();

  const [form, setForm] = useState({
    fullName: '',
    institution: '',
    licenseNumber: '',
    expiration: '',
  });
  
  const [successVisible, setSuccessVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
  };

  const handleUpload = () => {
    const trimmedForm = {
      fullName: form.fullName.trim(),
      institution: form.institution.trim(),
      licenseNumber: form.licenseNumber.trim(),
      expiration: form.expiration.trim(),
    };

    const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)+$/;
    if (!nameRegex.test(trimmedForm.fullName)) {
      setErrorMessage('Enter a valid full name (e.g., John Doe).');
      setSuccessVisible(false);
      return;
    }

    if (trimmedForm.institution.length < 2) {
      setErrorMessage('Enter a valid institution name.');
      setSuccessVisible(false);
      return;
    }

    const licenseNumberRegex = /^[0-9]+$/;
    if (!licenseNumberRegex.test(trimmedForm.licenseNumber)) {
      setErrorMessage('License number must contain only digits.');
      setSuccessVisible(false);
      return;
    }

    const expirationRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$|^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    if (!expirationRegex.test(trimmedForm.expiration)) {
      setErrorMessage('Enter a valid expiration date (MM/DD/YYYY or YYYY-MM-DD).');
      setSuccessVisible(false);
      return;
    }

    setErrorMessage('');
    setSuccessVisible(true);
    Keyboard.dismiss();
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <Header title="Upload Certificate" onBackPress={() => navigation.goBack()} />

      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={form.fullName}
        onChangeText={(text) => handleInputChange('fullName', text)}
        blurOnSubmit
      />

      <Text style={styles.label}>Institution</Text>
      <TextInput
        style={styles.input}
        placeholder="Institution Name"
        value={form.institution}
        onChangeText={(text) => handleInputChange('institution', text)}
        blurOnSubmit
      />

      <Text style={styles.label}>Certificate No:</Text>
      <TextInput
        style={styles.input}
        placeholder="Certificate Number"
        value={form.licenseNumber}
        onChangeText={(text) => handleInputChange('licenseNumber', text)}
        keyboardType="numeric"
        blurOnSubmit
      />

      <Text style={styles.label}>Date</Text>
      <TextInput
        style={styles.input}
        placeholder="Expiration Date"
        value={form.expiration}
        onChangeText={(text) => handleInputChange('expiration', text)}
        blurOnSubmit
      />

      <Text style={styles.verificationText}>
        To verify your License, we require you to provide an original License copy. This will validate your
        operations with CosmicForge Health Net.
      </Text>

      <Text style={styles.noteText}>
        <Text style={{ fontWeight: 'bold' }}>Please Note: </Text>
        Your License is subject to verification with the necessary Healthcare body. We will reach out to you via
        email once verification is completed and confirmed.
      </Text>

      <View style={styles.encryptionBox}>
        <Image source={require('../assets/icons/locked.png')} style={styles.lockIcon} />
        <Text style={styles.encryptionText}>All data is safely stored and encrypted</Text>
      </View>

      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      {successVisible && (
        <View style={styles.successMessageContainer}>
          <Image source={require('../assets/icons/success.png')} style={styles.successIcon} />
          <Text style={styles.successMessage}>License uploaded successfully!</Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.uploadButton}
        onPress={successVisible ? () => navigation.navigate('HomeTab') : handleUpload}
      >
        <Text style={styles.uploadButtonText}>
          {successVisible ? 'Go Home' : 'Upload License'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CertificateDetailsUpload;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  verificationText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  noteText: {
    fontSize: 14,
    color: '#222',
    marginBottom: 15,
  },
  encryptionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  lockIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  encryptionText: {
    color: '#2E7D32',
    fontSize: 14,
  },
  uploadButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 40,
  },
  uploadButtonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
  successMessageContainer: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#888'
  },
  successIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  successMessage: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  label:{
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    marginBottom: 10
  }
});
