import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingsItemScreenHeader from "@/components/SettingsItemScreenHeader";

export default function InvoiceScreen() {
  const steps = [
    {
      number: 1,
      title: "Invoice Your Client",
      description:
        "You can invoice your employer or client directly through Lodg or upload an invoice from another provider.",
    },
    {
      number: 2,
      title: "Getting Paid",
      description:
        "Once your client pays the invoice, the funds go into your personal Lodg account. Make sure to include your Lodg bank account details on every invoice you send.",
    },
    {
      number: 3,
      title: "Automatic Tax Calculation​",
      description:
        "Lodg will automatically calculate the taxes you owe based on your income.",
    },
    {
      number: 4,
      title: "Tax Payment",
      description:
        "Lodg deducts the calculated tax amount and pays it on your behalf, ensuring you stay compliant with tax regulations.",
    },
    {
      number: 5,
      title: "Transfer to Your Bank",
      description:
        "The remaining amount, after tax, is transferred to your chosen personal bank account, ready for you to spend.",
    },
    {
      number: 6,
      title: "Upload Expenses",
      description:
        "You can upload any business expenses to lower the amount of tax you pay. This feature helps you keep more of your earnings!",
    },
    {
      number: 7,
      title: "Track Income & Expenses",
      description:
        "Lodg gives you 24/7 access to a dashboard where you can monitor your income, expenses, and tax deductions anytime.",
    },
    {
      number: 8,
      title: "Need extra help?",
      description:
        "At no extra cost, with any Lodg account, you can get free access to professional NZ accountants for tax advice or to discuss any concerns you may have.",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <SettingsItemScreenHeader
          breadcrumb="Settings / Preset Instructions"
          title="How It Works"
        />
        <View style={styles.content}>
          <View style={styles.bankCard}>
            <Text style={styles.bankCardTitle}>
              Your Lodg Bank Account Details
            </Text>

            <View style={styles.bankDetailsContainer}>
              <View style={styles.bankDetails}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Name</Text>
                  <Text style={styles.detailValue}>Lodg</Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Account Number</Text>
                  <Text style={styles.detailValue}>[Account Number]</Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Lodg Unique ID</Text>
                  <Text style={styles.detailValue}>[ID Number]</Text>
                </View>

                <Text style={styles.referenceNote}>
                  Please use your unique account ID ([ID Number]) as the
                  reference for your payments.
                </Text>
              </View>
            </View>
            <View style={styles.taxNote}>
              <Text style={styles.taxNoteText}>
                If you'd like us to pay tax on money you've already earned,
                please use the same details.
              </Text>
            </View>
          </View>

          <View style={styles.guideCard}>
            <View style={styles.guideHeader}>
              <Text style={styles.guideTitle}>
                How Lodg Works: A Simple Guide
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.stepsContainer}>
              {steps.map(step => (
                <View
                  key={step.number}
                  style={styles.stepItem}
                >
                  <Text style={styles.stepNumber}>Step {step.number}</Text>
                  <View style={styles.stepContent}>
                    <Text style={styles.stepTitle}>{step.title}</Text>
                    <Text style={styles.stepDescription}>
                      {step.description}
                    </Text>
                  </View>
                </View>
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
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    gap: 16,
    paddingBottom: 40,
  },
  bankCard: {
    backgroundColor: "#FEFEFE",
    borderRadius: 14,
    padding: 20,
    gap: 16,
  },
  bankCardTitle: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 18,
    lineHeight: 28,
    color: "#222529",
  },
  bankDetailsContainer: {
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 14,
    overflow: "hidden",
  },
  bankDetails: {
    padding: 24,
    gap: 20,
  },
  detailRow: {
    gap: 4,
  },
  detailLabel: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#676767",
  },
  detailValue: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 12,
    lineHeight: 18,
    color: "#676767",
  },
  referenceNote: {
    fontFamily: "PlusJakartaSans",
    fontSize: 9.89,
    lineHeight: 16,
    color: "#676767",
  },
  taxNote: {
    backgroundColor: "#F0F7FE",
    paddingVertical: 12,
    paddingHorizontal: 32,
    margin: 0,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  taxNoteText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 9.89,
    lineHeight: 16,
    color: "#676767",
    textAlign: "center",
  },
  guideCard: {
    backgroundColor: "#FEFEFE",
    borderRadius: 14,
    overflow: "hidden",
  },
  guideHeader: {
    paddingHorizontal: 20,
    paddingVertical: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  guideTitle: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 18,
    lineHeight: 28,
    color: "#222529",
  },
  divider: {
    height: 2,
    backgroundColor: "#DCECFD",
  },
  stepsContainer: {
    paddingBottom: 12,
  },
  stepItem: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F7F7F7",
  },
  stepNumber: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 12,
    lineHeight: 20,
    color: "#2256CB",
    minWidth: 38,
  },
  stepContent: {
    flex: 1,
    gap: 4,
  },
  stepTitle: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 14,
    lineHeight: 20,
    color: "#222529",
  },
  stepDescription: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#676767",
  },
});
