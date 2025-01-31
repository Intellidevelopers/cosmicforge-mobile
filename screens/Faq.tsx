import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/HeadersComponent/Header';

const Faq = () => {
  const navigation = useNavigation();
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
        <Header title='FAQs' onBackPress={() => navigation.goBack()}/>

      {/* FAQ Section */}
      <Text style={styles.sectionTitle}>FAQs</Text>

      {/* FAQ Item */}
      <TouchableOpacity style={styles.faqItem} onPress={() => setExpanded(!expanded)}>
        <Text style={styles.faqQuestion}>How do I book an online appointment with a doctor?</Text>
        <AntDesign name={expanded ? 'up' : 'down'} size={16} color="black" />
      </TouchableOpacity>

      {/* Answer (Only Show When Expanded) */}
      {expanded && (
        <View style={styles.answerContainer}>
          <Text style={styles.answerText}>
            You can book an appointment by navigating to the booking section in the app and selecting an available doctor.
          </Text>
        </View>
      )}
    </View>
  );
};

export default Faq;

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
  faqItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    padding: 15,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  faqQuestion: {
    fontSize: 14,
    fontWeight: '500',
    flex: 1
  },
  answerContainer: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 15,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  answerText: {
    fontSize: 14,
    color: '#4B5563',
  },
});
