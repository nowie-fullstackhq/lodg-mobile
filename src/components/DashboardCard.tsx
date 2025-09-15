import { LinearGradient } from "expo-linear-gradient";
import {
  type ColorValue,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, {
  Defs,
  G,
  Image,
  Path,
  Pattern,
  type SvgProps,
  Use,
} from "react-native-svg";
import RightCaretCircleIcon from "./icons/RightCaretCircleIcon";

const { width } = Dimensions.get("window");

interface DashboardCardProps {
  title: string;
  description: string;
  linkText: string;
  onPress: () => void;
  gradientColors: readonly [ColorValue, ColorValue, ...ColorValue[]];
  variant?: "light" | "dark";
}

export default function DashboardCard({
  title,
  description,
  linkText,
  onPress,
  gradientColors,
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
      <View
        style={[
          styles.backgroundImageContainer,
          isDark && styles.backgroundImageContainerDark,
        ]}
      >
        {isDark ? (
          <Box style={styles.backgroundImage} />
        ) : (
          <PaperPlane style={styles.backgroundImage} />
        )}
      </View>

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
          <RightCaretCircleIcon
            style={styles.arrowIcon}
            fill={isDark ? "#B6FFBD" : "#2256CB"}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 48,
    height: 185,
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
    resizeMode: "contain",
  },
  backgroundImageContainerDark: {
    right: 2,
    top: 35,
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
  },
});

function PaperPlane(props: SvgProps) {
  return (
    <Svg
      width={250}
      height={140}
      fill="none"
      {...props}
    >
      <G opacity={0.5}>
        <Path
          fill="#96CAFA"
          stroke="#fff"
          strokeWidth={0.9}
          d="m163.709 53.361-.415-12.405 36.413-34.977-22.768 40.299-9.598 8.63c-1.376 1.237-3.57.302-3.632-1.547Z"
        />
        <Path
          fill="#fff"
          d="m198.668 2.354-50.323 24.024c-2.068.987-2.231 3.868-.288 5.082l13.814 8.63a2.7 2.7 0 0 0 3.313-.355l32.332-31.437-23.981 34.754a3.6 3.6 0 0 0 1.02 5.075l16.144 10.35c1.772 1.136 4.126.068 4.438-2.014l7.652-51.058c.345-2.301-2.022-4.053-4.121-3.05Z"
        />
        <Path
          stroke="#C8C8C8"
          strokeDasharray="6 6"
          strokeLinecap="round"
          strokeWidth={3}
          d="M161.489 61.15C145.022 85.606 131.06 97.097 107.3 80.828c-10.778-7.38-9.256-20.65-2.236-24.243s18.146 3.838 21.834 18.273c4.683 18.33-15.307 58.765-105.85 75.711"
          opacity={0.7}
        />
      </G>
    </Svg>
  );
}

function Box(props: SvgProps) {
  return (
    <Svg
      width={103}
      height={73}
      fill="none"
      {...props}
    >
      <Path
        fill="url(#a)"
        d="M0 0h475.436v73H0z"
        opacity={0.3}
      />
      <Defs>
        <Pattern
          id="a"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use
            xlinkHref="#b"
            transform="matrix(.00137 0 0 .00893 0 0)"
          />
        </Pattern>
        <Image
          xlinkHref="data:image/png;base64,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"
          id="b"
          width={729}
          height={112}
          preserveAspectRatio="none"
        />
      </Defs>
    </Svg>
  );
}
