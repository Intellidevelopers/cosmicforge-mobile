import React from "react";
import { View, Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";
import colors from "./colors";
import { AntDesign } from '@expo/vector-icons';

const screenWidth = Dimensions.get("window").width;

const GraphSection = () => {
  
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <script src="https://code.highcharts.com/highcharts.js"></script>
        <script>
          document.addEventListener("DOMContentLoaded", function () {
            Highcharts.chart('container', {
              chart: { type: 'areaspline' },
             
              xAxis: { 
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                labels: { style: { fontWeight: 'bold', fontSize: '24px' } }
              },
              yAxis: { 
                title: { 
                  style: { fontWeight: 'bold', fontSize: '18px' } 
                },
                labels: { style: { fontWeight: 'bold', fontSize: '24px' } }
              },
              tooltip: { 
                style: { fontWeight: 'bold', fontSize: '24px' } 
              },
              legend: {
                itemStyle: { fontWeight: 'bold', fontSize: '24px' }
              },
              series: [{ 
                name: 'Earnings', 
                data: [50, 40, 30, 20, 10, 15, 25, 35, 45, 30, 50, 20] 
              }]
            });
          });
        </script>
      </head>
      <body>
        <div id="container" style="width: 100%; height: 680px;"></div>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row1}>
          <Text style={styles.title}>Patients Appointments</Text>
          <Text style={styles.subtitle}>Keep Track of Patient Appointments</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.dot}></View>
          <Text style={styles.subtitle}>Male</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.dot2}></View>
          <Text style={styles.subtitle}>Female</Text>
        </View>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>2024</Text>
          <AntDesign name="down" size={14} color="#000" />
        </TouchableOpacity>
      </View>
      <WebView
        originWhitelist={["*"]}
        source={{ html: htmlContent }}
        style={{ width: screenWidth - 30, height: 250 }}
      />
    </View>
  );
};

export default GraphSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    width: "98%",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  header: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 40
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
    flex: 1
  },
  subtitle: {
    fontSize: 10,
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
  }
});
