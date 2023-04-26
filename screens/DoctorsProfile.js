import * as React from "react";
import {
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProfileContainer from "../components/ProfileContainer";
import FrameComponent from "../components/FrameComponent";
import { FontFamily, Border, Color, Padding, FontSize } from "../GlobalStyles";

const DoctorsProfile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.doctorsProfile}>
      <ScrollView
        style={styles.docProfile}
        contentContainerStyle={styles.docProfileScrollViewContent}
      >
        <View style={styles.top}>
          <View style={[styles.backButtonParent, styles.frameGroupFlexBox]}>
            <Pressable
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require("../assets/vector11.png")}
              />
            </Pressable>
            <View style={styles.profileWrapper}>
              <Text style={[styles.profile, styles.bio1Typo]}>Profile</Text>
            </View>
            <View
              style={[
                styles.iconParkOutlineright,
                styles.fluentstar20FilledLayout,
              ]}
            >
              <Image
                style={styles.vectorIcon1}
                resizeMode="cover"
                source={require("../assets/vector4.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.contents, styles.contentsSpaceBlock]}>
          <ProfileContainer />
          <View style={[styles.buttons, styles.buttonsSpaceBlock]}>
            <View style={styles.frameParent}>
              <View style={[styles.followWrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.follow, styles.readClr]}>Follow</Text>
              </View>
              <View style={[styles.messageWrapper, styles.wrapperFlexBox]}>
                <Text style={styles.message}>Message</Text>
              </View>
            </View>
          </View>
          <View style={[styles.checkbox, styles.checkboxShadowBox]}>
            <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
              <View style={styles.fluentstar20FilledParent}>
                <Pressable
                  style={[
                    styles.fluentstar20Filled,
                    styles.fluentstar20FilledLayout,
                  ]}
                >
                  <Image
                    style={styles.vectorIcon2}
                    resizeMode="cover"
                    source={require("../assets/vector12.png")}
                  />
                </Pressable>
                <View style={styles.ratingParent}>
                  <Text style={[styles.rating, styles.titleLayout]}>
                    Rating
                  </Text>
                  <Text style={[styles.title, styles.titleLayout]}>
                    4.78 out of 5
                  </Text>
                </View>
              </View>
              <Pressable style={[styles.button, styles.buttonShadowBox]}>
                <Text style={[styles.read, styles.readTypo]}>Like</Text>
                <Image
                  style={styles.vectorIcon3}
                  resizeMode="cover"
                  source={require("../assets/vector6.png")}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.checkboxShadowBox}>
            <View style={styles.top}>
              <View style={styles.bio}>
                <Text style={[styles.bio1, styles.bio1Typo]}>Bio</Text>
              </View>
              <View style={styles.text}>
                <Text style={[styles.engagedInThe, styles.profile1Typo]}>
                  Engaged in the effective treatment of disability, depression,
                  chronic fatigue syndrome, fears, anxiety, apathy and lethargy,
                  sleep disorders, schizophrenia, mental disorders in the
                  elderly and senile. Also, conducts a reception in English
                </Text>
              </View>
            </View>
            <View style={styles.affiliation}>
              <View style={styles.affiliatedToWrapper}>
                <Text style={[styles.bio1, styles.bio1Typo]}>
                  Affiliated to
                </Text>
              </View>
              <View style={styles.hospita}>
                <Pressable style={styles.fluentcall20Filled}>
                  <Image
                    style={styles.vectorIcon4}
                    resizeMode="cover"
                    source={require("../assets/vector13.png")}
                  />
                </Pressable>
                <View style={styles.mrpHospitalWrapper}>
                  <Text style={[styles.mrpHospital, styles.readTypo]}>
                    M.R.P Hospital
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.available}>
              <View style={styles.affiliatedToWrapper}>
                <Text style={[styles.bio1, styles.bio1Typo]}>
                  Available Appointments
                </Text>
              </View>
              <FrameComponent
                mondayApril09="Monday, April 09"
                vector={require("../assets/vector15.png")}
                prop="12:00-12:30"
                propMarginTop={24}
              />
              <FrameComponent
                mondayApril09="Monday, April 09"
                vector={require("../assets/vector15.png")}
                prop="12:00-12:30"
              />
            </View>
          </View>
          <TouchableOpacity
            style={[styles.button1, styles.buttonShadowBox]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("DoctorsCalendar")}
          >
            <Image
              style={styles.vectorIcon5}
              resizeMode="cover"
              source={require("../assets/vector10.png")}
            />
            <Text style={[styles.makeAnAppointment, styles.readClr]}>
              Make an appointment
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  docProfileScrollViewContent: {
    flexDirection: "column",
  },
  frameGroupFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  bio1Typo: {
    fontFamily: FontFamily.h5,
    fontWeight: "600",
  },
  fluentstar20FilledLayout: {
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  contentsSpaceBlock: {
    marginTop: 18,
    alignSelf: "stretch",
  },
  buttonsSpaceBlock: {
    marginTop: 16,
    borderRadius: Border.br_base,
    alignSelf: "stretch",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  readClr: {
    color: Color.systemBackgroundsSBLPrimary,
    textAlign: "center",
    lineHeight: 18,
  },
  checkboxShadowBox: {
    padding: Padding.p_base,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(24, 57, 107, 0.05)",
    backgroundColor: Color.gray_400,
    marginTop: 16,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    alignSelf: "stretch",
  },
  titleLayout: {
    lineHeight: 12,
    fontSize: FontSize.pixells_size,
  },
  buttonShadowBox: {
    elevation: 16,
    shadowRadius: 16,
    shadowColor: "rgba(15, 39, 74, 0.1)",
    justifyContent: "center",
    backgroundColor: Color.orange,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    alignItems: "center",
  },
  readTypo: {
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.pxRegular_size,
  },
  profile1Typo: {
    fontSize: FontSize.pixells_size,
    textAlign: "left",
  },
  vectorIcon: {
    width: 10,
    height: 17,
  },
  backButton: {
    backgroundColor: Color.gray50,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_2xs,
    borderRadius: Border.br_7xs,
    flexDirection: "row",
  },
  profile: {
    color: Color.midnightblue,
    textAlign: "left",
    fontSize: FontSize.h5_size,
  },
  profileWrapper: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  vectorIcon1: {
    display: "none",
    height: 16,
    width: 20,
  },
  iconParkOutlineright: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    padding: Padding.p_3xs,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
  backButtonParent: {
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowRadius: 0,
    elevation: 0,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_4xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    justifyContent: "space-between",
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
  top: {
    alignSelf: "stretch",
  },
  follow: {
    textAlign: "center",
    fontFamily: FontFamily.pxRegular,
    fontSize: FontSize.h5_size,
  },
  followWrapper: {
    backgroundColor: Color.orange,
    justifyContent: "center",
    borderRadius: Border.br_xs,
  },
  message: {
    color: Color.orange,
    textAlign: "center",
    fontFamily: FontFamily.pxRegular,
    lineHeight: 18,
    fontSize: FontSize.h5_size,
  },
  messageWrapper: {
    borderStyle: "solid",
    borderColor: "#ff9134",
    borderWidth: 1,
    marginLeft: 16,
    justifyContent: "center",
    borderRadius: Border.br_xs,
  },
  frameParent: {
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  buttons: {
    height: 65,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
  vectorIcon2: {
    height: 20,
    width: 20,
  },
  fluentstar20Filled: {
    backgroundColor: Color.chocolate,
    padding: Padding.p_7xs,
  },
  rating: {
    color: Color.gray2,
    fontFamily: FontFamily.pxRegular,
    textAlign: "left",
  },
  title: {
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.h5,
    fontWeight: "600",
  },
  ratingParent: {
    marginLeft: 4,
  },
  fluentstar20FilledParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  read: {
    textAlign: "center",
    color: Color.systemBackgroundsSBLPrimary,
    lineHeight: 18,
  },
  vectorIcon3: {
    width: 4,
    height: 8,
    marginLeft: 8,
    display: "none",
  },
  button: {
    borderRadius: 90,
    width: 96,
    height: 30,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
  },
  frameGroup: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  checkbox: {
    alignItems: "center",
  },
  bio1: {
    color: Color.gray3,
    textAlign: "left",
    fontSize: FontSize.h5_size,
  },
  bio: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  engagedInThe: {
    lineHeight: 14,
    color: Color.labelColorsLCLPrimary,
    display: "flex",
    fontFamily: FontFamily.pxRegular,
    alignItems: "center",
    flex: 1,
  },
  text: {
    marginTop: 8,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  affiliatedToWrapper: {
    flexDirection: "row",
  },
  vectorIcon4: {
    height: 10,
    width: 12,
  },
  fluentcall20Filled: {
    backgroundColor: Color.aliceblue,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_8xs,
    borderRadius: Border.br_7xs,
    overflow: "hidden",
  },
  mrpHospital: {
    lineHeight: 16,
    textTransform: "capitalize",
    color: Color.gray_100,
    textAlign: "left",
  },
  mrpHospitalWrapper: {
    marginLeft: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  hospita: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  affiliation: {
    marginTop: 24,
  },
  available: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  vectorIcon5: {
    width: 12,
    height: 16,
  },
  makeAnAppointment: {
    marginLeft: 8,
    textAlign: "center",
    fontFamily: FontFamily.pxRegular,
    fontSize: FontSize.h5_size,
  },
  button1: {
    height: 48,
    paddingHorizontal: 48,
    paddingVertical: Padding.p_base,
    marginTop: 16,
    borderRadius: Border.br_base,
    alignSelf: "stretch",
  },
  contents: {
    paddingHorizontal: Padding.p_8xs,
    paddingBottom: Padding.p_4xs,
  },
  docProfile: {
    alignSelf: "stretch",
    flex: 1,
  },
  doctorsProfile: {
    width: "100%",
    padding: Padding.p_8xs,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
});

export default DoctorsProfile;
