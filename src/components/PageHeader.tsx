import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ArrowSmallLeftIcon from "./icons/ArrowSmallLeftIcon";

interface PageHeaderProps {
  breadcrumb: string;
  title: string;
  onBackPress?: () => void;
}

export default function PageHeader({
  breadcrumb,
  title,
  onBackPress,
}: PageHeaderProps) {
  const router = useRouter();

  const handleBackButtonPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      router.back();
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackButtonPress}
        >
          <ArrowSmallLeftIcon color="#000000" />
        </TouchableOpacity>

        <View style={styles.breadcrumbs}>
          <Text style={styles.breadcrumbText}>{breadcrumb}</Text>
          <Text style={styles.pageTitle}>{title}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#F7F7F7",
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: 56,
  },
  backButton: {
    width: 48,
    height: 48,
    backgroundColor: "#EDEDED",
    borderRadius: 19.2,
    justifyContent: "center",
    alignItems: "center",
  },
  breadcrumbs: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    height: 44,
    gap: 6,
  },
  breadcrumbText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#676767",
    textAlign: "right",
  },
  pageTitle: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 14,
    lineHeight: 20,
    color: "#222529",
  },
});
