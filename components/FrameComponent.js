import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent = ({ mondayApril09, vector, prop, propMarginTop }) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.frameParent, frameViewStyle]}>
      <View style={styles.vectorParent}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector14.png")}
        />
        <Text style={styles.mondayApril09}>{mondayApril09}</Text>
      </View>
      <View style={styles.vectorParent}>
        <Image style={styles.vectorIcon} resizeMode="cover" source={vector} />
        <Text style={styles.mondayApril09}>{prop}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 16,
    height: 16,
  },
  mondayApril09: {
    fontSize: FontSize.pixells_size,
    lineHeight: 12,
    fontWeight: "600",
    fontFamily: FontFamily.h5,
    color: Color.black,
    textAlign: "center",
    marginLeft: 8,
  },
  vectorParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    alignSelf: "stretch",
    borderRadius: Border.br_base,
    backgroundColor: Color.aliceblue,
    padding: Padding.p_base,
    justifyContent: "space-between",
    marginTop: 24,
    flexDirection: "row",
  },
});

export default FrameComponent;
