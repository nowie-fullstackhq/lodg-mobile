import type { ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";

interface PageLayoutProps {
  children: ReactNode;
  breadcrumb: string;
  title: string;
  onBackPress?: () => void;
}

export default function PageLayout({
  children,
  breadcrumb,
  title,
  onBackPress,
}: PageLayoutProps) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <PageHeader
          breadcrumb={breadcrumb}
          title={title}
          onBackPress={onBackPress}
        />
        <View style={styles.content}>{children}</View>
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
  },
});
