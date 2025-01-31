import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from '../components/colors';
import Header from '../components/HeadersComponent/Header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../components/navigation';

const LiveChat = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'LiveChat'>>();
  const [messages, setMessages] = useState([
    { id: '1', text: "Hi there! I'm your Health LiveChat. How can I assist you today? Ask me any questions.", sender: 'bot' },
  ]);
  const [inputText, setInputText] = useState('');
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  


  const handleSend = () => {
    if (inputText.trim() === '') return;
    const userMessage = { id: Date.now().toString(), text: inputText, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInputText('');
    
    setTimeout(() => {
      const botReply = { id: Date.now().toString(), text: "I'm here to help. Can you provide more details?", sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botReply]);
    }, 1000);
  };

  const renderMessage = ({ item }) => (
    <View style={[
      styles.messageContainer,
      item.sender === 'user' ? styles.userMessage : styles.botMessage
    ]}>
      {item.sender === 'bot' && <Image source={require('../assets/icons/support.png')} style={styles.avatar} />}
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title='Live Chat' onBackPress={() => navigation.goBack()} />
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.chatContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ask me anything..."
          value={inputText}
          onChangeText={setInputText}
          multiline
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Feather name="send" size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f6f6f6' },
  chatContainer: { padding: 15 },
  messageContainer: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: colors.secondary,
    borderRadius: 10,
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
  },
  messageText: { 
    color: '#000', 
    fontSize: 13, 
    flexShrink: 1,  
  },
  avatar: { width: 30, height: 30, borderRadius: 15, marginRight: 10 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
    gap: 5
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  sendButton: {
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeMic: {
    backgroundColor: 'red',
  },
  recordingIndicator: {
    alignItems: 'flex-start',
    padding: 5,
  },
  recordingText: {
    color: '#A81717',
    fontSize: 14,
  },
  micRecorder:{
    width: 100,
    height: 100,
    backgroundColor: colors.primary,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
},
micRecorderContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
}
});

export default LiveChat;
