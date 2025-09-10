import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ColorValue,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface DashboardCardProps {
  title: string;
  description: string;
  linkText: string;
  onPress: () => void;
  gradientColors: readonly [ColorValue, ColorValue, ...ColorValue[]];
  backgroundImage?: any;
  variant?: "light" | "dark";
}

export default function DashboardCard({
  title,
  description,
  linkText,
  onPress,
  gradientColors,
  backgroundImage,
  variant,
}: DashboardCardProps) {
  const isDark = variant === "dark";
  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {backgroundImage && (
        <View
          style={[
            styles.backgroundImageContainer,
            isDark && styles.backgroundImageContainerDark,
          ]}
        >
          <Image
            source={backgroundImage}
            style={[
              styles.backgroundImage,
              isDark && styles.backgroundImageDark,
            ]}
          />
        </View>
      )}

      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={[styles.title, isDark && styles.titleDark]}>
            {title}
          </Text>
          <Text style={[styles.description, isDark && styles.descriptionDark]}>
            {description}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.linkContainer}
          onPress={onPress}
        >
          <Text style={[styles.linkText, isDark && styles.linkTextDark]}>
            {linkText}
          </Text>
          <Image
            source={require("@/assets/icons/RightCaretCircle.svg")}
            style={[styles.arrowIcon, isDark && styles.arrowIconDark]}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 327,
    height: 180,
    borderRadius: 14,
    position: "relative",
    overflow: "hidden",
  },
  backgroundImageContainer: {
    position: "absolute",
    right: -10,
    top: 44,
  },
  backgroundImage: {
    width: 250,
    height: 140,
    resizeMode: "contain",
  },
  backgroundImageContainerDark: {
    right: -72,
    top: 35,
  },
  backgroundImageDark: {
    height: 73,
  },
  content: {
    position: "absolute",
    left: 20,
    top: 20,
    width: 287,
    height: 140,
    justifyContent: "space-between",
  },
  textContainer: {
    gap: 10,
  },
  title: {
    fontFamily: "PlusJakartaSans",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 28,
    color: "#222529",
    width: 279,
  },
  titleDark: {
    color: "#FFFFFF",
  },
  description: {
    fontFamily: "PlusJakartaSans",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 18,
    color: "#222529",
    width: 287,
  },
  descriptionDark: {
    color: "#FFFFFF",
  },
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  linkText: {
    fontFamily: "PlusJakartaSans",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 18,
    color: "#2256CB",
  },
  linkTextDark: {
    color: "#B6FFBD",
  },
  arrowIcon: {
    width: 14,
    height: 14,
    tintColor: "#2256CB",
  },
  arrowIconDark: {
    tintColor: "#B6FFBD",
  },
});
