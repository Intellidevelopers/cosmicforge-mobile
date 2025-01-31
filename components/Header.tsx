import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import colors from './colors'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../components/navigation';

const Header = () => {
      const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Notification'>>();
    
  return (
    <View style={styles.container}>
        <Image source={require('../assets/user.png')} style={styles.user}/>
        <View style={styles.userInfoContainer}>
            <Text style={styles.userName}>Hi, Doctor Olawale</Text>
            <Text style={styles.subText}>Let's make your patient's better</Text>
        </View>
        <TouchableOpacity style={styles.notification} onPress={() => navigation.navigate('Notification')}>
            <Feather name='bell' color={'#fff'} size={18}/>
        </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginTop: 50,
        alignItems: 'center',
        flexDirection: 'row',
        gap:10
    },
    userInfoContainer: {
        justifyContent: 'center',
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    subText: {
        fontSize: 14,
        color: '#555',
    },
    user:{
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    notification:{
        position: 'absolute',
        right: 10,
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    }
})