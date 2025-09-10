import { useState } from "react";
import {
  Image,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function TodaysMoney() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    { id: 0, amount: "₱53,036.74" },
    { id: 1, amount: "₱123,456.78" },
    { id: 2, amount: "₱67,890.00" },
  ];

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = Math.floor(event.nativeEvent.contentOffset.x / slideSize);
    setCurrentSlide(index);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const maskAmount = (amount: string) => {
    return amount.replace(/[0-9]/g, "*");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Amount deducted for tax</Text>
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={toggleVisibility}
        >
          <Image
            source={require("@/assets/icons/Eye.svg")}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.slider}
      >
        {slides.map(slide => (
          <View
            key={slide.id}
            style={styles.slide}
          >
            <Text style={styles.amountText}>
              {isVisible ? slide.amount : maskAmount(slide.amount)}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.indicatorContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              {
                backgroundColor: index === currentSlide ? "#8ca6e0" : "#C8C8C8",
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#888888",
    lineHeight: 16,
    textTransform: "uppercase",
    fontFamily: "PlusJakartaSans",
    marginRight: 4,
  },
  eyeButton: {
    padding: 4,
  },
  eyeIcon: {
    width: 16,
    height: 16,
    tintColor: "#888888",
  },
  slider: {
    marginBottom: 16,
  },
  slide: {
    width: 327,
    alignItems: "flex-start",
  },
  amountText: {
    fontSize: 32,
    fontWeight: "700",
    color: "#2D3748",
    fontFamily: "PlusJakartaSans",
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  indicator: {
    height: 4,
    width: 58,
    borderRadius: 4,
  },
});
