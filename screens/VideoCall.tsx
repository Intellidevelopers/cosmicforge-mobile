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
import { StatusBar } from 'expo-status-bar';


const VideoCallScreen = () => {
      const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'PasswordReset'>>();
  
  // Animated position for the floating video
  const pan = useRef(new Animated.ValueXY()).current;

  // PanResponder to handle drag gestures
const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: pan.x,
            dy: pan.y,
          },
        ],
        { useNativeDriver: false } // Ensure this is set to `false`
      ),
      onPanResponderRelease: () => {
        // Optionally reset to the original position or let it stay
        pan.setValue({ x: 0, y: 0 }); // Ensure you pass an object with x and y
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      {/* Background representing the video */}
      <ImageBackground
        source={require('../assets/dd.png')}
        style={styles.videoBackground}
      >
        {/* Floating video feed */}
        <Animated.View
          {...panResponder.panHandlers}
          style={[styles.floatingVideo, { transform: pan.getTranslateTransform() }]}
        >
          <Image
            source={require('../assets/videoCaller.png')}
            style={styles.floatingImage}
          />
        </Animated.View>

        {/* Caller's Name */}
        <Text style={styles.callerName}>Jennifer Williams</Text>

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
      </ImageBackground>
      <StatusBar style='light'/>
    </View>
  );
};

export default VideoCallScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
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
    marginTop: 40

  },
  floatingImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  callerName: {
    marginTop: 60,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
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
});
