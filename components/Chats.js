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

const Chats = ({ style }) => {
  return (
    <View style={[styles.chats, style]}>
      <Image
        style={styles.chatIcon}
        resizeMode="cover"
        source={require("../assets/chat-icon2.png")}
      />
      <Text style={styles.home}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chatIcon: {
    width: 20,
    height: 20,
  },
  home: {
    fontSize: FontSize.pixells_size,
    fontFamily: FontFamily.robotoRegular,
    color: Color.gray_300,
    textAlign: "left",
    marginTop: 7,
  },
  chats: {
    width: 50,
    alignItems: "center",
  },
});

export default Chats;
