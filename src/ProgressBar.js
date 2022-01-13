import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export const ProgressBar = ({
  barWidth = 350,
  barHeight = 20,
  barBackground = "#ffffffee",
  barStyle = {},
  fontFamily,
  percentTextStyle = {},
  colors = ["#fe2130", "#fdd900", "#09c6da", "#62e408"],
  locations = [0.01, 0.48, 0.82, 1],
  getProgressPercent = () => {},
}) => {
  const [progressPercent, setProgressPercent] = React.useState(0);

  const styles = StyleSheet.create({
    percent: {
      fontSize: 18,
      fontFamily,
      color: "#000",
      marginLeft: 15,
      marginBottom: 5,
      ...percentTextStyle,
    },
    bar: {
      width: barWidth,
      height: barHeight,
      borderRadius: barHeight,
      backgroundColor: barBackground,
      overflow: "hidden",
      elevation: 7,
      ...barStyle,
    },
    progressWrapper: {
      overflow: "hidden",
      borderRadius: barHeight,
      elevation: 7,
    },
    progress: {
      height: "100%",
      width: barWidth,
    },
  });

  const onSelectProgress = (e) => {
    const progress = e.nativeEvent.locationX;
    if (progress > barWidth) {
      return;
    }
    let percent = Math.floor((progress * 100) / barWidth);
    if (percent === 99) {
      percent++;
    }
    setProgressPercent(percent);
    getProgressPercent(percent);
  };

  return (
    <>
      <Text style={styles.percent}>{progressPercent}%</Text>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onSelectProgress}
        style={styles.bar}
      >
        <View
          style={{ ...styles.progressWrapper, width: `${progressPercent}%` }}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={locations}
            style={styles.progress}
            colors={colors}
          />
        </View>
      </TouchableOpacity>
    </>
  );
};
