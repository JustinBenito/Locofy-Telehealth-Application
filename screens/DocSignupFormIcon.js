import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const DocSignupFormIcon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.docSignupFormIcon}
      resizeMode="cover"
      source={require("../assets/login1.png")}
    >
      <ScrollView
        style={styles.login}
        contentContainerStyle={styles.loginScrollViewContent}
      >
        <View style={styles.profileWrapper}>
          <Text style={styles.profile}>Profile</Text>
        </View>
        <RNPTextInput
          style={[styles.formFieldSharp, styles.bottomSectionSpaceBlock]}
          placeholder="eg. Jack Sullivan"
          label="Name"
          mode="flat"
          placeholderTextColor="#333"
          theme={{ colors: { text: "#000" } }}
        />
        <RNPTextInput
          style={[styles.formFieldSharp, styles.bottomSectionSpaceBlock]}
          placeholder="eg. #pediatrician #gynocologist"
          label="Specialty"
          mode="flat"
          placeholderTextColor="#333"
          theme={{ colors: { text: "#000" } }}
        />
        <RNPTextInput
          style={[styles.formFieldSharp, styles.bottomSectionSpaceBlock]}
          placeholder="eg. A experienced professional doctor "
          label="Bio"
          mode="flat"
          placeholderTextColor="#333"
          theme={{ colors: { text: "#000" } }}
        />
        <RNPTextInput
          style={[styles.formFieldSharp, styles.bottomSectionSpaceBlock]}
          placeholder="eg. GetGood Hospitals"
          label="Affiliated to"
          mode="flat"
          placeholderTextColor="#333"
          theme={{ colors: { text: "#000" } }}
        />
        <RNPTextInput
          style={[styles.formFieldSharp, styles.bottomSectionSpaceBlock]}
          placeholder="eg. Goa"
          label="State"
          mode="flat"
          placeholderTextColor="#333"
          theme={{ colors: { text: "#000" } }}
        />
        <TouchableOpacity
          style={[styles.bottomSection, styles.bottomSectionSpaceBlock]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("DocHome")}
        >
          <Pressable style={styles.button}>
            <Text style={styles.letsGo}>Lets Go</Text>
          </Pressable>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loginScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 29,
    paddingVertical: 55,
  },
  bottomSectionSpaceBlock: {
    marginTop: 33,
    alignSelf: "stretch",
  },
  profile: {
    fontSize: FontSize.size_17xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.orange,
    textAlign: "center",
  },
  profileWrapper: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  formFieldSharp: {
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
  letsGo: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.gray50,
    textAlign: "center",
    flex: 1,
  },
  button: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.orange,
    flexDirection: "row",
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_lg,
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
  },
  bottomSection: {
    alignItems: "center",
  },
  login: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    alignSelf: "stretch",
    flex: 1,
  },
  docSignupFormIcon: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
});

export default DocSignupFormIcon;
