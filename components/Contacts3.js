import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FontSize, FontFamily } from "../GlobalStyles";

const Contacts3 = ({ style }) => {
  return (
    <View style={[styles.contacts, style]}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={styles.doctors}>Doctors</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 22,
    height: 23,
  },
  doctors: {
    fontSize: FontSize.pixells_size,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    marginTop: 7,
  },
  contacts: {
    width: 50,
    alignItems: "center",
  },
});

export default Contacts3;
