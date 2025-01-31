import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons, Feather } from "@expo/vector-icons";
import DetailsTab from "../components/profileTab/DetailsTab";
import MedicalHistory from "../components/profileTab/MedicalHistory";
import Documents from "../components/profileTab/Documents";
import colors from "../components/colors";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../components/navigation';


const Tab = createMaterialTopTabNavigator();

const PatientDetails = () => {
  const [activeTab, setActiveTab] = useState('Details');
      const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'PatientDetails'>>();
   

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Details':
        return <DetailsTab />;
      case 'MedicalHistory':
        return <MedicalHistory />;
      case 'Documents':
        return <Documents />;
      default:
        return <DetailsTab />;
    }
  };

  return (
    <ScrollView style={styles.container}>
        
      {/* Profile Header */}
      <ImageBackground source={require('../assets/getbg.png')} style={styles.headerContainer} imageStyle={{ 
        resizeMode: 'cover'
       }}>
        <View style={styles.row}>
          <Text style={styles.profileName}>Grace Williams</Text>
          <View style={styles.iconContainer}>
            <View style={styles.icon}>
              <Ionicons name="call" size={20} color="black" />
            </View>
            <View style={styles.icon}>
              <Feather name="video" size={20} color="black" />
            </View>
            <View style={styles.icon}>
              <Ionicons name="chatbubble-ellipses" size={20} color="black" />
            </View>
          </View>
        </View>
      </ImageBackground>
      
      <Tab.Navigator 
        screenOptions={{ tabBarLabelStyle: styles.tabLabel }}
        tabBar={(props) => {
          const { state: tabState } = props;
          setActiveTab(tabState.routeNames[tabState.index]);
          return <TabBar {...props} />;
        }}>
        <Tab.Screen name="Details" component={DetailsTab} />
        <Tab.Screen name="MedicalHistory" component={MedicalHistory} />
        <Tab.Screen name="Documents" component={Documents} />
      </Tab.Navigator>
      
      <View style={{ flex: 1, padding: 20 }}>
        {renderTabContent()}
      </View>
    </ScrollView>
  );
};

const TabBar = ({ state, navigation, descriptors }) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tab, isFocused && styles.activeTab]}>
            <Text style={[styles.tabLabel, isFocused && styles.activeTabLabel]}>
              {options.tabBarLabel ?? route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f6f6" },
  headerContainer: { alignItems: "center", padding: 20, paddingTop: 200 },
  profileImage: { width: 100, height: 100, borderRadius: 50 },
  profileName: { 
    fontSize: 18, 
    fontWeight: "bold",
    color: '#fff',
    backgroundColor: 'rgba(28, 28, 28, 0.464)',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    paddingHorizontal: 15
  },
  iconContainer: { flexDirection: "row", gap: 20 },
  detailsContainer: { padding: 20 },
  title: { fontSize: 18, fontWeight: "bold" },
  infoText: { fontSize: 14, color: "gray" },
  infoCard: { backgroundColor: "#fff", padding: 15, borderRadius: 10, marginTop: 10 },
  subtitle: { fontWeight: "bold", marginTop: 5 },
  vitalContainer: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 10 },
  vitalCard: { width: "48%", backgroundColor: "#fff", padding: 15, borderRadius: 10, alignItems: "center" },
  vitalValue: { fontWeight: "bold", fontSize: 16 },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center'
  },
  icon:{
    backgroundColor: '#f1f1f1',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  tabBarContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    paddingVertical: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ddd' 
},
  tab: { padding: 10, },
  activeTab: { 
    borderBottomWidth: 2,
    borderBottomColor: colors.primary
   },
  tabLabel: { fontWeight: 'bold', color: 'gray' },
  activeTabLabel: { color: colors.primary }
});

export default PatientDetails;
