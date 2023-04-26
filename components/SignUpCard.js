import * as React from "react";
import { Text, StyleSheet, Image, TextInput, View } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SignUpCard = (props) => {
  return (
    <View style={styles.signUpParent}>
      <Text style={styles.signUp}>Sign Up</Text>
      <View style={styles.form}>
        <View style={[styles.emailInput, styles.inputShadowBox]}>
          <View style={styles.frameParent}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame.png")}
            />
            <TextInput
              style={styles.albertomailcom}
              placeholder="Email Address"
              keyboardType="default"
              placeholderTextColor="#a4a4a4"
              onChangeText={e=>props.setEmail(e)}
              value={props.email}
            />
          </View>
        </View>
        <View style={[styles.passwordInput, styles.inputShadowBox]}>
          <View style={styles.frameGroup}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame1.png")}
            />
            <TextInput
              style={styles.albertomailcom}
              placeholder="Password"
              keyboardType="default"
              secureTextEntry
              placeholderTextColor="#a4a4a4"
              onChangeText={e=>props.setPassword(e)}
              value={props.password}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputShadowBox: {
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
    borderRadius: Border.br_3xs,
    alignSelf: "stretch",
  },
  signUp: {
    fontSize: FontSize.size_17xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.orange,
    textAlign: "center",
  },
  frameIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  albertomailcom: {
    marginLeft: 22,
    flex: 1,
  },
  frameParent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  emailInput: {
    paddingVertical: Padding.p_mid,
    flexDirection: "row",
  },
  frameGroup: {
    width: 273,
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    paddingVertical: Padding.p_lgi,
    marginTop: 24,
  },
  form: {
    width: 313,
    marginTop: 69,
  },
  signUpParent: {
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default SignUpCard;
