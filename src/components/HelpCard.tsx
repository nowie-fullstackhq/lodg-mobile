import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { G, Path, type SvgProps } from "react-native-svg";
import HelpCircleIcon from "./icons/HelpCircleIcon";

function Ellipsis(props: SvgProps) {
  return (
    <Svg
      width={264}
      height={350}
      fill="none"
      {...props}
    >
      <G
        stroke="#36F24B"
        opacity={0.2}
      >
        <Path d="M267.375-8c73.541 0 140.098 19.873 188.255 51.977 48.16 32.107 77.87 76.408 77.87 125.273 0 48.865-29.71 93.166-77.87 125.272-48.157 32.105-114.714 51.978-188.255 51.978-73.542 0-140.098-19.873-188.255-51.978C30.96 262.416 1.25 218.115 1.25 169.25c0-48.865 29.71-93.166 77.87-125.273C127.277 11.873 193.833-8 267.375-8Z" />
        <Path d="M267.375 16.031c63.587 0 121.132 17.184 162.766 44.94 41.637 27.758 67.311 66.05 67.311 108.279s-25.674 80.521-67.311 108.279c-41.634 27.756-99.179 44.94-162.766 44.94-63.587 0-121.132-17.184-162.765-44.94-41.637-27.758-67.313-66.05-67.313-108.279S62.973 88.729 104.61 60.97c41.633-27.755 99.178-44.939 162.765-44.939Z" />
        <Path d="M267.375 43.377c52.26 0 99.551 14.123 133.761 36.93 34.214 22.809 55.298 54.265 55.298 88.943 0 34.677-21.084 66.134-55.298 88.943-34.21 22.807-81.501 36.93-133.761 36.93-52.26 0-99.55-14.123-133.76-36.93-34.215-22.809-55.298-54.266-55.298-88.943 0-34.678 21.084-66.134 55.298-88.943 34.21-22.807 81.5-36.93 133.76-36.93Z" />
        <Path d="M267.375 70.724c40.933 0 77.969 11.061 104.756 28.92 26.791 17.86 43.284 42.48 43.284 69.606 0 27.126-16.493 51.745-43.284 69.605-26.787 17.859-63.823 28.921-104.756 28.921s-77.968-11.062-104.756-28.921c-26.79-17.86-43.283-42.479-43.283-69.605 0-27.126 16.493-51.746 43.283-69.606 26.788-17.859 63.823-28.92 104.756-28.92Z" />
        <Path d="M267.375 97.241c29.949 0 57.04 8.094 76.63 21.154 19.592 13.061 31.633 31.051 31.633 50.855s-12.041 37.794-31.633 50.855c-19.59 13.06-46.681 21.154-76.63 21.154-29.949 0-57.04-8.094-76.629-21.154-19.593-13.061-31.634-31.051-31.634-50.855s12.041-37.794 31.634-50.855c19.589-13.06 46.68-21.154 76.629-21.154Z" />
        <Path d="M267.375 121.272c19.995 0 38.074 5.404 51.14 14.115 13.07 8.713 21.076 20.696 21.076 33.863-.001 13.167-8.006 25.149-21.076 33.862-13.066 8.711-31.145 14.115-51.14 14.115s-38.075-5.404-51.141-14.115c-13.069-8.713-21.075-20.695-21.075-33.862 0-13.167 8.006-25.15 21.075-33.863 13.066-8.711 31.146-14.115 51.141-14.115Z" />
        <Path d="M267.375 140.5c12.031 0 22.901 3.252 30.747 8.483 7.851 5.234 12.628 12.409 12.628 20.267 0 7.858-4.777 15.033-12.628 20.267-7.846 5.231-18.716 8.483-30.747 8.483-12.03 0-22.9-3.252-30.747-8.483-7.85-5.234-12.628-12.409-12.628-20.267 0-7.858 4.778-15.033 12.628-20.267 7.847-5.231 18.717-8.483 30.747-8.483Z" />
      </G>
    </Svg>
  );
}

interface HelpCardProps {
  onButtonPress?: () => void;
  buttonText: string;
}

const { width } = Dimensions.get("window");

export default function HelpCard({ onButtonPress, buttonText }: HelpCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundImageContainer}>
        <Ellipsis style={styles.backgroundImage} />
      </View>

      <View style={styles.content}>
        <View style={styles.helpIconContainer}>
          <HelpCircleIcon
            width={24}
            height={24}
            color="#2256CB"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Need help?</Text>
          <Text style={styles.subtitleText}>Please contact us</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={onButtonPress}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 48,
    height: 180,
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#b6ffbd",
    borderRadius: 15,
    marginTop: 24,
  },
  backgroundImageContainer: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  backgroundImage: {
    width: 350,
    resizeMode: "contain",
  },
  content: {
    position: "relative",
    zIndex: 10,
    padding: 16,
    height: "100%",
    justifyContent: "space-between",
  },
  helpIconContainer: {
    width: 35,
    height: 35,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 0,
  },
  titleText: {
    fontFamily: "PlusJakartaSans",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 20,
    color: "#222529",
    letterSpacing: 0.02,
    marginBottom: 2,
  },
  subtitleText: {
    fontFamily: "PlusJakartaSans",
    fontWeight: "500",
    fontSize: 9.89,
    lineHeight: 16,
    color: "#222529",
  },
  button: {
    backgroundColor: "#FEFEFE",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 18,
    alignItems: "center",
    height: 34,
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "PlusJakartaSans",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 18,
    color: "#222529",
    textAlign: "center",
  },
});
