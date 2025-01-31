import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons'

const StatsCard = ({ title, value, color, icon }: { title: string; value: string; color: string, icon: string }) => {
  return (
    <View style={[styles.cardContainer, { backgroundColor: color }]}>
        <View style={styles.cardIcon}>
            <FontAwesome5 name={icon} size={18} color={color} />
        </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    marginHorizontal: 5,
    padding: 7,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24
  },
  title: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5,
  },
  cardIcon:{
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 40,
    marginTop: 10,
    marginBottom: 10
  }
});

export default StatsCard;
