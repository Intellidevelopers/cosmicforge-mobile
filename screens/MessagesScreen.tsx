import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../components/navigation';
import colors from '../components/colors';

const messages = [
  {
    id: '1',
    name: 'Jennifer Williams',
    message: 'You should check in with Dr Jennifer.',
    time: '02:00pm',
    avatar: 'https://randomuser.me/api/portraits/women/16.jpg', // Replace with actual image URL
    isRead: true,
  },
  {
    id: '2',
    name: 'Bridget Adebayo',
    message: 'What should I do?',
    time: '01:58pm',
    avatar: 'https://randomuser.me/api/portraits/women/14.jpg', // Replace with actual image URL
    isRead: false,
  },
];

const MessagesScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'PasswordReset'>>();
  const renderMessageItem = ({ item }: { item: typeof messages[0] }) => (
    <Pressable style={styles.messageContainer} onPress={() => navigation.navigate('ChatScreen')}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.messageContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={[styles.messageText, item.isRead ? styles.readMessage : styles.unreadMessage]}>
          {item.message}
        </Text>
      </View>
      <View style={styles.messageMeta}>
        <Text style={styles.time}>{item.time}</Text>
        {!item.isRead && <View style={styles.unreadIndicator} />}
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <Ionicons name="menu" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Messages</Text>
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput placeholder="Search here..." style={styles.searchInput} />
      </View>
      </View>
      
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessageItem}
        contentContainerStyle={styles.messagesList}
      />
      <StatusBar style='light' backgroundColor={colors.primary}/>
      
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: colors.primary,
    height: 170,
    paddingTop: 30,
  },
  headerContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    flex: 1,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    margin: 15,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    padding: 14
  },
  messagesList: {
    paddingHorizontal: 15,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  messageContent: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  messageText: {
    fontSize: 13,
    color: '#555',
  },
  readMessage: {
    color: '#555',
  },
  unreadMessage: {
    color: '#000',
    fontWeight: '500',
  },
  messageMeta: {
    alignItems: 'flex-end',
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  unreadIndicator: {
    width: 10,
    height: 10,
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginTop: 5,
  },
});
