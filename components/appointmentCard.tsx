import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import colors from './colors';
import useAppointmentStore from '../store/useAppointmentStore'; // Import the Zustand store
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../components/navigation';

type AppointmentCardProps = {
  name: string;
  location: string;
  date: string;
  time: string;
  profilePic: string;
  status: string; // 'pending', 'cancelled', 'completed'
};

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  name,
  location,
  date,
  time,
  profilePic,
  status,
}) => {
  const setSelectedAppointment = useAppointmentStore((state: { setSelectedAppointment: any; }) => state.setSelectedAppointment);
        const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'appointmentCard'>>();

  const handlePress = () => {
    setSelectedAppointment({ name, location, date, time, profilePic, status });
    navigation.navigate('AppointmentDetails'); // Navigate to the details screen
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.cardContainer}>
      <Image source={{ uri: profilePic }} style={styles.profileImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.row}>
          <FontAwesome name="map-marker" size={16} color="#7E7E7E" />
          <Text style={styles.location}>{location}</Text>
        </View>
        <View style={styles.datetimeContainer}>
          <View style={[styles.row, styles.row2]}>
            <MaterialIcons name="calendar-today" size={16} color="#fff" style={styles.icon} />
            <Text style={styles.date}>{date}</Text>
          </View>
          <View style={[styles.row, styles.row2]}>
            <MaterialIcons name="access-time" size={16} color="#fff" style={styles.icon} />
            <Text style={styles.time}>{time}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AppointmentCard;


const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    width: '95%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#f1f1f1',
  },
  profileImage: {
    width: 70,
    height: 83,
    borderRadius: 8,
    marginRight: 10,
    marginLeft: 8
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 4
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  location: {
    fontSize: 14,
    color: '#7E7E7E',
    marginLeft: 5,
  },
  date: {
    fontSize: 14,
    color: '#000',
    marginLeft: 5,
  },
  timeContainer: {
    alignItems: 'center',
  },
  time: {
    fontSize: 14,
    color: '#000',
    
    marginLeft: 5,
  },
  datetimeContainer:{
    marginBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%',
    gap: 20
  },
  row2:{
    backgroundColor: colors.secondary,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  icon:{
    backgroundColor: colors.secondary,
    padding: 5,
    borderRadius: 4
  }
});
