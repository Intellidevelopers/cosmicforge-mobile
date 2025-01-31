import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Modal,
} from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import colors from '../components/colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../components/navigation';
import { StatusBar } from 'expo-status-bar';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'doctor';
    time: string;
  }
  

const ChatScreen = () => {
        const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'PasswordReset'>>();
    
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: 'Good Afternoon Grace', sender: 'user', time: '12:45pm' },
        { id: '2', text: 'Good Afternoon Doctor', sender: 'doctor', time: '12:45pm' },
        { id: '3', text: 'I got your cultures...', sender: 'doctor', time: '12:47pm' },
        { id: '4', text: 'Other test results are out too', sender: 'doctor', time: '12:47pm' },
        { id: '5', text: 'I wish we had better news', sender: 'doctor', time: '12:48pm' },
        { id: '6', text: 'You should check in with Dr Jennifer.', sender: 'doctor', time: '12:48pm' },
      ]);
      
  const [newMessage, setNewMessage] = useState('');
  const [showAttachmentPopup, setShowAttachmentPopup] = useState(false);

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now().toString(), text: newMessage, sender: 'user', time: '12:50pm' },
      ]);
      setNewMessage('');
    }
  };

  const renderMessageItem = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.messageBubble,
        item.sender === 'user' ? styles.userMessage : styles.doctorMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.messageTime}>{item.time}</Text>
    </View>
  );
  

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.header}>
        <View style={styles.headerInfo}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <AntDesign name="left" size={20} color="#000" />
            </TouchableOpacity>
          <Image
            source={require('../assets/user.png')} // Replace with actual avatar URL
            style={styles.avatar}
          />
          <Text style={styles.headerTitle}>Jennifer Williams</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => navigation.navigate('VoiceCall')}>
            <Ionicons name="call" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIconMargin} onPress={() => navigation.navigate('VideoCall')}>
            <MaterialIcons name="videocam" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.dateLabel}>Today</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessageItem}
        contentContainerStyle={styles.messagesList}
      />
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => setShowAttachmentPopup(true)}>
          <Ionicons name="attach" size={24} color="#888" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity>
          <Ionicons name="mic" size={24} color="#3F51B5" />
        </TouchableOpacity>
        <TouchableOpacity onPress={sendMessage}>
          <Ionicons name="send" size={24} color="#3F51B5" style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
      <Modal
        visible={showAttachmentPopup}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowAttachmentPopup(false)}
      >
        <View style={styles.attachmentPopup}>
          <TouchableOpacity onPress={() => setShowAttachmentPopup(false)}>
            <Ionicons name="close" size={24} color="#000" style={styles.closePopup} />
          </TouchableOpacity>
          <Text style={styles.popupText}>Attachment Options</Text>
          {/* Add attachment options here */}
        </View>
      </Modal>
      <StatusBar style='dark'/>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingTop: 40
  },
  headerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIconMargin: {
    marginHorizontal: 10,
  },
  dateLabel: {
    textAlign: 'center',
    color: '#888',
    marginVertical: 10,
    fontSize: 12,
  },
  messagesList: {
    paddingHorizontal: 15,
  },
  messageBubble: {
    maxWidth: '75%',
    marginBottom: 10,
    borderRadius: 15,
    padding: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: colors.fair,
  },
  doctorMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F5F5F5',
  },
  messageText: {
    fontSize: 14,
    color: '#000',
  },
  messageTime: {
    fontSize: 10,
    color: '#888',
    textAlign: 'right',
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    marginBottom: 20
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingHorizontal: 10,
    fontSize: 14,
    marginHorizontal: 10,
    paddingVertical: 14
  },
  sendIcon: {
    marginLeft: 10,
  },
  attachmentPopup: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closePopup: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  popupText: {
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
  },
  backButton:{
    marginRight: 5
  }
});
