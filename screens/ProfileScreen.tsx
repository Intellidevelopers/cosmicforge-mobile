import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Switch, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { MaterialIcons, Feather, FontAwesome, EvilIcons } from "@expo/vector-icons";
import colors from "../components/colors";
import { StatusBar } from "expo-status-bar";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../components/navigation';

const ProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'ProfileScreen'>>();

  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  
  const toggleSwitch = () => setIsNotificationsEnabled(previousState => !previousState);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome to your profile</Text>
        <Text style={styles.subtitle}>Let's care for your patients</Text>
      </View>
      
      <View style={styles.profileCard}>
        <Image source={require('../assets/caller.png')} style={styles.profilePic} />
        <Text style={styles.name}>Josh Olawale</Text>
        <Text style={styles.specialty}>General Medicine</Text>
        <View style={styles.locationContainer}>
          <EvilIcons name="location" size={18} color="#6b7280" />
          <Text style={styles.location}>Lagos, Nigeria</Text>
        </View>        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <FontAwesome name="calendar" size={24} color={colors.primary} />
            <Text style={styles.statValue}>25</Text>
            <Text style={styles.statLabel}>Appointments</Text>
          </View>
          <View style={styles.statItem}>
            <FontAwesome name="users" size={24} color="#facc15" />
            <Text style={styles.statValue}>1750</Text>
            <Text style={styles.statLabel}>Patients</Text>
          </View>
          <View style={styles.statItem}>
            <MaterialIcons name="wallet" size={24} color="#10b981" />
            <Text style={styles.statValue}>350k</Text>
            <Text style={styles.statLabel}>Earnings</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('EditProfile')}>
          <Text style={styles.profileButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Settings */}
      <View style={styles.settingsContainer}>
        <Text style={styles.settingsTitle}>Quick Actions</Text>
        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('PatientsScreen')}>
          <Image source={require('../assets/icons/patients.png')} style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Patients</Text>
          <Feather name="chevron-right" size={24} color="#6b7280" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Image source={require('../assets/icons/Calendar.png')} style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Appointments</Text>
          <Feather name="chevron-right" size={24} color="#6b7280" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Certifications')}>
          <Image source={require('../assets/icons/Certificate.png')} style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Certifications</Text>
          <Feather name="chevron-right" size={24} color="#6b7280" />
        </TouchableOpacity>
       
      </View>

      {/* Settings */}
      <View style={styles.settingsContainer}>
        <Text style={styles.settingsTitle}>Settings</Text>
        <View style={styles.settingItem}>
          <Image source={require('../assets/icons/Bell.png')} style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Notification Toggle</Text>
          <Switch value={isNotificationsEnabled} onValueChange={toggleSwitch} />
        </View>
        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Notification')}>
          <Image source={require('../assets/icons/Bell.png')} style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Notifications</Text>
          <Feather name="chevron-right" size={24} color="#6b7280" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Image source={require('../assets/icons/Lock.png')} style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Password</Text>
          <Feather name="chevron-right" size={24} color="#6b7280" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('ChatBot')}>
          <Image source={require('../assets/icons/chatbot.png')} style={styles.settingIcon} />
          <Text style={styles.settingLabel}>AI Chat Bot</Text>
          <Feather name="chevron-right" size={24} color="#6b7280" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('HelpCenter')}>
          <Image source={require('../assets/icons/support.png')} style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Help Center / Live Chat</Text>
          <Feather name="chevron-right" size={24} color="#6b7280" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Language')}>
          <Image source={require('../assets/icons/Globe.png')} style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Language</Text>
          <Feather name="chevron-right" size={24} color="#6b7280" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Faq')}>
          <Image source={require('../assets/icons/Help.png')} style={styles.settingIcon} />
          <Text style={styles.settingLabel}>FAQs</Text>
          <Feather name="chevron-right" size={24} color="#6b7280" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Image source={require('../assets/icons/Protect.png')} style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Privacy Policy</Text>
          <Feather name="chevron-right" size={24} color="#6b7280" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Image source={require('../assets/icons/Door.png')} style={styles.settingIcon} />
          <Text style={[styles.settingLabel, styles.logoutText]}>Log Out</Text>
          <Feather name="chevron-right" size={24} color="#6b7280" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Image source={require('../assets/icons/Trash.png')} style={styles.settingIcon} />
          <Text style={[styles.settingLabel, styles.deleteAccountText]}>Delete My Account</Text>
          <Feather name="chevron-right" size={24} color="#6b7280" />
        </TouchableOpacity>
       
      </View>
      <StatusBar backgroundColor="#f6f6f6" style="dark"/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f6f6", padding: 10 },
  header: { 
    alignItems: "center", 
    marginBottom: 20,
    marginTop: 30
  },
  greeting: { fontSize: 18, fontWeight: "bold" },
  subtitle: { color: "#6b7280" },
  profileCard: { backgroundColor: "#fff", borderRadius: 10, padding: 20, alignItems: "center",},
  profilePic: { 
    width: 80, 
    height: 80, 
    borderRadius: 40,
    marginBottom: 10
  },
  name: { fontSize: 20, fontWeight: "bold", color: "#1f2937", marginBottom: 8 },
  specialty: { color: "#555", fontWeight: '500', marginBottom: 8 },
  location: { color: "#6b7280" },
  statsContainer: { flexDirection: "row", justifyContent: "space-between", width: "100%", marginBottom: 15 },
  statItem: { alignItems: "center", flex: 1, gap: 10 },
  statValue: { fontSize: 18, fontWeight: "bold" },
  statLabel: { color: "#000" },
  profileButton: { backgroundColor: colors.primary, padding: 10, borderRadius: 5, width: '100%', alignItems: 'center' },
  profileButtonText: { color: "#fff", fontWeight: "bold" },
  settingsContainer: { marginTop: 20, marginBottom: 20 },
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
  logoutButton: { paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "#e5e7eb" },
  logoutText: { color: "#DC2626", fontWeight: "bold", textAlign: 'left' },
  deleteAccountButton: { paddingVertical: 10 },
  deleteAccountText: { color: "#EF4444", fontWeight: "bold" },
  locationContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  }
});

export default ProfileScreen;
