import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../components/HeadersComponent/Header'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../components/navigation';
import { StatusBar } from 'expo-status-bar';

const Certifications = () => {
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Certifications'>>();
  return (
    <View style={styles.container}>
      <Header title="Certifications" onBackPress={() => navigation.goBack()} />

        <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('UploadLicense')}>
                <Text style={styles.optionText}>License</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('UploadCertificate')}>
                <Text style={styles.optionText}>Certificate</Text>
            </TouchableOpacity>
        </View>
        <StatusBar style='dark' backgroundColor='#fff'/>
    </View>
  )
}

export default Certifications

const styles = StyleSheet.create({
    container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
    optionsContainer: {
        padding: 10,
    },
    optionButton: {
        padding: 20,
        backgroundColor: '#f6f6f6',
        borderRadius: 10,
        marginBottom: 10,
        elevation: 1,
        borderWidth: 1,
        borderColor: '#eee',
        shadowColor: '#000',
    },
    optionText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})