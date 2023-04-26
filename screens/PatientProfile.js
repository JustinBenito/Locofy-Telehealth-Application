import React, { useState, useCallback } from "react";
import {
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProfileModal from "../components/ProfileModal";
import PersonalInformation from "../components/PersonalInformation";
import { FontFamily, Border, Color, Padding, FontSize } from "../GlobalStyles";
import {signOut} from 'firebase/auth'
import {auth} from '../firebase'



const PatientProfile = () => {
  const navigation = useNavigation();
  const [rightIconVisible, setRightIconVisible] = useState(false);

  const openRightIcon = useCallback(() => {
    setRightIconVisible(true);
  }, []);

  const closeRightIcon = useCallback(() => {
    setRightIconVisible(false);
  }, []);

  const signOutof = () => {
signOut(auth).then(() => {
  console.log("Sign out!")
  navigation.navigate("SignUp")
}).catch((error) => {
console.log(error);
});

  }

  return (
    <>
      <ScrollView
        style={styles.patientProfile}
        contentContainerStyle={styles.patientProfileScrollViewContent}
      >
        <SafeAreaView style={styles.profile}>
          <View style={[styles.topNavigationBar, styles.checkboxFlexBox]}>
            <View style={styles.iconTransform}>
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require("../assets/vector3.png")}
              />
            </View>
            <Text style={[styles.profile1, styles.titleTypo1]}>Profile</Text>
            <View style={styles.iconTransform}>
              <Image
                style={styles.vectorIcon1}
                resizeMode="cover"
                source={require("../assets/vector4.png")}
              />
            </View>
          </View>
          <View style={styles.contentSpaceBlock}>
            <View style={styles.profile2}>
              <View style={[styles.leftParent, styles.leftFlexBox]}>
                <View style={[styles.left, styles.leftFlexBox]}>
                  <Image
                    style={styles.icon}
                    resizeMode="cover"
                    source={require("../assets/icon.png")}
                  />
                  <View style={styles.nameParent}>
                    <View style={styles.name}>
                      <Text style={[styles.title, styles.titleTypo1]}>
                        Justine
                      </Text>
                    </View>
                    <View style={[styles.phone, styles.phoneFlexBox]}>
                      <Image
                        style={styles.bicalendarFillIcon}
                        resizeMode="cover"
                        source={require("../assets/bicalendarfill.png")}
                      />
                      <Text style={[styles.text, styles.textTypo]}>
                        01.01.2022
                      </Text>
                    </View>
                    <View style={styles.phoneFlexBox}>
                      <Image
                        style={styles.bicalendarFillIcon}
                        resizeMode="cover"
                        source={require("../assets/fluentcall20filled.png")}
                      />
                      <Text style={[styles.text, styles.textTypo]}>
                        +1234567889
                      </Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  style={[styles.rightIcon, styles.iconLayout]}
                  accessible="true"
                  activeOpacity={0.2}
                  onPress={openRightIcon}
                >
                  <Image
                    style={styles.vectorIcon2}
                    resizeMode="cover"
                    source={require("../assets/vector5.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.list}>
              <View style={[styles.points, styles.checkboxShadowBox]}>
                <View style={styles.checkbox}>
                  <View style={styles.fluentbookExclamationMark2Parent}>
                    <Image
                      style={[
                        styles.fluentbookExclamationMark2Icon,
                        styles.iconLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/fluentbookexclamationmark20filled.png")}
                    />
                    <Text style={[styles.title1, styles.titleTypo]}>
                      Medical History
                    </Text>
                  </View>
                  <Pressable style={styles.button}>
                    <Text style={styles.read}>Read</Text>
                    <Image
                      style={styles.vectorIcon3}
                      resizeMode="cover"
                      source={require("../assets/vector6.png")}
                    />
                  </Pressable>
                </View>
                <Text
                  style={[styles.checkYourAll, styles.checkboxSpaceBlock]}
                  numberOfLines={1}
                >
                  Check your All Medical History
                </Text>
              </View>
              <PersonalInformation
                medSuppInfo={require("../assets/icon1.png")}
                medSuppText={`Medicine & Supplements`}
              />
              <PersonalInformation
                medSuppInfo={require("../assets/icon2.png")}
                medSuppText="Personal Information"
                propColor="#091f44"
              />
              <TouchableOpacity style={[styles.checkbox1, styles.checkboxSpaceBlock]}  >
                <View style={styles.fluentbookExclamationMark2Parent}>
                  <Image
                    style={styles.icon1}
                    resizeMode="cover"
                    source={require("../assets/icon3.png")}
                  />
                  <Text style={[styles.title2, styles.titleTypo]}>
                    Reset password
                  </Text>
                </View>
                <Image
                  style={styles.vectorIcon4}
                  resizeMode="cover"
                  source={require("../assets/vector7.png")}
                />
              </TouchableOpacity>
              <Pressable style={[styles.checkbox2, styles.checkboxSpaceBlock]} 
            onPress={signOutof}
            >
                <View style={styles.fluentbookExclamationMark2Parent} >
                  <Image
                    style={styles.icon1}
                    resizeMode="cover"
                    source={require("../assets/icon4.png")}
                  />
                  <Text style={[styles.title2, styles.titleTypo]}>Log out</Text>
                </View>
                <Image
                  style={styles.fluentedit20RegularIcon}
                  resizeMode="cover"
                  source={require("../assets/fluentedit20regular.png")}
                />
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>

      <Modal animationType="fade" transparent visible={rightIconVisible}>
        <View style={styles.rightIconOverlay}>
          <Pressable style={styles.rightIconBg} onPress={closeRightIcon} />
          <ProfileModal onClose={closeRightIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  patientProfileScrollViewContent: {
    flexDirection: "column",
  },
  checkboxFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  titleTypo1: {
    fontFamily: FontFamily.h5,
    fontWeight: "600",
  },
  leftFlexBox: {
    flex: 1,
    flexDirection: "row",
  },
  phoneFlexBox: {
    marginTop: 8,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  textTypo: {
    textTransform: "capitalize",
    lineHeight: 16,
    fontFamily: FontFamily.workSansRegular,
  },
  iconLayout: {
    height: 32,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  checkboxShadowBox: {
    backgroundColor: Color.gray_400,
    padding: Padding.p_base,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowColor: "rgba(24, 57, 107, 0.05)",
    borderRadius: Border.br_base,
  },
  titleTypo: {
    marginLeft: 4,
    fontSize: FontSize.pxRegular_size,
    color: Color.black,
    textAlign: "left",
  },
  checkboxSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  contentSpaceBlock: {
    marginTop: 21,
    alignSelf: "stretch",
  },
  homeTypo: {
    marginTop: 7,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.pixells_size,
    textAlign: "left",
  },
  vectorIcon: {
    width: 6,
    height: 12,
    display: "none",
  },
  iconTransform: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    padding: Padding.p_3xs,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
  profile1: {
    color: Color.midnightblue,
    textAlign: "left",
    fontSize: FontSize.h5_size,
    fontWeight: "600",
  },
  vectorIcon1: {
    height: 16,
    width: 20,
    display: "none",
  },
  topNavigationBar: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  icon: {
    borderRadius: Border.br_8xs,
    height: 88,
    width: 104,
  },
  title: {
    textAlign: "center",
    color: Color.black,
    fontSize: FontSize.h5_size,
    fontWeight: "600",
  },
  name: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  bicalendarFillIcon: {
    borderRadius: Border.br_7xs,
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  text: {
    color: Color.gray_100,
    marginLeft: 8,
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.pxRegular_size,
    textAlign: "left",
  },
  phone: {
    alignItems: "center",
  },
  nameParent: {
    marginLeft: 17,
    justifyContent: "center",
    width: 104,
  },
  left: {
    borderRadius: Border.br_54xl,
    alignItems: "center",
    flexDirection: "row",
  },
  rightIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rightIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  vectorIcon2: {
    height: 20,
    width: 20,
  },
  rightIcon: {
    backgroundColor: Color.aliceblue,
    padding: Padding.p_7xs,
    alignItems: "flex-end",
    marginLeft: 30,
  },
  leftParent: {
    flexDirection: "row",
  },
  profile2: {
    padding: Padding.p_base,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(24, 57, 107, 0.05)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 0,
    },
    borderRadius: Border.br_base,
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
  fluentbookExclamationMark2Icon: {
    width: 32,
  },
  title1: {
    display: "flex",
    width: 146,
    height: 21,
    lineHeight: 18,
    fontFamily: FontFamily.h5,
    fontWeight: "600",
    alignItems: "center",
  },
  fluentbookExclamationMark2Parent: {
    alignItems: "center",
    flexDirection: "row",
  },
  read: {
    color: Color.systemBackgroundsSBLPrimary,
    lineHeight: 18,
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.pxRegular_size,
    textAlign: "center",
  },
  vectorIcon3: {
    width: 5,
    height: 9,
    marginLeft: 8,
  },
  button: {
    backgroundColor: Color.orange,
    shadowColor: "rgba(15, 39, 74, 0.1)",
    shadowRadius: 16,
    elevation: 16,
    width: 96,
    height: 30,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 0,
    },
    borderRadius: Border.br_base,
    alignItems: "center",
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  checkbox: {
    borderRadius: Border.br_base,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  checkYourAll: {
    fontFamily: FontFamily.workSansRegular,
    textTransform: "capitalize",
    lineHeight: 16,
    fontSize: FontSize.pxRegular_size,
    color: Color.black,
    textAlign: "left",
  },
  points: {
    alignSelf: "stretch",
  },
  icon1: {
    maxHeight: "100%",
    borderRadius: Border.br_3xs,
    maxWidth: "100%",
    overflow: "hidden",
  },
  title2: {
    fontFamily: FontFamily.workSansRegular,
    textTransform: "capitalize",
    lineHeight: 16,
  },
  vectorIcon4: {
    width: 7,
    height: 13,
  },
  checkbox1: {
    backgroundColor: Color.gray_400,
    padding: Padding.p_base,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowColor: "rgba(24, 57, 107, 0.05)",
    borderRadius: Border.br_base,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  fluentedit20RegularIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  checkbox2: {
    backgroundColor: Color.gray_400,
    padding: Padding.p_base,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowColor: "rgba(24, 57, 107, 0.05)",
    borderRadius: Border.br_base,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  list: {
    marginTop: 25,
    alignSelf: "stretch",
  },
  profile: {
    alignSelf: "stretch",
  },
  patientProfile: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
});

export default PatientProfile;
