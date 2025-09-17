import type { ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";

interface MainLayoutProps {
  children: ReactNode;
  username: string;
}

export default function MainLayout({ children, username }: MainLayoutProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <Header username={username} />
        <View style={styles.content}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f6f6f6",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    backgroundColor: "#f6f6f6",
    paddingHorizontal: 24,
  },
});
