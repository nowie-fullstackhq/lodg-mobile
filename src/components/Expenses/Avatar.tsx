import { StyleSheet, View } from "react-native";
import type { ExpenseCategory, ExpenseType } from "@/types";
import BuildingIcon from "../icons/BuildingIcon";
import DollarIcon from "../icons/DollarIcon";
import GiftIcon from "../icons/GiftIcon";
import GlobeIcon from "../icons/GlobeIcon";
import HandHoldingHeartIcon from "../icons/HandHoldingHeartIcon";
import HousePercentIcon from "../icons/HousePercentIcon";
import RaindropsIcon from "../icons/RaindropsIcon";

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

  const getIcon = () => {
    switch (type) {
      case "gift":
        return (
          <GiftIcon
            width={20}
            height={20}
          />
        );
      case "web":
        return (
          <GlobeIcon
            width={20}
            height={20}
          />
        );
      case "reimbursement":
        return (
          <DollarIcon
            width={20}
            height={20}
          />
        );
      case "water":
        return (
          <RaindropsIcon
            width={20}
            height={20}
          />
        );
      case "mortgage":
        return (
          <HousePercentIcon
            width={20}
            height={20}
          />
        );
      case "rent":
        return (
          <BuildingIcon
            width={20}
            height={20}
          />
        );
      case "donation":
        return (
          <HandHoldingHeartIcon
            width={20}
            height={20}
          />
        );
      default:
        return (
          <GiftIcon
            width={20}
            height={20}
          />
        );
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
        {getIcon()}
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
});
