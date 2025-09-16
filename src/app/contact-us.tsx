import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CallIcon from "@/components/icons/CallIcon";
import DirectoryIcon from "@/components/icons/DirectoryIcon";
import SocialsIcon from "@/components/icons/SocialsIcon";
import SettingsItemScreenHeader from "@/components/SettingsItemScreenHeader";

export default function ContactUs() {
  const [expandedFAQ, setExpandedFAQ] = useState(0);

  const faqs = [
    {
      question: "Do I need to keep receipts for all my business expenses?",
      answer:
        "Lodg lets you easily upload and store digital copies, making it simple to track and organize your expenses, while minimizing the income you have to pay tax on.",
    },
    {
      question: "How is Lodg different from a typical accountant?",
      answer:
        "Lodg lets you easily upload and store digital copies, making it simple to track and organize your expenses, while minimizing the income you have to pay tax on.",
    },
    {
      question: "Why was Lodg started?",
      answer:
        "Lodg lets you easily upload and store digital copies, making it simple to track and organize your expenses, while minimizing the income you have to pay tax on.",
    },
    {
      question: "What expenses can I deduct as a self-employed individual?",
      answer:
        "Lodg lets you easily upload and store digital copies, making it simple to track and organize your expenses, while minimizing the income you have to pay tax on.",
    },
    {
      question: "What are the current income tax rates in New Zealand?",
      answer:
        "Lodg lets you easily upload and store digital copies, making it simple to track and organize your expenses, while minimizing the income you have to pay tax on.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? -1 : index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <SettingsItemScreenHeader
          breadcrumb="Lodg  /  Contact Us"
          title="Contact Us"
        />

        <View style={styles.content}>
          <View style={styles.contactCard}>
            <View style={styles.contactHeader}>
              <Text style={styles.contactTitle}>Contact Us</Text>
              <Text style={styles.contactSubtitle}>
                Still have questions? No worries, book a free call with our
                accountants to assist you with any queries.
              </Text>
            </View>

            <View style={styles.contactMethods}>
              <View style={styles.contactMethod}>
                <View style={styles.contactIcon}>
                  <CallIcon />
                </View>
                <View style={styles.contactInfo}>
                  <Text style={styles.contactLabel}>Phone</Text>
                  <Text style={styles.contactValue}>0800 00 1718</Text>
                </View>
              </View>

              <View style={styles.contactMethod}>
                <View style={styles.contactIcon}>
                  <DirectoryIcon />
                </View>
                <View style={styles.contactInfo}>
                  <Text style={styles.contactLabel}>Email</Text>
                  <Text style={styles.contactValue}>accounts@lodg.co.nz</Text>
                </View>
              </View>

              <View style={styles.contactMethod}>
                <View style={styles.contactIcon}>
                  <SocialsIcon />
                </View>
                <View style={styles.contactInfo}>
                  <Text style={styles.contactLabel}>Connect with Us</Text>
                  <Text style={styles.contactValue}>@lodg</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity style={styles.bookCallButton}>
              <Text style={styles.bookCallText}>Schedule a call</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.faqCard}>
            <View style={styles.faqHeader}>
              <Text style={styles.faqTitle}>Frequently Asked Questions</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.faqContainer}>
              {faqs.map((faq, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.faqItem}
                  onPress={() => toggleFAQ(index)}
                >
                  <View style={styles.faqContent}>
                    <View style={styles.faqQuestionRow}>
                      <Text
                        style={[
                          styles.faqQuestion,
                          expandedFAQ === index && styles.faqQuestionExpanded,
                        ]}
                      >
                        {faq.question}
                      </Text>
                      <View style={styles.faqIcon}>
                        <Ionicons
                          name={
                            expandedFAQ === index
                              ? "chevron-up"
                              : "chevron-down"
                          }
                          size={16}
                          color="#999999"
                        />
                      </View>
                    </View>
                    {expandedFAQ === index && (
                      <Text style={styles.faqAnswer}>{faq.answer}</Text>
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    paddingTop: 36,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    gap: 16,
    paddingBottom: 40,
  },
  contactCard: {
    backgroundColor: "#FEFEFE",
    borderRadius: 14,
    padding: 20,
    gap: 30,
  },
  contactHeader: {
    gap: 16,
  },
  contactTitle: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 18,
    lineHeight: 28,
    color: "#222529",
  },
  contactSubtitle: {
    fontFamily: "PlusJakartaSans",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.02,
    color: "#676767",
  },
  contactMethods: {
    gap: 24,
  },
  contactMethod: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  contactIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#F7F7F7",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  contactInfo: {
    flex: 1,
    gap: 2,
  },
  contactLabel: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.02,
    color: "#222529",
  },
  contactValue: {
    fontFamily: "PlusJakartaSans",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.02,
    color: "#676767",
  },
  bookCallButton: {
    backgroundColor: "#2256CB",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignItems: "center",
    alignSelf: "flex-start",
  },
  bookCallText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#FEFEFE",
  },
  faqCard: {
    backgroundColor: "#FEFEFE",
    borderRadius: 14,
    overflow: "hidden",
  },
  faqHeader: {
    paddingHorizontal: 20,
    paddingVertical: 22,
  },
  faqTitle: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 18,
    lineHeight: 28,
    color: "#222529",
  },
  divider: {
    height: 2,
    backgroundColor: "#DCECFD",
  },
  faqContainer: {
    paddingBottom: 12,
  },
  faqItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#F7F7F7",
  },
  faqContent: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 6,
  },
  faqQuestionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
  },
  faqQuestion: {
    flex: 1,
    fontFamily: "PlusJakartaSansBold",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.02,
    color: "#222529",
  },
  faqQuestionExpanded: {
    color: "#2256CB",
  },
  faqIcon: {
    paddingVertical: 3,
  },
  faqAnswer: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#676767",
    marginTop: 6,
  },
});
