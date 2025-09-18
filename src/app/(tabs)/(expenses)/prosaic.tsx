import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import type { ReactNode } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BaggageIcon from "@/components/icons/BaggageIcon";
import ReceiptIcon2Icon from "@/components/icons/ReceiptIcon2";
import ReceiptTaxIcon from "@/components/icons/ReceiptTaxIcon";
import PageLayout from "@/layouts/PageLayout";

function Strong({ children }: { children: ReactNode }) {
  return (
    <Text
      style={{
        fontFamily: "PlusJakartaSansBold",
      }}
    >
      {children}
    </Text>
  );
}

export default function ProsaicScreen() {
  return (
    <PageLayout
      breadcrumb="Lodg  /  Powered by AI"
      title="Expense"
    >
      <View style={styles.mainContent}>
        <View style={styles.aiBanner}>
          <Text style={styles.bannerTitle}>
            Never Manually Upload Receipts Again ✨
          </Text>
          <Text style={styles.bannerSubtitle}>
            Secure <Strong>bank feeds</Strong> and <Strong>AI-powered </Strong>
            make GST and tax deductions easy to find and claim.
          </Text>
          <TouchableOpacity style={styles.bannerButton}>
            <Ionicons
              name="add"
              size={12}
              color="#2256CB"
            />
            <Text style={styles.bannerButtonText}>Add expenses with AI</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.expensesCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Expenses</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.emptyState}>
            <View style={styles.emptyStateContent}>
              <Text style={styles.emptyStateTitle}>No Data Yet</Text>
              <Text style={styles.emptyStateSubtitle}>
                Set up your AI integration now—once it's connected, your data
                will appear here.
              </Text>
            </View>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>

        <LinearGradient
          colors={["#FFFFFF", "#DCECFD"]}
          style={styles.infoCard}
        >
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>
              Kiwis miss out on approximately{" "}
              <Text style={{ color: "#2256cb" }}>$5,500</Text> in tax deductions
              each year.
            </Text>

            <View style={styles.infoList}>
              <View style={styles.infoItem}>
                <View style={styles.infoIcon}>
                  <ReceiptIcon2Icon />
                </View>
                <Text style={styles.infoText}>
                  Sick and tired of trying to find time to sit down and upload
                  receipts?
                </Text>
              </View>

              <View style={styles.infoItem}>
                <View style={styles.infoIcon}>
                  <BaggageIcon />
                </View>
                <Text style={styles.infoText}>
                  Frustrated with not knowing what you can and can't claim?
                </Text>
              </View>

              <View style={styles.infoItem}>
                <View style={styles.infoIcon}>
                  <ReceiptTaxIcon />
                </View>
                <Text style={styles.infoText}>
                  Annoyed that you're overpaying on taxes because you're not
                  claiming your expenses?
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.dashboardPreview}>
            <Image
              source={require("@/assets/images/prosaic-preview.png")}
              style={styles.previewImage}
              resizeMode="contain"
            />
          </View>
        </LinearGradient>

        <View style={styles.setupCard}>
          <Text style={styles.setupTitle}>
            Set Up Your AI Integration in 3 Simple Steps
          </Text>

          <View style={styles.setupSteps}>
            <View style={styles.setupStep}>
              <View style={styles.stepIcon}>
                <Image source={require("@/assets/images/5.png")} />
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Create Your Account</Text>
                <Text style={styles.stepDescription}>
                  Sign up for a Prosaic account using this link.
                </Text>
              </View>
            </View>

            <View style={styles.setupStep}>
              <View style={styles.stepIcon}>
                <Image source={require("@/assets/images/6.png")} />
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Go to Integrations</Text>
                <Text style={styles.stepDescription}>
                  Once logged in, click on <Strong>Settings</Strong>, then
                  navigate to the
                  <Strong>Integrations</Strong> tab.
                </Text>
              </View>
            </View>

            <View style={styles.setupStep}>
              <View style={styles.stepIcon}>
                <Image source={require("@/assets/images/7.png")} />
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Add the Integration Link</Text>
                <Text style={styles.stepDescription}>
                  Paste this link: [link] into the provided field and click
                  Save.
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.ctaCard}>
          <Image
            source={require("@/assets/images/prosaic-preview-2.png")}
            style={styles.ctaImageFullWidth}
            resizeMode="cover"
          />
        </View>
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    gap: 16,
  },
  aiBanner: {
    backgroundColor: "#2256CB",
    borderRadius: 14,
    padding: 24,
    gap: 16,
  },
  bannerTitle: {
    fontSize: 18,
    color: "#FFFFFF",
    lineHeight: 28,
    fontFamily: "PlusJakartaSansBold",
  },
  bannerSubtitle: {
    fontSize: 12,
    color: "#FFFFFF",
    lineHeight: 18,
    fontFamily: "PlusJakartaSans",
  },
  bannerButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    alignSelf: "flex-start",
  },
  bannerButtonText: {
    fontSize: 12,
    color: "#2256CB",
    fontFamily: "PlusJakartaSans",
  },
  expensesCard: {
    backgroundColor: "#FEFEFE",
    borderRadius: 14,
    overflow: "hidden",
  },
  cardHeader: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 18,
    color: "#222529",
    fontFamily: "PlusJakartaSansBold",
  },
  divider: {
    height: 2,
    backgroundColor: "#DCECFD",
  },
  emptyState: {
    padding: 30,
    alignItems: "center",
    gap: 30,
  },
  emptyStateContent: {
    alignItems: "center",
    gap: 10,
  },
  emptyStateTitle: {
    fontSize: 16,
    color: "#888888",
    fontFamily: "PlusJakartaSansBold",
  },
  emptyStateSubtitle: {
    fontSize: 12,
    color: "#ADADAD",
    textAlign: "center",
    lineHeight: 18,
    paddingHorizontal: 20,
    fontFamily: "PlusJakartaSans",
  },
  primaryButton: {
    backgroundColor: "#2256CB",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  primaryButtonText: {
    fontSize: 12,
    color: "#FFFFFF",
    fontFamily: "PlusJakartaSans",
  },
  infoCard: {
    borderRadius: 14,
    padding: 24,
    gap: 24,
  },
  infoContent: {
    gap: 16,
  },
  infoTitle: {
    fontSize: 18,
    color: "#222529",
    lineHeight: 28,
    fontFamily: "PlusJakartaSansBold",
  },
  infoList: {
    gap: 12,
  },
  infoItem: {
    flexDirection: "row",
    gap: 14,
    alignItems: "flex-start",
  },
  infoIcon: {
    width: 32,
    height: 32,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    flex: 1,
    fontSize: 12,
    color: "#222529",
    lineHeight: 18,
    fontFamily: "PlusJakartaSans",
  },
  dashboardPreview: {
    gap: 20,
    marginLeft: 30,
    marginBottom: -24,
    width: 328,
    height: 235,
    alignItems: "center",
    justifyContent: "center",
  },
  previewImage: {
    width: "100%",
    height: "100%",
  },
  setupCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 24,
    gap: 16,
  },
  setupTitle: {
    fontSize: 18,
    color: "#222529",
    textAlign: "center",
    lineHeight: 28,
    fontFamily: "PlusJakartaSansBold",
  },
  setupSteps: {
    gap: 24,
  },
  setupStep: {
    alignItems: "center",
    gap: 22,
  },
  stepIcon: {
    width: 0,
    height: 100,
    backgroundColor: "#B6FFBD",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  stepContent: {
    alignItems: "center",
    gap: 8,
  },
  stepTitle: {
    fontSize: 14,
    color: "#222529",
    textAlign: "center",
    fontFamily: "PlusJakartaSansBold",
  },
  stepDescription: {
    fontSize: 12,
    color: "#222529",
    textAlign: "center",
    lineHeight: 18,
  },
  ctaCard: {
    borderRadius: 14,
    marginBottom: 40,
    overflow: "hidden",
  },
  ctaImageFullWidth: {
    width: "100%",
    height: 300,
    borderRadius: 14,
  },
});
