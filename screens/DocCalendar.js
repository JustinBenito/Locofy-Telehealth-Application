import * as React from "react";
import {
  SafeAreaView,
  Pressable,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const DocCalendar = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.docCalendar}>
      <View style={[styles.header, styles.headerShadowBox]}>
        <Pressable
          style={styles.iconParkOutlineright}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/iconparkoutlineright.png")}
          />
        </Pressable>
        <Text style={[styles.profile, styles.titleFlexBox]}>Profile</Text>
        <TouchableOpacity
          style={styles.profile1}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("DocHome")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/profile1.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.profile2, styles.wrapperSpaceBlock]}>
        <View style={styles.iconParent}>
          <ImageBackground
            style={styles.icon2}
            resizeMode="cover"
            source={require("../assets/icon7.png")}
          />
          <View style={styles.titleParent}>
            <Text style={[styles.title, styles.titleTypo]}>Dr. Isaac</Text>
            <View style={[styles.phone, styles.phoneSpaceBlock]}>
              <Image
                style={styles.bicalendarFillIcon}
                resizeMode="cover"
                source={require("../assets/bicalendarfill1.png")}
              />
              <Text style={styles.pediatrician}>Pediatrician</Text>
            </View>
            <View style={styles.phoneSpaceBlock}>
              <Image
                style={styles.bicalendarFillIcon}
                resizeMode="cover"
                source={require("../assets/fluentcall20filled1.png")}
              />
              <Text style={styles.pediatrician}>M.R.P Hospital</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.fluentpen20Filled}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("DocSignupForm")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/fluentpen20filled.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.availableSlotWrapper, styles.wrapperSpaceBlock]}>
        <Text style={[styles.availableSlot, styles.titleTypo]}>
          Available Slot
        </Text>
      </View>
      <View
        style={[
          styles.datepickerHumanInterfaceGWrapper,
          styles.wrapperSpaceBlock,
        ]}
      >
        <View style={styles.datepickerHumanInterfaceG}>
          <View style={styles.content}>
            <View style={styles.header1}>
              <View style={styles.content1}>
                <View style={styles.monthAndYear}>
                  <View
                    style={[styles.iArrowsChevronleft, styles.arrowsLayout1]}
                  >
                    <Text
                      style={[styles.chevronleft, styles.chevronleftPosition]}
                    >
                      􀆉
                    </Text>
                  </View>
                  <View style={styles.monthAndYear1}>
                    <Text style={[styles.month, styles.monthLayout]}>
                      Month 2000
                    </Text>
                  </View>
                  <View
                    style={[styles.iArrowsChevronforward, styles.arrowsLayout1]}
                  >
                    <Text
                      style={[styles.chevronleft, styles.chevronleftPosition]}
                    >
                      􀯻
                    </Text>
                  </View>
                </View>
                <View style={styles.arrowsNextAndPrevious}>
                  <View style={styles.arrowsLayout}>
                    <Text style={[styles.chevronleft1, styles.wkFlexBox]}>
                      􀆉
                    </Text>
                  </View>
                  <View
                    style={[styles.iArrowsChevronforward1, styles.arrowsLayout]}
                  >
                    <Text style={[styles.chevronleft1, styles.wkFlexBox]}>
                      􀯻
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.calendarmaster}>
              <View style={styles.content2}>
                <View style={styles.calendarweekdaystitle}>
                  <View style={styles.calendarweekdaystitle}>
                    <View style={styles.calendarweekdaytitle}>
                      <View style={styles.calendarweekdaytitle}>
                        <View style={styles.content4}>
                          <Text style={[styles.wk, styles.wkFlexBox]}>Mon</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.calendarweekdaytitle}>
                      <View style={styles.calendarweekdaytitle}>
                        <View style={styles.content4}>
                          <Text style={[styles.wk, styles.wkFlexBox]}>Tue</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.calendarweekdaytitle}>
                      <View style={styles.calendarweekdaytitle}>
                        <View style={styles.content4}>
                          <Text style={[styles.wk, styles.wkFlexBox]}>Wed</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.calendarweekdaytitle}>
                      <View style={styles.calendarweekdaytitle}>
                        <View style={styles.content4}>
                          <Text style={[styles.wk, styles.wkFlexBox]}>Thu</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.calendarweekdaytitle}>
                      <View style={styles.calendarweekdaytitle}>
                        <View style={styles.content4}>
                          <Text style={[styles.wk, styles.wkFlexBox]}>Fri</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.calendarweekdaytitle}>
                      <View style={styles.calendarweekdaytitle}>
                        <View style={styles.content4}>
                          <Text style={[styles.wk, styles.wkFlexBox]}>Sat</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.calendarweekdaytitle}>
                      <View style={styles.calendarweekdaytitle}>
                        <View style={styles.content4}>
                          <Text style={[styles.wk, styles.wkFlexBox]}>Sun</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.calendarweekdaystitle}>
                  <View style={styles.content2}>
                    <View style={styles.content2}>
                      <View style={styles.content11}>
                        <Text style={[styles.text, styles.textFlexBox]}>
                          28
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.content2}>
                      <View style={styles.content11}>
                        <Text style={[styles.text, styles.textFlexBox]}>
                          29
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.content2}>
                      <View style={styles.content11}>
                        <Text style={[styles.text, styles.textFlexBox]}>
                          30
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.content2}>
                      <View style={styles.content11}>
                        <Text style={[styles.text, styles.textFlexBox]}>
                          31
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          1
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          2
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          3
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.calendarweekdaystitle}>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          4
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          5
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          6
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          7
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          8
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          9
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          10
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.calendarweekdaystitle}>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          11
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          12
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          13
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          14
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          15
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          16
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          17
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.calendarweekdaystitle}>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          18
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          19
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          20
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          21
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          22
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          23
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          24
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.calendarweekdaystitle}>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          25
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          26
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          27
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          28
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          29
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          30
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.calendardaymaster4}>
                      <View style={styles.content11}>
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          31
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.calendarweekdaystitle}>
                  <View style={styles.content2}>
                    <View style={styles.content2}>
                      <View style={styles.content11}>
                        <Text style={[styles.text, styles.textFlexBox]}>1</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.content2}>
                      <View style={styles.content11}>
                        <Text style={[styles.text, styles.textFlexBox]}>2</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.content2}>
                      <View style={styles.content11}>
                        <Text style={[styles.text, styles.textFlexBox]}>3</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.content2}>
                      <View style={styles.content11}>
                        <Text style={[styles.text, styles.textFlexBox]}>4</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.content2}>
                      <View style={styles.content11}>
                        <Text style={[styles.text, styles.textFlexBox]}>5</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.content2}>
                      <View style={styles.content11}>
                        <Text style={[styles.text, styles.textFlexBox]}>6</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.content2}>
                    <View style={styles.content2}>
                      <View style={styles.content11}>
                        <Text style={[styles.text, styles.textFlexBox]}>7</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    flexDirection: "row",
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  titleFlexBox: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  titleTypo: {
    fontFamily: FontFamily.h5,
    fontWeight: "600",
    fontSize: FontSize.h5_size,
  },
  phoneSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  arrowsLayout1: {
    width: 12,
    display: "none",
    height: 20,
    overflow: "hidden",
  },
  chevronleftPosition: {
    color: Color.userAccentColorUACLight,
    left: "0%",
    top: "0%",
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  monthLayout: {
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
  },
  wkFlexBox: {
    fontFamily: FontFamily.pxRegular,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  arrowsLayout: {
    height: 24,
    width: 15,
    overflow: "hidden",
  },
  textFlexBox: {
    lineHeight: 21,
    fontFamily: FontFamily.pxRegular,
    letterSpacing: 0,
    fontSize: FontSize.h5_size,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  iconParkOutlineright: {
    width: 68,
    height: 58,
  },
  profile: {
    fontFamily: FontFamily.robotoBold,
    color: Color.gray_200,
    width: 97,
    justifyContent: "center",
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  profile1: {
    width: 38,
    height: 38,
  },
  header: {
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowRadius: 0,
    elevation: 0,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
    justifyContent: "space-between",
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
  },
  icon2: {
    borderRadius: Border.br_8xs,
    width: 88,
    height: 88,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: Color.black,
    width: 80,
    height: 20,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  bicalendarFillIcon: {
    borderRadius: Border.br_7xs,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  pediatrician: {
    fontSize: FontSize.pxRegular_size,
    lineHeight: 16,
    textTransform: "capitalize",
    fontFamily: FontFamily.workSansRegular,
    color: Color.gray_100,
    marginLeft: 8,
    textAlign: "left",
  },
  phone: {
    alignItems: "center",
  },
  titleParent: {
    marginLeft: 16,
  },
  iconParent: {
    borderRadius: Border.br_54xl,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  fluentpen20Filled: {
    width: 32,
    height: 32,
    marginLeft: 16,
  },
  profile2: {
    borderRadius: Border.br_base,
    shadowColor: "rgba(24, 57, 107, 0.05)",
    shadowRadius: 20,
    elevation: 20,
    padding: Padding.p_base,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
  availableSlot: {
    color: Color.gray3,
    textAlign: "left",
  },
  availableSlotWrapper: {
    paddingHorizontal: 23,
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  chevronleft: {
    lineHeight: 50,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    fontSize: FontSize.size_lg,
  },
  iArrowsChevronleft: {
    display: "none",
  },
  month: {
    fontStyle: "italic",
    fontFamily: FontFamily.montserratBoldItalic,
    color: Color.labelColorsLCLPrimary,
    textAlign: "left",
    fontWeight: "700",
  },
  monthAndYear1: {
    marginLeft: 8,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  iArrowsChevronforward: {
    display: "none",
    marginLeft: 8,
  },
  monthAndYear: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  chevronleft1: {
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    color: Color.userAccentColorUACLight,
    left: "0%",
    top: "0%",
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  iArrowsChevronforward1: {
    marginLeft: 28,
  },
  arrowsNextAndPrevious: {
    justifyContent: "flex-end",
    marginLeft: 32,
    display: "none",
    flexDirection: "row",
    alignItems: "center",
  },
  content1: {
    flexDirection: "row",
    flex: 1,
  },
  header1: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  wk: {
    fontSize: FontSize.pixells_size,
    lineHeight: 16,
    color: Color.labelColorsLCLSecondary,
    alignSelf: "stretch",
  },
  content4: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  calendarweekdaytitle: {
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  calendarweekdaystitle: {
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  text: {
    color: Color.uIColorUiGray,
  },
  content11: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  content2: {
    alignSelf: "stretch",
    flex: 1,
  },
  text4: {
    color: Color.labelColorsLCLPrimary,
  },
  calendardaymaster4: {
    borderRadius: Border.br_81xl,
    alignSelf: "stretch",
    flex: 1,
  },
  calendarmaster: {
    marginTop: 14,
    alignSelf: "stretch",
    flex: 1,
  },
  content: {
    height: 338,
    padding: Padding.p_base,
    alignSelf: "stretch",
  },
  datepickerHumanInterfaceG: {
    alignSelf: "stretch",
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
  datepickerHumanInterfaceGWrapper: {
    padding: Padding.p_3xs,
  },
  docCalendar: {
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
});

export default DocCalendar;
