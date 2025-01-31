import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import Header from '../components/HeadersComponent/Header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../components/navigation';
import colors from '../components/colors';

type FileType = {
  uri: string;
  name: string;
  type: string;
};

const UploadCertificate = () => {
  const [selectedFile, setSelectedFile] = useState<FileType | null>(null);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'UploadCertificate'>>();

  // Function to pick documents (PDF)
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'image/*'], // Supports PDFs and images
        copyToCacheDirectory: true,
      });

      if (result.canceled || !result.assets) return;

      const file = result.assets[0];
      setSelectedFile({ uri: file.uri, name: file.name, type: file.mimeType || '' });
    } catch (error) {
      console.log('Document picking error:', error);
    }
  };

  // Function to pick images
  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        const file = result.assets[0];
        setSelectedFile({ uri: file.uri, name: file.fileName || 'Selected Image', type: file.mimeType || '' });
      }
    } catch (error) {
      console.log('Image picking error:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Certificates" onBackPress={() => navigation.goBack()} />

      {/* Upload Buttons */}
      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          <Text style={styles.uploadButtonText}>Upload New</Text>
        </TouchableOpacity>
      </View>

      {/* License Card */}
      <View style={styles.licenseCard}>
        {selectedFile ? (
          selectedFile.type.includes('image') ? (
            <Image source={{ uri: selectedFile.uri }} style={styles.licenseImage} />
          ) : (
            <Text style={styles.selectedDocText}>{selectedFile.name}</Text>
          )
        ) : (
          <Image source={require('../assets/images/certificate.png')} style={styles.licenseImage} />
        )}
      </View>

      {/* License Details */}
      <View style={styles.licenseDetails}>
        <Text style={styles.licenseNumber}>#1</Text>
        <Text style={styles.licenseType}>MBBS</Text>
        <Text style={styles.licenseCode}>0000123678593</Text>
        <Text style={styles.licenseExpiry}>31/01/2025</Text>
      </View>

        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('CertificateDetailsUpload')}>
          <Text style={styles.uploadButtonText}>Continue</Text>
        </TouchableOpacity>
    </View>
  );
};

export default UploadCertificate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  uploadButton: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  uploadButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  licenseCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
    height: 200,
  },
  licenseImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  licenseDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    gap: 15
  },
  licenseNumber: {
    fontWeight: 'bold',
  },
  licenseType: {
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
  },
  licenseCode: {
    color: '#555',
    
  },
  licenseExpiry: {
    color: '#555',
  },
  selectedDocText: {
    marginTop: 10,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  continueButton:{
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 'auto',
    alignSelf: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#fff',
    width: '100%',
    alignItems: 'center',
  }
});
