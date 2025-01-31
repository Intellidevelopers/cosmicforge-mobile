import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { AntDesign } from '@expo/vector-icons';
import colors from './colors';


const screenWidth = Dimensions.get("window").width;

const Graph = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <View style={styles.row1}>
          <Text style={styles.title}>Patients Appointments</Text>
          <Text style={styles.subtitle}>Keep Track of Patient Appointments</Text>
        </View>
       
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>2024</Text>
          <AntDesign name="down" size={14} color="#000" />
        </TouchableOpacity>
      </View>
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [{ data: [10, 20, 30, 40, 12, 50] }]
        }}
        width={screenWidth - 20}
        height={220}
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
          strokeWidth: 2,
        }}
        bezier
        style={{ borderRadius: 10, marginLeft: 10 }}
      />
    </View>
  );
};

export default Graph;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 15,
        width: "98%",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 20,
      },
      header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
      },
      row: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 5,
        gap: 5
      },
      title: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#333",
      },
      subtitle: {
        fontSize: 12,
        color: "#666",
      },
      row1:{
        flexDirection: "column",
        alignSelf: 'flex-start'
      },
      dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.primary,
      },
      dot2: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#F9AEF1",
      },
      dropdown: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#DDD",
      },
      dropdownText:{
        fontSize: 13,
        color: "#666",
        marginLeft: 5,
      }
})
