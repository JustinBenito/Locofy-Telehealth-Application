import * as React from "react";
import {
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const DoctorsCalendar = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.doctorsCalendar}>
      <ScrollView
        style={styles.docCal}
        contentContainerStyle={styles.docCalScrollViewContent}
      >
        <View style={styles.top}>
          <View style={[styles.backButtonParent, styles.bottomTabsFlexBox]}>
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
              <Text style={[styles.profile, styles.profileTypo]}>Schedule</Text>
            </View>
            <View style={styles.iconParkOutlineright}>
              <Image
                style={styles.vectorIcon1}
                resizeMode="cover"
                source={require("../assets/vector4.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.searchSpaceBlock}>
          <Text style={[styles.description, styles.profileTypo]}>
            Description
          </Text>
          <Text style={styles.enterTheReason}>
            Enter the reason for booking an appointment
          </Text>
        </View>
        <TextInput
          style={[styles.search, styles.searchSpaceBlock]}
          placeholder="Enter here"
          keyboardType="default"
          placeholderTextColor="#ff9134"
        />
        <SafeAreaView
          style={[
            styles.datepickerHumanInterfaceGWrapper,
            styles.searchSpaceBlock,
          ]}
        >
          <View style={styles.datepickerHumanInterfaceG}>
            <View style={styles.content}>
              <View style={styles.header}>
                <View style={styles.content1}>
                  <View style={styles.monthAndYear}>
                    <View style={styles.iArrowsChevronleft}>
                      <Text
                        style={[styles.chevronleft, styles.chevronleftFlexBox]}
                      >
                        􀆉
                      </Text>
                    </View>
                    <View style={styles.monthAndYear1}>
                      <Text style={[styles.month, styles.monthLayout]}>
                        Month 2000
                      </Text>
                    </View>
                    <View style={styles.iArrowsChevronforward}>
                      <Text
                        style={[styles.chevronleft, styles.chevronleftFlexBox]}
                      >
                        􀯻
                      </Text>
                    </View>
                  </View>
                  <View style={styles.arrowsNextAndPrevious}>
                    <View style={styles.arrowsLayout}>
                      <Text style={[styles.chevronleft1, styles.monthLayout]}>
                        􀆉
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.iArrowsChevronforward1,
                        styles.arrowsLayout,
                      ]}
                    >
                      <Text style={[styles.chevronleft1, styles.monthLayout]}>
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
                            <Text
                              style={[styles.wk, styles.chevronleftFlexBox]}
                            >
                              Mon
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.calendarweekdaytitle}>
                        <View style={styles.calendarweekdaytitle}>
                          <View style={styles.content4}>
                            <Text
                              style={[styles.wk, styles.chevronleftFlexBox]}
                            >
                              Tue
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.calendarweekdaytitle}>
                        <View style={styles.calendarweekdaytitle}>
                          <View style={styles.content4}>
                            <Text
                              style={[styles.wk, styles.chevronleftFlexBox]}
                            >
                              Wed
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.calendarweekdaytitle}>
                        <View style={styles.calendarweekdaytitle}>
                          <View style={styles.content4}>
                            <Text
                              style={[styles.wk, styles.chevronleftFlexBox]}
                            >
                              Thu
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.calendarweekdaytitle}>
                        <View style={styles.calendarweekdaytitle}>
                          <View style={styles.content4}>
                            <Text
                              style={[styles.wk, styles.chevronleftFlexBox]}
                            >
                              Fri
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.calendarweekdaytitle}>
                        <View style={styles.calendarweekdaytitle}>
                          <View style={styles.content4}>
                            <Text
                              style={[styles.wk, styles.chevronleftFlexBox]}
                            >
                              Sat
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.calendarweekdaytitle}>
                        <View style={styles.calendarweekdaytitle}>
                          <View style={styles.content4}>
                            <Text
                              style={[styles.wk, styles.chevronleftFlexBox]}
                            >
                              Sun
                            </Text>
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
                          <Text style={[styles.text, styles.textFlexBox]}>
                            1
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.content2}>
                      <View style={styles.content2}>
                        <View style={styles.content11}>
                          <Text style={[styles.text, styles.textFlexBox]}>
                            2
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.content2}>
                      <View style={styles.content2}>
                        <View style={styles.content11}>
                          <Text style={[styles.text, styles.textFlexBox]}>
                            3
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.content2}>
                      <View style={styles.content2}>
                        <View style={styles.content11}>
                          <Text style={[styles.text, styles.textFlexBox]}>
                            4
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.content2}>
                      <View style={styles.content2}>
                        <View style={styles.content11}>
                          <Text style={[styles.text, styles.textFlexBox]}>
                            5
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.content2}>
                      <View style={styles.content2}>
                        <View style={styles.content11}>
                          <Text style={[styles.text, styles.textFlexBox]}>
                            6
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.content2}>
                      <View style={styles.content2}>
                        <View style={styles.content11}>
                          <Text style={[styles.text, styles.textFlexBox]}>
                            7
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
        <View style={[styles.vectorParent, styles.bottomTabsSpaceBlock]}>
          <Image
            style={styles.vectorIcon2}
            resizeMode="cover"
            source={require("../assets/vector10.png")}
          />
          <Text style={styles.bookAppointment}>Book Appointment</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  docCalScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 12,
    paddingVertical: 0,
  },
  bottomTabsFlexBox: {
    justifyContent: "space-between",
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
  profileTypo: {
    fontFamily: FontFamily.h5,
    fontWeight: "600",
    fontSize: FontSize.h5_size,
    textAlign: "left",
  },
  searchSpaceBlock: {
    marginTop: 23,
    alignSelf: "stretch",
  },
  chevronleftFlexBox: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  monthLayout: {
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
  },
  arrowsLayout: {
    height: 24,
    width: 15,
    overflow: "hidden",
  },
  textFlexBox: {
    lineHeight: 21,
    letterSpacing: 0,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.pxRegular,
    fontSize: FontSize.h5_size,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  bottomTabsSpaceBlock: {
    paddingVertical: Padding.p_mini,
    marginTop: 23,
    flexDirection: "row",
    alignItems: "center",
  },
  vectorIcon: {
    width: 10,
    height: 17,
  },
  backButton: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.gray50,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_2xs,
    flexDirection: "row",
  },
  profile: {
    color: Color.midnightblue,
    textAlign: "left",
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
    borderRadius: Border.br_3xs,
    padding: Padding.p_3xs,
    overflow: "hidden",
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
  backButtonParent: {
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowRadius: 0,
    elevation: 0,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_4xs,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    alignSelf: "stretch",
    overflow: "hidden",
  },
  top: {
    alignSelf: "stretch",
  },
  description: {
    color: "#1e293b",
    textAlign: "left",
    alignSelf: "stretch",
  },
  enterTheReason: {
    lineHeight: 12,
    color: "#575a61",
    marginTop: 8,
    fontFamily: FontFamily.pxRegular,
    fontSize: FontSize.pixells_size,
    textAlign: "left",
  },
  search: {
    backgroundColor: "rgba(255, 169, 37, 0.2)",
    shadowColor: "rgba(24, 57, 107, 0.05)",
    shadowRadius: 20,
    elevation: 20,
    height: 48,
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    alignItems: "center",
  },
  chevronleft: {
    fontSize: FontSize.size_lg,
    lineHeight: 50,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    justifyContent: "center",
    color: Color.userAccentColorUACLight,
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    display: "flex",
    width: "100%",
  },
  iArrowsChevronleft: {
    height: 20,
    width: 12,
    display: "none",
    overflow: "hidden",
  },
  month: {
    fontStyle: "italic",
    fontWeight: "700",
    fontFamily: FontFamily.montserratBoldItalic,
    color: Color.labelColorsLCLPrimary,
    textAlign: "left",
  },
  monthAndYear1: {
    marginLeft: 8,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  iArrowsChevronforward: {
    marginLeft: 8,
    height: 20,
    width: 12,
    display: "none",
    overflow: "hidden",
  },
  monthAndYear: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  chevronleft1: {
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    color: Color.userAccentColorUACLight,
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    fontFamily: FontFamily.pxRegular,
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
  header: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  wk: {
    lineHeight: 16,
    color: Color.labelColorsLCLSecondary,
    justifyContent: "center",
    fontFamily: FontFamily.pxRegular,
    fontSize: FontSize.pixells_size,
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
  vectorIcon2: {
    width: 12,
    height: 16,
  },
  bookAppointment: {
    lineHeight: 18,
    color: Color.systemBackgroundsSBLPrimary,
    marginLeft: 8,
    textAlign: "center",
    fontFamily: FontFamily.pxRegular,
    fontSize: FontSize.h5_size,
  },
  vectorParent: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.orange,
    paddingHorizontal: 56,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  docCal: {
    alignSelf: "stretch",
    flex: 1,
  },
  doctorsCalendar: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
});

export default DoctorsCalendar;
