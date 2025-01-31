import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/HeadersComponent/Header";
import colors from "../components/colors";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../components/navigation';
import useAppointmentStore from "../store/useAppointmentStore";

type AppointmentCardProps = {
    name: string;
    location: string;
    date: string;
    time: string;
    profilePic: string;
    status: string; // 'pending', 'cancelled', 'completed'
  };

const notifications = [
  { id: "1", title: "New Appointment.", description: "You have a new appointment schedule.", date: "Today", profilePic: "https://randomuser.me/api/portraits/women/18.jpg"},
  { id: "2", title: "Rescheduled Request.", description: "You have an appointment reschedule request.", date: "Yesterday", profilePic: "https://randomuser.me/api/portraits/women/20.jpg" },
  { id: "3", title: "Appointment Reminder.", description: "It is time for your appointment.", date: "Yesterday", profilePic: "https://randomuser.me/api/portraits/women/11.jpg" },
];

const Notification  = () => {
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Notification'>>();

  const renderItem = ({ item, index }: { item: typeof notifications[number]; index: number }) => (
    <>
      {(index === 0 || notifications[index - 1].date !== item.date) && (
        <Text style={styles.sectionTitle}>{item.date}</Text>
      )}
      <Pressable style={styles.notificationCard} onPress={() => navigation.navigate('AppointmentDetails')}>
        <View style={styles.iconContainer}>
            <Ionicons name="calendar-outline" size={24} color={colors.primary} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          <Text style={styles.notificationDescription}>{item.description}</Text>
        </View>
      </Pressable>
    </>
  );

  return (
    <View style={styles.container}>
      <Header title="Notifications" onBackPress={() => navigation.goBack()}/>

      {/* Notifications List */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
  },
  notificationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  notificationDescription: {
    fontSize: 12,
    color: "#555",
  },
  iconContainer:{
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  }
});