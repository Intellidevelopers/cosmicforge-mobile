import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  PanResponder,
  Animated,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import colors from '../components/colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../components/navigation';

const VoiceCall = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'PasswordReset'>>();

  return (
    <View style={styles.container}>
        {/* Floating video feed */}
        <Text style={styles.callerName}>Jennifer Williams</Text>

        <Image source={require('../assets/caller.png')} style={styles.callerImage}/>
       

        {/* Caller's Name */}

        {/* Call Duration */}
        <Text style={styles.callDuration}>02:29:15</Text>

        {/* Call Controls */}
        <View style={styles.controlContainer}>
          <TouchableOpacity style={styles.controlButton}>
            <Ionicons name="mic-off" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.controlButton, styles.endCallButton]}>
            <MaterialIcons name="call-end" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlButton} onPress={() => navigation.navigate('ChatScreen')}>
            <Ionicons name="chatbubble-ellipses" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlButton}>
            <Ionicons name="camera-reverse" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default VoiceCall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  videoBackground: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  floatingVideo: {
    position: 'absolute',
    top: 80,
    right: 20,
    width: 100,
    height: 150,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
    overflow: 'hidden',
  },
  floatingImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  callerName: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  callDuration: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 10,
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 10,
    marginTop: 'auto',
  },
  controlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 30,
    width: '80%',
  },
  controlButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4C51F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  endCallButton: {
    backgroundColor: '#FF3D71',
  },
  callerImage:{
    width: 200,
    height: 200,
    borderRadius: 100,
    elevation: 50,
    marginTop: 'auto'
  }
});
