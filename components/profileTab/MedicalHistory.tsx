import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../colors'

const MedicalHistory = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.name}>Medical History</Text>
        <Text style={styles.label}>Malaria</Text>
        <Text style={styles.label}>09th December 2025</Text>
      </View>
      <TouchableOpacity style={styles.viewButton}>
        <Text style={styles.viewButtonText}>View</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MedicalHistory

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  label: {
    fontSize: 16,
    marginBottom: 10
  },
  viewButton:{
    backgroundColor: colors.primary,
    padding: 8,
    borderRadius: 5,
    paddingHorizontal: 40
  },
  viewButtonText: {
    color: 'white',
    fontWeight: '500'
  }
})