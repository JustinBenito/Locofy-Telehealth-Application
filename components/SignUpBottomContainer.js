import * as React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SignUpBottomContainer = ({
  areYouADoctor,
  onLoginHerePress,
  onSigninHerePress,
  onSignup

}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomSection}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.2}
        onPress={
          onSignup
        }
      >
        <Text style={styles.signUp}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.promptFlexBox}>
        <Text style={styles.youTypo}>
          <Text style={styles.doYouHave}>Do you have an account?</Text>
          {` `}
        </Text>
        <Pressable style={styles.loginHere} onPress={onLoginHerePress}>
          <Text style={styles.hereTypo}>Login here</Text>
        </Pressable>
      </View>
      <View style={[styles.doctor, styles.promptFlexBox]}>
        <Text style={[styles.areYouA, styles.youTypo]}>{areYouADoctor}</Text>
        <TouchableOpacity
          style={styles.loginHere}
          activeOpacity={0.2}
          onPress={onSigninHerePress}
        >
          <Text style={[styles.signinHere1, styles.hereTypo]}>Signin here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  promptFlexBox: {
    marginTop: 20,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  youTypo: {
    fontSize: FontSize.pixells_size,
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  hereTypo: {
    color: Color.orange,
    fontSize: FontSize.pixells_size,
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  signUp: {
    fontSize: FontSize.size_lg,
    color: Color.gray50,
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  button: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.orange,
    width: 317,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_lg,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  doYouHave: {
    color: Color.gray_200,
  },
  loginHere: {
    marginLeft: 5,
  },
  areYouA: {
    width: 104,
    color: Color.gray_200,
  },
  signinHere1: {
    width: 69,
  },
  doctor: {
    width: 259,
  },
  bottomSection: {
    alignSelf: "stretch",
    marginTop: 78,
    alignItems: "center",
  },
});

export default SignUpBottomContainer;
