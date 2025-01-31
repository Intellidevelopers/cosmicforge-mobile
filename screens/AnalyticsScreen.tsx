import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import StatsCard from '../components/StatsCard';
import GraphSection from '../components/GraphSection';
import EarningsSection from '../components/EarningsSection';
import colors from '../components/colors';
import { StatusBar } from 'expo-status-bar';
import HeaderTwo from '../components/HeaderTwo';
import Perfomance from '../components/Perfomance';
import Graph from '../components/Graph';


const AnalyticsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HeaderTwo/>
      
      <View style={styles.statsRow}>
        <StatsCard title="Appointments" value="120" color={colors.primary} icon='calendar-alt' />
        <StatsCard title="Total Patients" value="89" color="#FFC107" icon='users' />
        <StatsCard title="Revenue" value="₦356,000" color="#21841C" icon='wallet' />
      </View>

      <GraphSection/>
      <Graph/>
      <Perfomance/>

      <EarningsSection />
      <StatusBar style="dark" backgroundColor='#f6f6f6'/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },

});

export default AnalyticsScreen;
