import * as React from "react";
import {
  Pressable,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Articles = ({ rectangle4044 }) => {
  return (
    <Pressable style={[styles.articles, styles.articlesShadowBox]}>
      <View style={[styles.articlesInner, styles.articlesShadowBox]}>
        <View style={styles.rectangleParent}>
          <ImageBackground
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/rectangle4044.png")}
          />
          <View style={styles.whatIsTheReplicationCrisisParent}>
            <Text style={[styles.whatIsThe, styles.whatIsTheFlexBox]}>
              What is the Replication Crisis?
            </Text>
            <Text
              style={[styles.thisArticleWill, styles.whatIsTheFlexBox]}
              numberOfLines={4}
            >
              This article will look at this subject, providing a brief overview
              of this subject.
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  articlesShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    alignSelf: "stretch",
  },
  whatIsTheFlexBox: {
    textAlign: "left",
    color: Color.black,
    alignSelf: "stretch",
  },
  frameChild: {
    width: 120,
    height: 80,
    borderRadius: Border.br_base,
  },
  whatIsThe: {
    fontSize: FontSize.pxRegular_size,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.h5,
  },
  thisArticleWill: {
    fontSize: FontSize.pixells_size,
    lineHeight: 12,
    fontFamily: FontFamily.pxRegular,
    marginTop: 4,
  },
  whatIsTheReplicationCrisisParent: {
    flex: 1,
    marginLeft: 8,
  },
  rectangleParent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  articlesInner: {
    backgroundColor: Color.mistyrose,
    shadowColor: "rgba(24, 57, 107, 0.05)",
    shadowRadius: 20,
    elevation: 20,
    overflow: "hidden",
    padding: Padding.p_base,
    borderRadius: Border.br_base,
  },
  articles: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 4,
    elevation: 4,
    height: 112,
    marginTop: 4,
  },
});

export default Articles;
