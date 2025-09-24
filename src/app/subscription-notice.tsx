import { Link } from "expo-router";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function SubscriptionNoticeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.noticeCard}>
          <View style={styles.cardContent}>
            <View style={styles.logo}>
              <Image source={require("@/assets/lodg.png")} />
            </View>

            <View style={styles.messageContainer}>
              <View style={styles.textSection}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>
                    Your subscription is currently inactive.
                  </Text>
                </View>
                <Text style={styles.description}>
                  To unlock Lodg's smart tools—like expense tracking, tax
                  estimates, and auto-claims—you'll need an active subscription.
                </Text>
                <Text style={styles.description}>
                  Stay in control of your tax life with ease.
                </Text>
              </View>

              <Link
                href="/subscription"
                style={styles.actionButton}
              >
                <Text style={styles.actionButtonText}>Manage Subscription</Text>
              </Link>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © Lodg 2025. All rights reserved
          </Text>
          <Text style={styles.footerText}>
            Terms and Conditions | Privacy Policy
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 44,
    minHeight: 756,
  },
  noticeCard: {
    width: width - 60,
    maxWidth: 327,
    minHeight: 406,
    backgroundColor: "#FFFFFF",
    borderRadius: 23,
    shadowColor: "#04329A",
    shadowOffset: {
      width: 0,
      height: 17,
    },
    shadowOpacity: 0.1,
    shadowRadius: 57.6,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContent: {
    width: width - 108,
    maxWidth: 279,
    gap: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 124,
    height: 32,
    alignSelf: "center",
  },
  messageContainer: {
    width: "100%",
    minHeight: 290,
    gap: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  textSection: {
    width: "100%",
    gap: 12,
    alignItems: "center",
  },
  titleContainer: {
    width: "100%",
    minHeight: 72,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 22,
    lineHeight: 36,
    color: "#0C1421",
    textAlign: "center",
    width: "100%",
  },
  description: {
    fontFamily: "PlusJakartaSans",
    fontSize: 14,
    lineHeight: 20,
    color: "#222529",
    textAlign: "center",
    width: "100%",
  },
  actionButton: {
    width: "100%",
    height: 46,
    backgroundColor: "#2256CB",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
    display: "flex",
  },
  actionButtonText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#FFFFFF",
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 89,
    left: 24,
    right: 24,
    alignItems: "center",
  },
  footerText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#888888",
    textAlign: "center",
  },
});
