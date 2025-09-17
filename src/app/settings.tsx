import { type Href, useRouter } from "expo-router";
import type React from "react";
import { useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HelpCard from "@/components/HelpCard";
import ArrowSmallLeftIcon from "@/components/icons/ArrowSmallLeftIcon";
import LogoutIcon from "@/components/icons/LogoutIcon";
import PayoutsIcon from "@/components/icons/PayoutsIcon";
import ProfileIcon from "@/components/icons/ProfileIcon";
import SubscriptionIcon from "@/components/icons/SubscriptionIcon";
import LogoutModal from "@/components/LogoutModal";

const { width } = Dimensions.get("window");

interface MenuItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  route: Href;
  isLogout?: boolean;
}

export default function SettingsScreen() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const router = useRouter();

  const menuItems: MenuItem[] = [
    {
      id: "1",
      icon: (
        <PayoutsIcon
          width={15}
          height={15}
          color="#2256CB"
        />
      ),
      title: "How It Works",
      route: "/how-it-works",
    },
    {
      id: "2",
      icon: (
        <SubscriptionIcon
          width={15}
          height={15}
          color="#2256CB"
        />
      ),
      title: "Lodg Subscription",
      route: "/subscription",
    },
  ];

  const accountItems: MenuItem[] = [
    {
      id: "3",
      icon: (
        <ProfileIcon
          width={15}
          height={15}
          color="#2256CB"
        />
      ),
      title: "Account Profile",
      route: "/how-it-works",
    },
    {
      id: "4",
      icon: (
        <LogoutIcon
          width={15}
          height={15}
          color="#2256CB"
        />
      ),
      title: "Log out",
      route: "/",
      isLogout: true,
    },
  ];

  const handleMenuPress = (route: Href, isLogout?: boolean) => {
    if (isLogout) {
      setShowLogoutModal(true);
    } else {
      router.push(route);
    }
  };

  const handleLogout = () => {
    console.log("User logged out");
    // TODO: Clear any stored authentication tokens, user data, etc.

    setShowLogoutModal(false);
    router.push("/");
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  };

  const renderMenuItem = (item: MenuItem) => (
    <TouchableOpacity
      key={item.id}
      style={styles.menuItem}
      onPress={() => handleMenuPress(item.route, item.isLogout)}
    >
      <View style={styles.iconContainer}>{item.icon}</View>
      <Text style={styles.menuItemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const handleBackButtonPress = () => {
    router.push("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#2256CB"
      />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackButtonPress}
        >
          <ArrowSmallLeftIcon
            width={28.8}
            height={28.8}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
          <View style={styles.profileTextContainer}>
            <Text style={styles.userName}>John Doe</Text>
            <Text style={styles.userHandle}>@johndoe</Text>
          </View>
        </View>
      </View>

      <View style={styles.settingsMenu}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.menuContent}>
            <View style={styles.menuSection}>
              {menuItems.map(renderMenuItem)}
            </View>

            <View style={styles.accountSection}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>ACCOUNT PAGES</Text>
              </View>
              <View style={styles.menuSection}>
                {accountItems.map(renderMenuItem)}
              </View>
            </View>

            <HelpCard
              buttonText="Contact Us"
              onButtonPress={() => router.push("/contact-us")}
            />
          </View>
        </ScrollView>
      </View>

      <LogoutModal
        visible={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onCancel={handleCancelLogout}
        onConfirm={handleLogout}
        username="johndoe"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2256CB",
  },
  header: {
    width: width,
    height: 227,
    backgroundColor: "#2256CB",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: 24,
    top: 48,
    zIndex: 10,
  },
  profileSection: {
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  profileTextContainer: {
    alignItems: "center",
  },
  avatarContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2256CB",
    lineHeight: 28,
  },
  userName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
    lineHeight: 28,
    textAlign: "center",
  },
  userHandle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#C8C8C8",
    textAlign: "center",
  },
  settingsMenu: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -30,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  menuContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  menuSection: {
    width: "100%",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 12,
    width: "100%",
  },
  iconContainer: {
    width: 30,
    height: 30,
    backgroundColor: "#FEFEFE",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  menuItemText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "700",
    color: "#888888",
    letterSpacing: 0.02,
  },
  accountSection: {
    marginTop: 24,
  },
  sectionHeader: {
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: "700",
    color: "#222529",
    lineHeight: 16,
  },
});
