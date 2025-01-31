import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/HeadersComponent/Header';

const languages = [
  { id: 1, name: 'English (US)', flag: require('../assets/icons/us.png') },
  { id: 2, name: 'English (UK)', flag: require('../assets/icons/uk.png') },
];

const Language = () => {
  const navigation = useNavigation();
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <View style={styles.container}>
        <Header title='Language' onBackPress={() => navigation.goBack()}/>

      {/* Language Selection Section */}
      <Text style={styles.sectionTitle}>Select Language</Text>

      {/* Dropdown Button */}
      <TouchableOpacity style={styles.dropdownButton} onPress={() => setDropdownVisible(!dropdownVisible)}>
        <Image source={selectedLanguage.flag} style={styles.flagIcon} />
        <Text style={styles.languageText}>{selectedLanguage.name}</Text>
        <AntDesign name={dropdownVisible ? 'up' : 'down'} size={16} color="black" />
      </TouchableOpacity>

      {/* Dropdown List */}
      {dropdownVisible && (
        <View style={styles.dropdownList}>
          {languages.map((language) => (
            <TouchableOpacity
              key={language.id}
              style={[styles.dropdownItem, selectedLanguage.id === language.id && styles.selectedItem]}
              onPress={() => {
                setSelectedLanguage(language);
                setDropdownVisible(false);
              }}
            >
              <Image source={language.flag} style={styles.flagIcon} />
              <Text style={[styles.languageText, selectedLanguage.id === language.id && styles.selectedText]}>
                {language.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 15,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  flagIcon: {
    width: 24,
    height: 16,
    marginRight: 10,
  },
  languageText: {
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
  },
  dropdownList: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  selectedItem: {
    backgroundColor: '#D1C4E9',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  selectedText: {
    fontWeight: '600',
  },
});
