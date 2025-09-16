import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SettingsIcon from "./icons/SettingsIcon";

interface HeaderProps {
  username: string;
}

export default function Header({ username }: HeaderProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(word => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const firstName = username.split(" ")[0];
  const initials = getInitials(username);

  const handleSettingsPressed = () => {
    router.push("/settings");
  };

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <View style={styles.avatarCircle}>
          <Text style={styles.initialsText}>{initials}</Text>
        </View>

        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Hi, {firstName}</Text>
          <Text style={styles.welcomeText}>Welcome Back!</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.settingsButton}
        onPress={handleSettingsPressed}
      >
        <SettingsIcon style={styles.settingsIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatarCircle: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#2256cb",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  initialsText: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "PlusJakartaSansBold",
  },
  greetingContainer: {
    flex: 1,
  },
  greetingText: {
    fontSize: 14,
    color: "#333333",
    fontFamily: "PlusJakartaSansBold",
  },
  welcomeText: {
    fontSize: 10,
    color: "#676767",
    fontFamily: "PlusJakartaSans",
    marginTop: 4,
  },
  settingsButton: {
    padding: 8,
    backgroundColor: "#ffffff",
    borderRadius: 12,
  },
  settingsIcon: {
    width: 22,
    height: 22,
    tintColor: "#2256cb",
  },
});
