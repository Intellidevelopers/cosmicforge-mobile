import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Header from '../components/HeadersComponent/Header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../components/navigation';

const patients = [
  {
    id: '1',
    name: 'Grace Williams',
    location: 'Lagos, Nigeria',
    image: require('../assets/caller.png'),
  },
  {
    id: '2',
    name: 'Michael Smith',
    location: 'Abuja, Nigeria',
    image: require('../assets/caller.png'),
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    location: 'Port Harcourt, Nigeria',
    image: require('../assets/caller.png'),
  },
  {
    id: '4',
    name: 'James Brown',
    location: 'Kano, Nigeria',
    image: require('../assets/caller.png'),
  },
  {
    id: '5',
    name: 'Emily Davis',
    location: 'Ibadan, Nigeria',
    image: require('../assets/caller.png'),
  },
  {
    id: '6',
    name: 'John Doe',
    location: 'Enugu, Nigeria',
    image: require('../assets/caller.png'),
  },
];

const PatientsScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'ProfileScreen'>>();
  

  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <Header title="My Patients" onBackPress={() => navigation.goBack()} />

      {/* Patients List */}
      <FlatList
        data={patients}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.patientCard} onPress={() => navigation.navigate('PatientDetails')}>
            <Image source={item.image} style={styles.patientImage} />
            <View>
              <Text style={styles.patientName}>{item.name}</Text>
              <View style={styles.locationContainer}>
                <Feather name="map-pin" size={14} color="gray" />
                <Text style={styles.locationText}>{item.location}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PatientsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  patientCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  patientImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  patientName: {
    fontSize: 14,
    fontWeight: '600',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    fontSize: 12,
    color: 'gray',
    marginLeft: 5,
  },
  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 10,
    color: 'gray',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: 'black',
  },
  activeTabText: {
    color: 'black',
    fontWeight: '600',
  },
});
