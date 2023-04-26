import * as React from "react";
import {
  ScrollView,
  SafeAreaView,
  Pressable,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FrameComponent from "../components/FrameComponent";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const DocHome = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={[styles.docHome, styles.headerBg]}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.docHomeScrollViewContent}
    >
      <SafeAreaView style={styles.docHome1}>
        <View style={[styles.header, styles.headerFlexBox]}>
          <Pressable style={styles.button}>
            <Pressable style={styles.buttonChild} />
            <View style={[styles.frame, styles.framePosition]} />
            <Image
              style={[styles.communicationBellRing, styles.framePosition]}
              resizeMode="cover"
              source={require("../assets/communication--bell-ring.png")}
            />
          </Pressable>
          <Text style={[styles.locohealth, styles.icon1FlexBox]}>
            LocoHealth
          </Text>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("DocSignupForm")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/profile2.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.hiDoc}>
          <Text style={[styles.helloIsaac, styles.locohealthTypo]}>
            Hello! Isaac
          </Text>
        </View>
        <View style={styles.upcoming}>
          <View
            style={[
              styles.upcomingAppointmentsWrapper,
              styles.wrapperSpaceBlock,
            ]}
          >
            <Text style={styles.upcomingAppointments}>
              Upcoming Appointments
            </Text>
          </View>
          <View style={styles.appointmentWrapper}>
            <View style={[styles.appointment, styles.checkboxShadowBox]}>
              <View style={styles.frameParent}>
                <View style={styles.frameWrapper}>
                  <View>
                    <Text style={[styles.title, styles.titleClr]}>Garry</Text>
                    <Text
                      style={[styles.title1, styles.titleClr]}
                    >{`Heart & Chest  Pain`}</Text>
                  </View>
                </View>
                <ImageBackground
                  style={[styles.icon1, styles.icon1FlexBox]}
                  resizeMode="cover"
                  source={require("../assets/icon8.png")}
                />
              </View>
              <FrameComponent
                mondayApril09="Monday, Dec 23"
                vector={require("../assets/vector8.png")}
                prop="12:00-13:00"
                propMarginTop={16}
              />
              <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
                <Pressable
                  style={[styles.resheduleWrapper, styles.button1FlexBox]}
                >
                  <Text style={styles.reshedule}>Reshedule</Text>
                </Pressable>
                <Pressable
                  style={[styles.cancelWrapper, styles.wrapperFlexBox]}
                >
                  <Text style={styles.cancel}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <Pressable style={[styles.points, styles.checkboxShadowBox]}>
          <View style={[styles.checkbox, styles.headerFlexBox]}>
            <View style={styles.fluentbookExclamationMark2Parent}>
              <Image
                style={[
                  styles.fluentbookExclamationMark2Icon,
                  styles.iconLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/fluentbookexclamationmark20filled.png")}
              />
              <Text style={[styles.title2, styles.titleTypo]}>Patients</Text>
            </View>
            <Pressable style={[styles.button1, styles.button1FlexBox]}>
              <Text style={styles.read}>Read</Text>
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require("../assets/vector9.png")}
              />
            </Pressable>
          </View>
          <Text style={[styles.checkAllYour, styles.title4Typo]}>
            Check all your patient status/reports
          </Text>
        </Pressable>
        <TouchableOpacity
          style={[styles.checkbox1, styles.checkboxShadowBox]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("DocCalendar")}
        >
          <View style={styles.iconParent}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/icon2.png")}
            />
            <Text style={[styles.title3, styles.titleTypo]}>
              Profile and Calendar
            </Text>
          </View>
          <Pressable
            style={[styles.vector, styles.vectorLayout]}
            onPress={() => navigation.navigate("DocCalendar")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/vector16.png")}
            />
          </Pressable>
        </TouchableOpacity>
        <Pressable style={[styles.checkbox2, styles.checkboxShadowBox]}>
          <View style={styles.iconParent}>
            <Pressable style={styles.icon4}>
              <Image
                style={styles.fluentlockOpen28FilledIcon}
                resizeMode="cover"
                source={require("../assets/fluentlockopen28filled.png")}
              />
            </Pressable>
            <Text style={[styles.title4, styles.title4Typo]}>
              Reset password
            </Text>
          </View>
          <Image
            style={[styles.vector, styles.vectorLayout]}
            resizeMode="cover"
            source={require("../assets/vector16.png")}
          />
        </Pressable>
        <Pressable style={[styles.checkbox3, styles.checkboxShadowBox]}>
          <View style={styles.iconParent}>
            <View style={styles.icon4}>
              <Image
                style={styles.fluentlockOpen28FilledIcon}
                resizeMode="cover"
                source={require("../assets/ionlogout.png")}
              />
            </View>
            <Text style={[styles.title4, styles.title4Typo]}>Log out</Text>
          </View>
          <Pressable style={styles.fluentedit20Regular}>
            <Image
              style={styles.vectorLayout}
              resizeMode="cover"
              source={require("../assets/vector16.png")}
            />
          </Pressable>
        </Pressable>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  docHomeScrollViewContent: {
    flexDirection: "column",
  },
  headerBg: {
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    overflow: "hidden",
  },
  headerFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  framePosition: {
    left: "18.37%",
    top: "18.42%",
    position: "absolute",
    overflow: "hidden",
  },
  icon1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  locohealthTypo: {
    color: Color.gray_200,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
  },
  wrapperSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
  },
  checkboxShadowBox: {
    padding: Padding.p_base,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(24, 57, 107, 0.05)",
    backgroundColor: Color.gray_400,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    alignSelf: "stretch",
  },
  titleClr: {
    color: Color.black,
    textAlign: "left",
  },
  frameGroupSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  button1FlexBox: {
    backgroundColor: Color.orange,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperFlexBox: {
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    flex: 1,
  },
  iconLayout: {
    height: 32,
    width: 32,
    borderRadius: Border.br_3xs,
  },
  titleTypo: {
    fontSize: FontSize.pxRegular_size,
    marginLeft: 4,
    color: Color.black,
    textAlign: "left",
  },
  title4Typo: {
    textTransform: "capitalize",
    lineHeight: 16,
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.pxRegular_size,
    color: Color.black,
    textAlign: "left",
  },
  vectorLayout: {
    height: 13,
    width: 7,
  },
  buttonChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.linen,
    position: "absolute",
    height: 38,
    width: 38,
  },
  frame: {
    height: "50%",
    width: "44.62%",
    right: "37.01%",
    bottom: "31.58%",
  },
  communicationBellRing: {
    height: "63.01%",
    width: "60.9%",
    right: "20.73%",
    bottom: "18.57%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  button: {
    height: 38,
    width: 38,
  },
  locohealth: {
    fontSize: FontSize.size_lg,
    width: 97,
    display: "flex",
    textAlign: "center",
    color: Color.gray_200,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  header: {
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowRadius: 0,
    elevation: 0,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    overflow: "hidden",
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
  helloIsaac: {
    fontSize: FontSize.size_13xl,
    textAlign: "center",
  },
  hiDoc: {
    marginTop: 15,
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  upcomingAppointments: {
    color: Color.gray3,
    textAlign: "left",
    fontFamily: FontFamily.h5,
    fontWeight: "600",
    fontSize: FontSize.h5_size,
  },
  upcomingAppointmentsWrapper: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  title: {
    fontFamily: FontFamily.h5,
    fontWeight: "600",
    fontSize: FontSize.h5_size,
  },
  title1: {
    fontSize: FontSize.pixells_size,
    lineHeight: 12,
    marginTop: 4,
    fontFamily: FontFamily.pxRegular,
  },
  frameWrapper: {
    flex: 1,
  },
  icon1: {
    width: 80,
    height: 80,
    marginLeft: 102,
    borderRadius: Border.br_base,
  },
  frameParent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  reshedule: {
    color: Color.systemBackgroundsSBLPrimary,
    lineHeight: 18,
    fontFamily: FontFamily.pxRegular,
    fontSize: FontSize.h5_size,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  resheduleWrapper: {
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    flex: 1,
  },
  cancel: {
    color: Color.orange,
    lineHeight: 18,
    fontFamily: FontFamily.pxRegular,
    fontSize: FontSize.h5_size,
    textAlign: "center",
  },
  cancelWrapper: {
    borderStyle: "solid",
    borderColor: "#ff9134",
    borderWidth: 1,
    marginLeft: 16,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
  },
  frameGroup: {
    flexDirection: "row",
    flex: 1,
  },
  appointment: {
    alignItems: "center",
  },
  appointmentWrapper: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  upcoming: {
    marginTop: 15,
    alignSelf: "stretch",
  },
  fluentbookExclamationMark2Icon: {
    overflow: "hidden",
  },
  title2: {
    width: 146,
    height: 21,
    marginLeft: 4,
    lineHeight: 18,
    fontFamily: FontFamily.h5,
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
  },
  fluentbookExclamationMark2Parent: {
    alignItems: "center",
    flexDirection: "row",
  },
  read: {
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.pxRegular_size,
    color: Color.systemBackgroundsSBLPrimary,
    lineHeight: 18,
    textAlign: "center",
  },
  vectorIcon: {
    width: 5,
    height: 9,
    marginLeft: 8,
  },
  button1: {
    shadowColor: "rgba(15, 39, 74, 0.1)",
    shadowRadius: 16,
    elevation: 16,
    width: 96,
    height: 30,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_base,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  checkbox: {
    borderRadius: Border.br_base,
  },
  checkAllYour: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  points: {
    marginTop: 15,
  },
  title3: {
    lineHeight: 14,
    marginLeft: 4,
    fontFamily: FontFamily.pxRegular,
  },
  iconParent: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  vector: {
    marginLeft: 8,
  },
  checkbox1: {
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  fluentlockOpen28FilledIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  icon4: {
    backgroundColor: Color.aliceblue,
    borderRadius: Border.br_3xs,
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  title4: {
    marginLeft: 4,
  },
  checkbox2: {
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  fluentedit20Regular: {
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_7xs,
    marginLeft: 8,
    flexDirection: "row",
    overflow: "hidden",
  },
  checkbox3: {
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  docHome1: {
    alignSelf: "stretch",
  },
  docHome: {
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default DocHome;
