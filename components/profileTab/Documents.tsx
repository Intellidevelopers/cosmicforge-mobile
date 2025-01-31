import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Switch, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { MaterialIcons, Feather, FontAwesome, EvilIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../components/navigation';

const Documents = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'ProfileScreen'>>();
  
  return (
      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('TestResult')}>
          <Image source={require('../../assets/icons/Microscope.png')} style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Lab Results</Text>
          <Feather name="chevron-right" size={24} color="#6b7280" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Scans')}>
          <Image source={require('../../assets/icons/X-ray.png')} style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Scans</Text>
          <Feather name="chevron-right" size={24} color="#6b7280" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Certifications')}>
          <Image source={require('../../assets/icons/Stethoscope.png')} style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Diagnosis</Text>
          <Feather name="chevron-right" size={24} color="#6b7280" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Certifications')}>
          <Image source={require('../../assets/icons/Pill.png')} style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Medications</Text>
          <Feather name="chevron-right" size={24} color="#6b7280" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Certifications')}>
          <Image source={require('../../assets/icons/Bandage.png')} style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Procedures</Text>
          <Feather name="chevron-right" size={24} color="#6b7280" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Certifications')}>
          <Image source={require('../../assets/icons/prior.png')} style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Allergies</Text>
          <Feather name="chevron-right" size={24} color="#6b7280" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Certifications')}>
          <Image source={require('../../assets/icons/Syringe.png')} style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Vaccines</Text>
          <Feather name="chevron-right" size={24} color="#6b7280" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Certifications')}>
          <Image source={require('../../assets/icons/Scroll.png')} style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Family History</Text>
          <Feather name="chevron-right" size={24} color="#6b7280" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Certifications')}>
          <Image source={require('../../assets/icons/Doctor.png')} style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Doctor's Reports</Text>
          <Feather name="chevron-right" size={24} color="#6b7280" />
        </TouchableOpacity>
      </View>
  )
}

export default Documents

const styles = StyleSheet.create({
  settingsContainer: { marginBottom: 20 },
  settingsTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  settingItem: { 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between", 
    paddingVertical: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },

  settingLabel: { fontSize: 16, color: "#1f2937", flex: 1, marginLeft: 10 },
  settingIcon: { width: 24, height: 24, resizeMode: "contain" },
})