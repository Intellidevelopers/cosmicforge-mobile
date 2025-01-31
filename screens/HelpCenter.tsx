import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/HeadersComponent/Header";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../components/navigation';

const HelpCenter = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'HelpCenter'>>();


  return (
    <View style={styles.container}>
     <Header title="Help Center" onBackPress={() => navigation.goBack()}/>

      {/* Support Section */}
      <Text style={styles.sectionTitle}>Reach the Support Team</Text>

      {/* Live Chat Button */}
      <TouchableOpacity style={styles.liveChatButton} onPress={() => navigation.navigate("LiveChat")}>
        <View style={styles.liveChatContent}>
          <Image source={require("../assets/icons/support.png")} style={styles.icon} />
          <Text style={styles.liveChatText}>Live Chat</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="black" />
      </TouchableOpacity>

      {/* Email Section */}
      <View style={styles.emailContainer}>
        <Image source={require("../assets/icons/gmail.png")} style={styles.emailIcon} />
        <Text style={styles.emailText}>Send us an Email:</Text>
        <Text style={styles.emailAddress}>Cosmicforgehealth@gmail.com</Text>
      </View>

      {/* Social Media Section */}
      <Text style={styles.socialTitle}>Our Socials</Text>
      <View style={styles.socialIcons}>
        <View style={styles.socialIconContainer}>
            <Image source={require("../assets/icons/facbook.png")} style={styles.socialIcon} />
        </View>
        <View style={styles.socialIconContainer}>
            <Image source={require("../assets/icons/LinkedIn.png")} style={styles.socialIcon} />
        </View>
        <View style={styles.socialIconContainer}>
            <Image source={require("../assets/icons/Instagram.png")} style={styles.socialIcon} />
        </View>
      </View>
    </View>
  );
};

export default HelpCenter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    paddingHorizontal: 10,
  },
  backButton: {
    position: "absolute",
    left: 15,
    top: 15,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 10,
  },
  liveChatButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  liveChatContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  liveChatText: {
    fontSize: 14,
    fontWeight: "500",
  },
  emailContainer: {
    alignItems: "center",
    marginTop: 'auto',
  },
  emailIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  emailText: {
    fontSize: 14,
    color: "#555",
  },
  emailAddress: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 5,
  },
  socialTitle: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 'auto',
    marginBottom: 20,
    color: "#555",
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 100,

  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  socialIconContainer:{
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    paddingVertical: 20,
    elevation: 20

  }
});
