import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import Header from '../components/Header';
import { AntDesign } from '@expo/vector-icons';
import colors from '../components/colors';
import AppointmentCard from '../components/appointmentCard';
import { appointmentData, AppointmentType } from '../components/appointmentData';
import { StatusBar } from 'expo-status-bar';

const AppointmentsScreen = () => {
  const [activeTab, setActiveTab] = useState<AppointmentType>('Upcoming'); // Corrected type here
  type AppointmentType = 'Calendar' | 'Upcoming' | 'Past' | 'Canceled';

  const handleDatePress = (date: string) => {
    // Handle calendar date selection
    console.log(`Selected date: ${date}`);
  };

  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style='dark' backgroundColor='#f6f6f6'/>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <AntDesign name="search1" size={20} />
          <TextInput placeholder="Search for appointments" style={styles.input} />
        </View>
        <TouchableOpacity style={styles.filter}>
          <Image source={require('../assets/icons/filter.png')} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>

      {/* Appointments Tabs */}
      <View style={styles.appointmentsTabContainer}>
        {['Calendar', 'Upcoming', 'Past', 'Canceled'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={activeTab === tab ? styles.activeTabButton : styles.tabButton}
            onPress={() => setActiveTab(tab as AppointmentType)} // Ensure proper type assignment
          >
            <Text style={activeTab === tab ? styles.activeTabText : styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Conditional Rendering Based on Active Tab */}
      {activeTab === 'Calendar' ? (
        <Calendar
          onDayPress={(day: { dateString: string }) => handleDatePress(day.dateString)} // Handle date selection
          markedDates={{
            '2024-12-09': { selected: true, marked: true, selectedColor: colors.primary }, // Example marked date
          }}
          theme={{
            selectedDayBackgroundColor: colors.primary,
            todayTextColor: colors.primary,
            arrowColor: colors.primary,
          }}
          style={styles.calendar}
        />
      ) : (
        <FlatList
          data={appointmentData[activeTab]} // Now TypeScript understands the type
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <AppointmentCard
              name={item.name}
              location={item.location}
              date={item.date}
              time={item.time}
              profilePic={item.profilePic}
              status={item.status}
            />
          )}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No {activeTab.toLowerCase()} appointments available.</Text>
            </View>
          }
        />
      )}
      <StatusBar style='dark' backgroundColor='#f6f6f6'/>
    </View>
  );
};


export default AppointmentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    padding: 14
  },
  filter: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
  appointmentsTabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 8,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#f1f1f1',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
  },
  activeTabButton: {
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeTabText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  emptyContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
  },
  calendar: {
    margin: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#f1f1f1',
  },
});
