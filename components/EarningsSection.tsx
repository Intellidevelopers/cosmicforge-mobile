import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import colors from "./colors";
import { AntDesign, Entypo } from '@expo/vector-icons';


const App = () => {
    const pieData = [
        { value: 70, color: colors.primary },
        { value: 30, color: colors.secondary }
    ];
    
    return (
      <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row1}>
          <Text style={styles.title}>Total Earnings</Text>
          <View style={styles.lab}>
            <Entypo name="triangle-up" size={24} color={'green'}/>
            <Text style={styles.subtitle}>3.2% from last month</Text>
          </View>
        </View>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <PieChart
          donut
          innerRadius={80}
          data={pieData}
          centerLabelComponent={() => (
              <View style={styles.centerLabel}>
                <Text style={{ fontSize: 18, fontWeight: '500', color: '#666', textAlign: 'center' }}>Earnings</Text>
                <Text style={{ fontSize: 26, fontWeight: 'bold' }}>₦ 356 K</Text>
              </View>
          )}
        />
      </View>
      <View style={styles.bottomDots}>
        <View style={styles.dotActive}>
          <View style={styles.activeDot}></View>
          <Text style={styles.incomeText}>Net Income</Text>
        </View>

        <View style={styles.dotActive}>
          <View style={styles.inactiveDot}></View>
          <Text style={styles.incomeText}>Commission</Text>
        </View>
      </View>
    </View>
        
    );
};

export default App;

const styles = StyleSheet.create({
  centerLabel: {
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    width: "98%",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  header: {
    alignSelf: 'flex-start',
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
  },
  lab:{
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  bottomDots:{
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },
  dotActive:{
    flexDirection: "row",
    alignItems: "center",
  },
  activeDot:{
    width: 20,
    height: 20,
    borderRadius: 30,
    backgroundColor: colors.primary,
  },
  
  inactiveDot:{
    width: 20,
    height: 20,
    borderRadius: 30,
    backgroundColor: colors.secondary,
  },
  incomeText:{
    fontSize: 14,
    color: "#666",
    marginLeft: 10,
  }
});
