import React, { useState } from "react";
import { 
  View, Text, Modal, TouchableOpacity, StyleSheet, 
  ScrollView
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../components/colors";

const categories = [
  { label: "Rheumatology", value: "rheumatology" },
  { label: "Gastroenterology", value: "gastroenterology" },
  { label: "Orthopedics", value: "orthopedics" },
  { label: "Neonatology", value: "neonatology" },
  { label: "Nephrology", value: "nephrology" },
  { label: "Pulmonology", value: "pulmonology" },
  { label: "Genomics", value: "genomics" },
  { label: "Hematology", value: "hematology" },
  { label: "Cardiology", value: "cardiology" },
  { label: "Dermatology", value: "dermatology" },
];

const DoctorCategoryDropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Selected Category Button */}
      <TouchableOpacity style={styles.dropdownButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.selectedText}>
          {selectedCategory ? selectedCategory : "Select Category"}
        </Text>
        <AntDesign name="down" size={16} color="gray" />
      </TouchableOpacity>

      {/* Custom Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Category</Text>
            </View>

            {/* Scrollable List */}
            <ScrollView style={styles.listContainer}>
              {categories.map((item) => (
                <TouchableOpacity
                  key={item.value}
                  style={styles.categoryItem}
                  onPress={() => {
                    setSelectedCategory(item.label);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.categoryText}>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DoctorCategoryDropdown;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  dropdownButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: colors.input,
    borderRadius: 8,
    backgroundColor: colors.input,
  },
  selectedText: {
    fontSize: 14,
    color: "#333",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    maxHeight: "80%", // Ensures the modal does not exceed screen height
  },
  modalHeader: {
    backgroundColor: "#D3D3D3",
    padding: 15,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  listContainer: {
    maxHeight: 450, // Set max height for scrollable area
  },
  categoryItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  closeButton: {
    backgroundColor: colors.primary,
    padding: 12,
    alignItems: "center",
  },
  closeText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
});
