import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Avatar from "./Avatar";

interface HeaderProps {
  username: string;
}

export default function Header({ username }: HeaderProps) {
  const firstName = username.split(" ")[0];

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <View style={styles.avatarContainer}>
          <Avatar
            username={username}
            hasAvatar={false}
          />
        </View>

        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Hi, {firstName}</Text>
          <Text style={styles.welcomeText}>Welcome Back!</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.settingsButton}>
        <Image
          source={require("@/assets/icons/Settings.svg")}
          style={styles.settingsIcon}
        />
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
  avatarContainer: {
    marginRight: 12,
  },
  greetingContainer: {
    flex: 1,
  },
  greetingText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#333333",
    fontFamily: "PlusJakartaSans",
  },
  welcomeText: {
    fontSize: 10,
    fontWeight: "400",
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
