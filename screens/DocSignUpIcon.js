import * as React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SignUpCard from "../components/SignUpCard";
import SignUpBottomContainer from "../components/SignUpBottomContainer";
import { Border, Color, Padding } from "../GlobalStyles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const DocSignUpIcon = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const onHandleSignin = () => {
    if(email!=='' && password!==''){
createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
  console.log('Signin done');
  navigation.navigate("DocSignupForm");
    })
    .catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  // ..
    });

    }
  }


  return (
    <ImageBackground
      style={styles.docSignUpIcon}
      resizeMode="cover"
      source={require("../assets/login.png")}
    >
      <View style={styles.login}>
        <SignUpCard email={email} password={password} setEmail={setEmail} setPassword={setPassword} />
        <SignUpBottomContainer
          areYouADoctor="Are you a Patient"
          onLoginHerePress={() => navigation.navigate("DocLogin")}
          onSigninHerePress={() => navigation.navigate("Login")}
          onSignup = {()=> onHandleSignin()}
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
