import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import PageLayout from "@/layouts/PageLayout";

export default function SubscriptionScreen() {
  return (
    <PageLayout
      breadcrumb="Settings / Manage Subscription"
      title="Lodg Subscription"
    >
      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.titleSection}>
              <Text style={styles.title}>Lodg Subscription</Text>
              <Text style={styles.description}>
                Whether you're an individual, a small business owner, or a tax
                professional, our tailored content will keep you informed and
                prepared for every tax season. Subscribe today to unlock
                valuable resources, reminders, and tools that make tax
                management easier than ever. Let Lodg guide you through the
                complexities of taxes with confidence!
              </Text>
            </View>

            <View style={styles.subscriptionCard}>
              <View style={styles.subscriptionContent}>
                <View style={styles.subscriptionInfo}>
                  <View style={styles.statusRow}>
                    <Text style={styles.subscriptionLabel}>SUBSCRIPTION</Text>
                    <View style={styles.activeTag}>
                      <Text style={styles.activeText}>Active</Text>
                    </View>
                  </View>

                  <View style={styles.priceRow}>
                    <Text style={styles.price}>$47</Text>
                    <View style={styles.gstInfo}>
                      <Text style={styles.gstText}>+GST / Invoice</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.dateSection}>
                  <View style={styles.dateRow}>
                    <Text style={styles.dateLabel}>Start Date:</Text>
                    <Text style={styles.dateValue}>21st January 2025</Text>
                  </View>
                  <View style={styles.dateRow}>
                    <Text style={styles.dateLabel}>Expiration Date:</Text>
                    <Text style={styles.dateValue}>21st January 2025</Text>
                  </View>
                </View>

                <Text style={styles.updateText}>
                  Want to update or upgrade your plan? Click here.
                </Text>
              </View>
            </View>

            <View style={styles.infoBox}>
              <Ionicons
                name="information-circle"
                size={14}
                color="#2256CB"
              />
              <Text style={styles.infoText}>
                When you cancel your subscription, you'll continue to have
                access to your plan until the end of the current billing cycle,
                after which it won't renew. For example, if your subscription
                ends on September 30th and you cancel today, you'll still have
                access until that date. In contrast, if you terminate your
                subscription, all access to the service will stop immediately,
                cutting off any features or benefits from the moment you
                terminate, regardless of where you are in your billing cycle.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 16,
  },
  card: {
    backgroundColor: "#FEFEFE",
    borderRadius: 14,
    overflow: "hidden",
  },
  cardHeader: {
    padding: 20,
    gap: 16,
  },
  titleSection: {
    gap: 16,
  },
  title: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 18,
    lineHeight: 28,
    color: "#222529",
  },
  description: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#676767",
  },
  subscriptionCard: {
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 14,
    overflow: "hidden",
  },
  subscriptionContent: {
    padding: 24,
    gap: 24,
  },
  subscriptionInfo: {
    gap: 20,
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subscriptionLabel: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 12,
    lineHeight: 16,
    color: "#676767",
    textTransform: "uppercase",
  },
  activeTag: {
    backgroundColor: "#B6FFBD",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 100,
  },
  activeText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#222529",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 5,
  },
  price: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 32,
    lineHeight: 40,
    color: "#222529",
  },
  gstInfo: {
    justifyContent: "center",
    paddingVertical: 2,
  },
  gstText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 14,
    lineHeight: 20,
    color: "#222529",
  },
  dateSection: {
    gap: 18,
  },
  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EDEDED",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 100,
  },
  dateLabel: {
    fontFamily: "PlusJakartaSansSemiBold",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 18,
    color: "#222529",
  },
  dateValue: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#222529",
  },
  updateText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 9.89,
    lineHeight: 16,
    color: "#676767",
    textAlign: "center",
  },
  infoBox: {
    flexDirection: "row",
    backgroundColor: "#F0F7FE",
    padding: 12,
    borderRadius: 8,
    gap: 8,
    alignItems: "flex-start",
  },
  infoText: {
    flex: 1,
    fontFamily: "PlusJakartaSans",
    fontSize: 9.89,
    lineHeight: 16,
    color: "#676767",
  },
});
