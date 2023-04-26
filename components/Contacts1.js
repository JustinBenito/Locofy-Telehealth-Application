import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Contacts1 = ({ style }) => {
  return (
    <View style={[styles.contacts, style]}>
      <Image
        style={styles.userIcon}
        resizeMode="cover"
        source={require("../assets/user-icon1.png")}
      />
      <Text style={styles.profile}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userIcon: {
    width: 18,
    height: 20,
  },
  profile: {
    fontSize: FontSize.pixells_size,
    fontFamily: FontFamily.robotoRegular,
    color: Color.orange,
    textAlign: "left",
    marginTop: 7,
  },
  contacts: {
    width: 50,
    alignItems: "center",
  },
});

export default Contacts1;
