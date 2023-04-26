import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  TextInput,
  View,
  Pressable,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const LoginIcon = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onHandleLogin = () => {
    if(email!=='' && password!==''){
       signInWithEmailAndPassword(auth, email, password)
       .then(()=>{
        navigation.navigate("BottomTabsRoot", { screen: "PatientHome" })
       })
    }
  }

  return (
    <ImageBackground
      style={styles.loginIcon}
      resizeMode="cover"
      source={require("../assets/login.png")}
    >
      <View style={styles.login}>
        <View style={styles.logInParent}>
          <Text style={styles.logIn}>Log In</Text>
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
                  onChangeText={e=>setEmail(e)}
                  value={email}
                />
              </View>
            </View>
            <View style={styles.passwordSection}>
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
                    onChangeText={e=>setPassword(e)}
                    value={password}
                  />
                </View>
              </View>
              <Text style={[styles.forgotPassword, styles.textTypo]}>
                Forgot password
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={[styles.button, styles.buttonFlexBox]}
            activeOpacity={0.2}
            onPress={() =>
              onHandleLogin()
              // navigation.navigate("BottomTabsRoot", { screen: "PatientHome" })
            }
          >
            <Text style={[styles.login1, styles.textTypo]}>Login</Text>
          </TouchableOpacity>
          <View style={[styles.prompt, styles.buttonFlexBox]}>
            <Text style={styles.areYouATypo}>Don’t have an account?</Text>
            <Pressable
              style={styles.signUpHereContainer}
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={[styles.text, styles.textTypo]}>
                {` `}
                <Text style={styles.signUpHere}>Sign up here</Text>
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.doctor, styles.buttonFlexBox]}>
          <Text style={[styles.areYouA, styles.areYouATypo]}>
            Are you a Doctor
          </Text>
          <TouchableOpacity
            style={styles.signUpHereContainer}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("DocLogin")}
          >
            <Text style={[styles.signinHere1, styles.textTypo]}>
              Signin here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  inputShadowBox: {
    paddingHorizontal: Padding.p_xl,
    elevation: 22,
    shadowRadius: 22,
    shadowColor: "rgba(0, 0, 0, 0.02)",
    backgroundColor: Color.ghostwhite,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    alignSelf: "stretch",
  },
  textTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  buttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  areYouATypo: {
    color: Color.gray_200,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.pixells_size,
    textAlign: "center",
  },
  logIn: {
    fontSize: FontSize.size_17xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    color: Color.orange,
  },
  frameIcon: {
    width: 24,
    overflow: "hidden",
    height: 24,
  },
  albertomailcom: {
    marginLeft: 22,
    flex: 1,
  },
  frameParent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  emailInput: {
    paddingVertical: Padding.p_mid,
    flexDirection: "row",
  },
  frameGroup: {
    width: 273,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    paddingVertical: Padding.p_lgi,
  },
  forgotPassword: {
    marginTop: 6,
    fontSize: FontSize.pixells_size,
    fontWeight: "500",
    color: Color.orange,
  },
  passwordSection: {
    alignItems: "flex-end",
    marginTop: 24,
    alignSelf: "stretch",
  },
  form: {
    width: 313,
    marginTop: 69,
  },
  logInParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  login1: {
    fontSize: FontSize.size_lg,
    color: Color.gray50,
  },
  button: {
    backgroundColor: Color.orange,
    width: 317,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_lg,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
  },
  signUpHere: {
    color: Color.orange,
  },
  text: {
    fontSize: FontSize.pixells_size,
    fontWeight: "500",
  },
  signUpHereContainer: {
    marginLeft: 5,
  },
  prompt: {
    marginTop: 20,
  },
  bottomSection: {
    marginTop: 30,
    alignSelf: "stretch",
    alignItems: "center",
  },
  areYouA: {
    width: 104,
  },
  signinHere1: {
    width: 69,
    fontSize: FontSize.pixells_size,
    fontWeight: "500",
    color: Color.orange,
  },
  doctor: {
    width: 259,
    marginTop: 30,
  },
  login: {
    borderTopLeftRadius: Border.br_41xl,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 12,
    elevation: 12,
    height: 561,
    paddingHorizontal: Padding.p_10xl,
    paddingTop: Padding.p_36xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    alignSelf: "stretch",
    alignItems: "center",
  },
  loginIcon: {
    width: "100%",
    height: 812,
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
});

export default LoginIcon;
