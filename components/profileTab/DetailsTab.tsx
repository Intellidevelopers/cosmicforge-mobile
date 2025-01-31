import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const DetailsTab = () => {
  
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>Mrs Grace Williams</Text>
        <Text style={styles.email}>gracewilliams@gmail.com</Text>
        <Text style={styles.phone}>+234 808 888 6823</Text>
        <Text style={styles.location}>Lagos, Nigeria</Text>
        <View style={{ flexDirection: 'row', marginTop: 20, gap: 10 }}>
          <View style={{ alignItems: 'center', borderRightWidth: 1, borderRightColor: '#ccc', paddingRight: 5 }}>
            <Text style={{ fontSize: 16, color: '#333' }}>Sex</Text>
            <Text style={{ fontSize: 16, color: '#333', fontWeight: 'bold' }}>Female</Text>
          </View>
          <View style={{alignItems: 'center', borderRightWidth: 1, borderRightColor: '#ccc', paddingRight: 5 }}>
            <Text style={{ fontSize: 16, color: '#333' }}>Age</Text>
            <Text style={{ fontSize: 16, color: '#333', fontWeight: 'bold' }}>32</Text>
          </View>
          <View style={{  alignItems: 'center', borderRightWidth: 1, borderRightColor: '#ccc', paddingRight: 5 }}>
            <Text style={{ fontSize: 16, color: '#333' }}>Blood Group</Text>
            <Text style={{ fontSize: 16, color: '#333', fontWeight: 'bold' }}>O+</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 16, color: '#333' }}>Genotype</Text>
            <Text style={{ fontSize: 16, color: '#333', fontWeight: 'bold' }}>AA</Text>
          </View>
        </View>
      </View>

      {/* Address */}
      <View style={styles.addressContainer}>
        <Text style={styles.title}>Home Address</Text>
        <Text style={styles.value}>6th Av, Lekki Lagos.</Text>

        <Text style={styles.title}>Work Address</Text>
        <Text style={styles.value}>Jaana Cr Lekki Lagos</Text>
      </View>

      {/* Health analysis */}
      <View style={styles.healthAnalysisContainer}>
        <View style={styles.row}>
          <View style={styles.item}>
            <Image style={styles.icon} source={require('../../assets/icons/blood.png')} />
            <Text style={styles.label}>Blood Pressure</Text>
            <View style={styles.textRow}>
              <Text style={styles.num}>120/80</Text>
              <Text>mmHg</Text>
            </View>
          </View>
          <View style={styles.item}>
            <Image style={styles.icon} source={require('../../assets/icons/heart.png')} />
            <Text style={styles.label}>Heart Rate</Text>
            <View style={styles.textRow}>
              <View style={{marginRight: 25}}>
              <Text style={styles.num}>PUL</Text>
              <Text>/min</Text>
              </View>

              <Text style={{fontSize: 18, fontWeight: 'bold'}}>82</Text>
            </View>
          </View>
          <View style={styles.item}>
            <Image style={styles.icon} source={require('../../assets/icons/spo.png')} />
            <Text style={styles.label}>Spo2</Text>
            <View style={styles.textRow}>
              <Text style={styles.num}>98%</Text>
            </View>
          </View>
          <View style={styles.item}>
            <Image style={styles.icon} source={require('../../assets/icons/temp.png')} />
            <Text style={styles.label}>Body Temperature</Text>
            <View style={styles.textRow}>
              <Text style={styles.num}>36.5˚c</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default DetailsTab

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  detailsContainer: {
    padding: 20,
    alignItems: 'center',
    paddingVertical: 30,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10

  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  email: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5
  },
  phone: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5
  },
  location: {
    fontSize: 16,
    color: '#333',
  },
  addressContainer:{
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10
  },
  title:{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10
  },
  value:{
    fontSize: 16,
    color: '#333',
    marginBottom: 10
  },
  healthAnalysisContainer:{
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  icon:{
    width: 40,
    height: 40,
    marginBottom: 5
  },
  item:{
    alignItems: 'center',
  },
  textRow:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  num:{
    fontSize: 16,
    fontWeight: 'bold'
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  label:{
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: '600'
  }
})