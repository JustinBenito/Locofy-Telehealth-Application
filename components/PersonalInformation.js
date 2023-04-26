import React, { useMemo } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PersonalInformation = ({
  medSuppInfo,
  medSuppText,
  personalInfoText,
  propColor,
}) => {
  const titleStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  return (
    <Pressable style={[styles.checkbox, styles.checkboxFlexBox]}>
      <View style={styles.checkboxFlexBox}>
        <Image style={styles.icon} resizeMode="cover" source={medSuppInfo} />
        <Text
          style={[styles.title, titleStyle]}
          numberOfLines={personalInfoText}
        >
          {medSuppText}
        </Text>
      </View>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkboxFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    borderRadius: Border.br_3xs,
    width: 32,
    height: 32,
  },
  title: {
    fontSize: FontSize.pxRegular_size,
    lineHeight: 14,
    fontFamily: FontFamily.pxRegular,
    color: Color.darkslategray_100,
    textAlign: "left",
    marginLeft: 4,
  },
  vectorIcon: {
    width: 7,
    height: 13,
  },
  checkbox: {
    alignSelf: "stretch",
    borderRadius: Border.br_base,
    backgroundColor: Color.gray_400,
    shadowColor: "rgba(24, 57, 107, 0.05)",
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    padding: Padding.p_base,
    justifyContent: "space-between",
    marginTop: 16,
  },
});

export default PersonalInformation;
