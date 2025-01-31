import React from "react";
import { View, StyleSheet } from "react-native";
import {BarChart} from "react-native-gifted-charts";  // Use default import
import colors from "./colors";


const Perfomance = () => {
    const barData = [
        { value: 250, label: "M" },
        { value: 500, label: "T", frontColor: "#177AD5" },
        { value: 745, label: "W", frontColor: "#177AD5" },
        { value: 320, label: "T" },
        { value: 600, label: "F", frontColor: "#177AD5" },
        { value: 256, label: "S" },
        { value: 300, label: "S" },
    ];
    
    return (
      <View style={styles.container}>
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <BarChart
                barWidth={22}
                noOfSections={3}
                barBorderRadius={4}
                frontColor="lightgray"
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
            />
      </View>
    </View>
        
    );
};

export default Perfomance;

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
