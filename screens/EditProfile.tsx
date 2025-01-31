import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import colors from '../components/colors';
import { AntDesign } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../components/navigation';
import Header from '../components/HeadersComponent/Header';


const EditProfile = () => {
      const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'EditProfile'>>();
    
  return (
    <ScrollView contentContainerStyle={styles.container}>
     <Header title='Edit Profile' onBackPress={() => navigation.goBack()}/>
      <Image source={require('../assets/caller.png')} style={styles.profileImage} />
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} value="Grace Jennifer Williams" />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value="jgrace@gmail.com" keyboardType="email-address" />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mobile No</Text>
        <TextInput style={styles.input} value="+(234) 1234 5678" keyboardType="phone-pad" />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Professional Title</Text>
        <TextInput style={styles.input} value="General Medicine  Doctor & Surgeon" />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Specialization</Text>
        <TextInput style={styles.input} value="General Medicine" />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Current Clinic</Text>
        <TextInput style={styles.input} value="Chastain Pack Memorial" />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Department</Text>
        <TextInput style={styles.input} value="General Medicine" />
      </View>
      
      <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate('HomeTab')}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginBottom: 20,
    alignSelf: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingVertical: 5,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 'auto'
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  placeholder:{

  }
});
