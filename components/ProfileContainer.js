import * as React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import { Border, FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const ProfileContainer = () => {
  return (
    <View style={[styles.profile, styles.iconLayout]}>
      <ImageBackground
        style={[styles.icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/icon5.png")}
      />
      <View style={styles.frameParent}>
        <View style={styles.titleParent}>
          <Text style={styles.title}>Dr. Charollette Baker</Text>
          <Text style={styles.title1}>Pediatrician</Text>
        </View>
        <View style={styles.fluentpeopleCommunity20FilParent}>
          <Image
            style={styles.fluentpeopleCommunity20FilIcon}
            resizeMode="cover"
            source={require("../assets/fluentpeoplecommunity20filled.png")}
          />
          <View style={styles.patientsParent}>
            <Text style={[styles.patients, styles.title2Typo]}>Patients</Text>
            <Text style={[styles.title2, styles.title2Typo]}>345+</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    borderRadius: Border.br_base,
    alignSelf: "stretch",
  },
  title2Typo: {
    textAlign: "center",
    lineHeight: 12,
    fontSize: FontSize.pixells_size,
  },
  icon: {
    width: 105,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: FontSize.h5_size,
    display: "flex",
    width: 132,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.h5,
    fontWeight: "600",
    alignItems: "center",
  },
  title1: {
    marginTop: 4,
    fontFamily: FontFamily.pxRegular,
    lineHeight: 12,
    fontSize: FontSize.pixells_size,
    textAlign: "left",
    color: Color.black,
  },
  titleParent: {
    alignSelf: "stretch",
  },
  fluentpeopleCommunity20FilIcon: {
    borderRadius: Border.br_3xs,
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  patients: {
    color: Color.gray2,
    fontFamily: FontFamily.pxRegular,
  },
  title2: {
    color: Color.black,
    fontFamily: FontFamily.h5,
    fontWeight: "600",
    textAlign: "center",
  },
  patientsParent: {
    marginLeft: 4,
  },
  fluentpeopleCommunity20FilParent: {
    marginTop: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    width: 172,
    marginLeft: 16,
    alignSelf: "stretch",
  },
  profile: {
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    shadowColor: "rgba(24, 57, 107, 0.05)",
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    padding: Padding.p_base,
    flexDirection: "row",
  },
});

export default ProfileContainer;
