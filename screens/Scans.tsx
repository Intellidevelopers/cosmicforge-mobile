import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Header from '../components/HeadersComponent/Header'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../components/navigation';
import { MaterialIcons, Feather, FontAwesome, EvilIcons } from "@expo/vector-icons";

const Scans = () => {
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Scans'>>();
    
  return (
    <View style={styles.container}>
        <Header title="Scans" onBackPress={() => navigation.goBack()}/>

        <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.settingItem}>
          <Image source={require('../assets/icons/Picture.png')} style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Ovarian Scan, 3rd Dec, 2024</Text>
          <Text>2.7 mb</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Image source={require('../assets/icons/PDF.png')} style={styles.settingIcon} />
          <Text style={styles.settingLabel}>XYV Blood Test, 3rd Dec, 2024</Text>
          <Text>3 mb</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Scans

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    settingsContainer: { 
        marginBottom: 20 
    },
    settingsTitle: { 
        fontSize: 18, 
        fontWeight: "bold", 
        marginBottom: 10 
    },
    settingItem: { 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between", 
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#eee"
    },

    settingLabel: { 
        fontSize: 16, 
        color: "#1f2937", 
        flex: 1, 
        marginLeft: 10 
    },
    settingIcon: { 
        width: 24, 
        height: 24, 
        resizeMode: "contain" 
    },
})