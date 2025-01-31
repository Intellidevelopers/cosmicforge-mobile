import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import useAppointmentStore from '../store/useAppointmentStore';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../components/navigation';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/HeadersComponent/Header';
import colors from '../components/colors';

const AppointmentDetails = () => {
  const selectedAppointment = useAppointmentStore((state) => state.selectedAppointment);
        const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'AppointmentDetails'>>();

  if (!selectedAppointment) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No appointment selected.</Text>
      </View>
    );
  }

  const { name, date, time, profilePic, location, status } = selectedAppointment;

  return (
    <View style={styles.container}>
      <Header title='Appointment Info' onBackPress={() => navigation.goBack()}/>

      {/* Appointment Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image source={{ uri: profilePic }} style={styles.profileImage} />
          <Text style={styles.cardTitle}>{name} has an Appointment</Text>
        </View>
        <View style={styles.cardDetails}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Time:</Text>
            <Text style={styles.detailValue}>{time}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Date:</Text>
            <Text style={styles.detailValue}>{date}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Location:</Text>
            <Text style={styles.detailValue}>{location}</Text>
          </View>
        </View>
        <Text style={styles.confirmed}>{status}</Text>
      </View>

      {/* Cancel Button */}
      <View style={{ marginTop: 'auto'}}>
      <TouchableOpacity style={styles.approve}>
        <Text style={styles.approveButtonText}>Confirm Appointment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.cancelButtonText}>Cancel Appointment</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style='dark'/>
    </View>
  );
};

export default AppointmentDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingHorizontal: 10
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    width: '85%'
  },
  cardDetails: {
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: '#7E7E7E',
  },
  detailValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  confirmed: {
    textAlign: 'center',
    backgroundColor: '#D4F6E1',
    color: '#1BA94C',
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: 14,
    fontWeight: '600',
  },
  cancelButton: {
    backgroundColor: '#C6CCFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A5BEA',
  },
  errorText: {
    fontSize: 18,
    color: '#FF3D71',
    textAlign: 'center',
  },
  approve:{
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20
  },
  approveButtonText:{
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  }
});
