import * as React from "react";
import { View, TextInput, StyleSheet, Pressable, Text } from "react-native";
import { Border, Padding, Color, FontSize, FontFamily } from "../GlobalStyles";

const ProfileModal = ({ onClose }) => {
  return (
    <View style={[styles.profileModal, styles.buttonLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.emailInputWrapper}>
          <View style={styles.emailShadowBox}>
            <View style={[styles.dateOfBirthWrapper, styles.buttonFlexBox]}>
              <TextInput
                style={styles.dateOfBirth}
                placeholder="Date of Birth"
                keyboardType="default"
                placeholderTextColor="#a4a4a4"
              />
            </View>
          </View>
        </View>
        <View
          style={[styles.emailInputContainer, styles.buttonWrapperSpaceBlock]}
        >
          <View style={styles.emailShadowBox}>
            <View style={[styles.dateOfBirthWrapper, styles.buttonFlexBox]}>
              <TextInput
                style={styles.dateOfBirth}
                placeholder="Contact Number"
                keyboardType="default"
                placeholderTextColor="#a4a4a4"
              />
            </View>
          </View>
        </View>
        <View style={[styles.buttonWrapper, styles.buttonWrapperSpaceBlock]}>
          <Pressable style={[styles.button, styles.buttonFlexBox]}>
            <Text style={styles.signUp}>Update</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    borderRadius: Border.br_3xs,
    justifyContent: "center",
  },
  buttonFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonWrapperSpaceBlock: {
    marginTop: 19,
    padding: Padding.p_3xs,
    alignSelf: "stretch",
  },
  dateOfBirth: {
    flex: 1,
  },
  dateOfBirthWrapper: {
    flex: 1,
  },
  emailShadowBox: {
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_xl,
    shadowOpacity: 1,
    elevation: 22,
    shadowRadius: 22,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.02)",
    backgroundColor: Color.ghostwhite,
    flexDirection: "row",
    flex: 1,
    alignSelf: "stretch",
    borderRadius: Border.br_3xs,
  },
  emailInputWrapper: {
    height: 70,
    padding: Padding.p_3xs,
    alignSelf: "stretch",
  },
  emailInputContainer: {
    flex: 1,
  },
  signUp: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.gray50,
    textAlign: "center",
  },
  button: {
    backgroundColor: Color.orange,
    height: 57,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_lg,
    alignSelf: "stretch",
    justifyContent: "center",
    borderRadius: Border.br_3xs,
  },
  buttonWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
  },
  profileModal: {
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    width: 268,
    height: 313,
    overflow: "hidden",
    paddingHorizontal: Padding.p_sm,
    paddingVertical: 32,
    maxWidth: "100%",
    maxHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileModal;
