import * as React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SignUpCard from "../components/SignUpCard";
import SignUpBottomContainer from "../components/SignUpBottomContainer";
import { Border, Color, Padding } from "../GlobalStyles";

const DocSignUpIcon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.docSignUpIcon}
      resizeMode="cover"
      source={require("../assets/login.png")}
    >
      <View style={styles.login}>
        <SignUpCard />
        <SignUpBottomContainer
          areYouADoctor="Are you a Patient"
          onLoginHerePress={() => navigation.navigate("DocLogin")}
          onSigninHerePress={() => navigation.navigate("Login")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  login: {
    alignSelf: "stretch",
    borderTopLeftRadius: Border.br_41xl,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    height: 552,
    paddingHorizontal: Padding.p_10xl,
    paddingVertical: Padding.p_36xl,
    alignItems: "center",
  },
  docSignUpIcon: {
    flex: 1,
    width: "100%",
    height: 812,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default DocSignUpIcon;
