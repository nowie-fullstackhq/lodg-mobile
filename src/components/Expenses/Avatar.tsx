import { Image, StyleSheet, View } from "react-native";
import type { ExpenseCategory, ExpenseType } from "@/types";

interface ExpenseAvatarProps {
  type: ExpenseType;
  category: ExpenseCategory;
}

export default function ExpenseAvatar({ type, category }: ExpenseAvatarProps) {
  const getBackgroundColor = () => {
    switch (category) {
      case "business":
        return "#EDEDED";
      case "donation":
        return "#C1DEFC";
      case "reimbursement":
        return "#EEFFEF";
      default:
        return "#EDEDED";
    }
  };

  const getIconSource = () => {
    switch (type) {
      case "gift":
        return require("@/assets/icons/icon-gift.svg");
      case "web":
        return require("@/assets/icons/icon-globe.svg");
      case "reimbursement":
        return require("@/assets/icons/icon-dollar.svg");
      case "water":
        return require("@/assets/icons/icon-raindrops.svg");
      case "mortgage":
        return require("@/assets/icons/icon-house-percent.svg");
      case "rent":
        return require("@/assets/icons/icon-building.svg");
      case "donation":
        return require("@/assets/icons/icon-hand-holding-heart.svg");
      default:
        return require("@/assets/icons/icon-gift.svg");
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: getBackgroundColor() },
        ]}
      >
        <Image
          source={getIconSource()}
          style={styles.icon}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 40,
    height: 40,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
  },
});
