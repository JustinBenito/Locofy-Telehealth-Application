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

const Contacts2 = ({ style }) => {
  return (
    <View style={[styles.contacts, style]}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
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
    color: Color.gray_300,
    textAlign: "left",
    marginTop: 7,
  },
  contacts: {
    width: 50,
    alignItems: "center",
  },
});

export default Contacts2;
