import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather, FontAwesome5 } from '@expo/vector-icons'
import colors from './colors'


const HeaderTwo = () => {
  return (
    <View style={styles.header}>
        <TouchableOpacity style={styles.placeholder}>
        <Feather name="bell" size={18} color="#f6f6f6" />
      </TouchableOpacity>
      <Text style={styles.title}>Analytics</Text>
      <TouchableOpacity style={styles.notification}>
        <Feather name="bell" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

export default HeaderTwo

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent:'space-between',
      padding: 16,
      alignItems: 'center',
      marginTop: 20
    },
    title: {
      color: '#000',
      fontSize: 18,
      fontWeight: 'bold',
    },
    notification:{
        backgroundColor: colors.primary,
        borderRadius: 30,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholder: {
        borderRadius: 30,
        padding: 10,
    }
  
})