import * as React from "react";
import {
  SafeAreaView,
  ScrollView,
  Pressable,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontFamily, Border, FontSize } from "../GlobalStyles";

const DoctorsList = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.doctorsList, styles.bottomTabsBg]}>
      <ScrollView
        style={styles.frame}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.header}>
          <Pressable style={styles.button}>
            <View style={styles.buttonChild} />
            <View style={[styles.frame1, styles.frame1Position]} />
            <Image
              style={[styles.communicationBellRing, styles.frame1Position]}
              resizeMode="cover"
              source={require("../assets/communication--bell-ring.png")}
            />
          </Pressable>
          <Text style={[styles.locohealth, styles.wrapperFlexBox]}>
            LocoHealth
          </Text>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.2}
            onPress={() =>
              navigation.navigate("BottomTabsRoot", {
                screen: "PatientProfile",
              })
            }
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/profile.png")}
            />
          </TouchableOpacity>
        </View>
        <ImageBackground
          style={[styles.searchBarIcon, styles.titleSpaceBlock]}
          resizeMode="cover"
          source={require("../assets/searchbar.png")}
        >
          <TextInput
            style={styles.search}
            placeholder="Search your Symptoms"
            keyboardType="default"
            placeholderTextColor="#ffa925"
          />
        </ImageBackground>
        <View style={styles.titleSpaceBlock}>
          <View style={[styles.listOfDoctorsWrapper, styles.wrapperLayout]}>
            <Text
              style={[styles.listOfDoctors, styles.titleTypo]}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              List of Doctors
            </Text>
          </View>
          <View style={[styles.basedOnRatingWrapper, styles.wrapperLayout]}>
            <Text style={styles.basedOnRating}>based on rating</Text>
          </View>
        </View>
        <View style={[styles.appointments, styles.titleSpaceBlock]}>
          <View style={[styles.appointmentWrapper, styles.wrapperFlexBox]}>
            <View style={[styles.appointment, styles.appointmentSpaceBlock]}>
              <TouchableOpacity
                style={styles.frameParent}
                activeOpacity={0.2}
                onPress={() => navigation.navigate("DoctorsProfile")}
              >
                <View>
                  <View>
                    <Text
                      style={[styles.title1, styles.titleClr]}
                    >{`Dr. Isaac `}</Text>
                    <Text style={[styles.title2, styles.titleLayout]}>
                      Pediatrician
                    </Text>
                  </View>
                  <View style={styles.fluentstar20FilledParent}>
                    <Pressable style={styles.fluentstar20Filled}>
                      <Image
                        style={styles.vectorIcon}
                        resizeMode="cover"
                        source={require("../assets/vector12.png")}
                      />
                    </Pressable>
                    <View style={styles.ratingParent}>
                      <Text style={[styles.rating, styles.titleLayout]}>
                        Rating
                      </Text>
                      <Text style={[styles.title3, styles.titleLayout]}>
                        4 out of 5
                      </Text>
                    </View>
                  </View>
                </View>
                <ImageBackground
                  style={styles.icon1}
                  resizeMode="cover"
                  source={require("../assets/icon6.png")}
                />
              </TouchableOpacity>
              <Pressable
                style={[styles.frameContainer, styles.frameContainerSpaceBlock]}
              >
                <View style={styles.vectorParent}>
                  <Image
                    style={styles.vectorIcon1}
                    resizeMode="cover"
                    source={require("../assets/vector14.png")}
                  />
                  <Text style={[styles.mondayDec23, styles.titleLayout]}>
                    Tuesday, April 10
                  </Text>
                </View>
                <View style={styles.vectorParent}>
                  <Image
                    style={styles.vectorIcon1}
                    resizeMode="cover"
                    source={require("../assets/vector15.png")}
                  />
                  <Text style={[styles.mondayDec23, styles.titleLayout]}>
                    02:00-04:00
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={[styles.frameContainer, styles.frameContainerSpaceBlock]}
              >
                <View style={styles.vectorParent}>
                  <Image
                    style={styles.vectorIcon1}
                    resizeMode="cover"
                    source={require("../assets/vector14.png")}
                  />
                  <Text style={[styles.mondayDec23, styles.titleLayout]}>
                    Wednesday, April 11
                  </Text>
                </View>
                <View style={styles.vectorParent}>
                  <Image
                    style={styles.vectorIcon1}
                    resizeMode="cover"
                    source={require("../assets/vector15.png")}
                  />
                  <Text style={[styles.mondayDec23, styles.titleLayout]}>
                    02:00-04:00
                  </Text>
                </View>
              </Pressable>
              <TouchableOpacity
                style={[
                  styles.bookDoctorWrapper,
                  styles.frameContainerSpaceBlock,
                ]}
                activeOpacity={0.2}
                onPress={() => navigation.navigate("DoctorsCalendar")}
              >
                <Text style={styles.bookDoctor}>Book Doctor</Text>
              </TouchableOpacity>
            </View>
          </View>
          <SafeAreaView
            style={[styles.appointmentContainer, styles.wrapperFlexBox]}
          >
            <View style={[styles.appointment1, styles.appointmentSpaceBlock]}>
              <TouchableOpacity
                style={styles.frameParent}
                activeOpacity={0.2}
                onPress={() => navigation.navigate("DoctorsProfile")}
              >
                <View>
                  <View>
                    <Text
                      style={[styles.title1, styles.titleClr]}
                    >{`Dr. Isaac `}</Text>
                    <Text style={[styles.title2, styles.titleLayout]}>
                      Pediatrician
                    </Text>
                  </View>
                  <View style={styles.fluentstar20FilledParent}>
                    <Pressable style={styles.fluentstar20Filled}>
                      <Image
                        style={styles.vectorIcon}
                        resizeMode="cover"
                        source={require("../assets/vector12.png")}
                      />
                    </Pressable>
                    <View style={styles.ratingParent}>
                      <Text style={[styles.rating, styles.titleLayout]}>
                        Rating
                      </Text>
                      <Text style={[styles.title3, styles.titleLayout]}>
                        4 out of 5
                      </Text>
                    </View>
                  </View>
                </View>
                <ImageBackground
                  style={styles.icon1}
                  resizeMode="cover"
                  source={require("../assets/icon6.png")}
                />
              </TouchableOpacity>
              <Pressable
                style={[styles.frameContainer, styles.frameContainerSpaceBlock]}
              >
                <View style={styles.vectorParent}>
                  <Image
                    style={styles.vectorIcon1}
                    resizeMode="cover"
                    source={require("../assets/vector14.png")}
                  />
                  <Text style={[styles.mondayDec23, styles.titleLayout]}>
                    Tuesday, April 10
                  </Text>
                </View>
                <View style={styles.vectorParent}>
                  <Image
                    style={styles.vectorIcon1}
                    resizeMode="cover"
                    source={require("../assets/vector15.png")}
                  />
                  <Text style={[styles.mondayDec23, styles.titleLayout]}>
                    02:00-04:00
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={[styles.frameContainer, styles.frameContainerSpaceBlock]}
              >
                <View style={styles.vectorParent}>
                  <Image
                    style={styles.vectorIcon1}
                    resizeMode="cover"
                    source={require("../assets/vector14.png")}
                  />
                  <Text style={[styles.mondayDec23, styles.titleLayout]}>
                    Wednesday, April 11
                  </Text>
                </View>
                <View style={styles.vectorParent}>
                  <Image
                    style={styles.vectorIcon1}
                    resizeMode="cover"
                    source={require("../assets/vector15.png")}
                  />
                  <Text style={[styles.mondayDec23, styles.titleLayout]}>
                    02:00-04:00
                  </Text>
                </View>
              </Pressable>
              <TouchableOpacity
                style={[
                  styles.bookDoctorWrapper,
                  styles.frameContainerSpaceBlock,
                ]}
                activeOpacity={0.2}
                onPress={() => navigation.navigate("DoctorsCalendar")}
              >
                <Text style={styles.bookDoctor}>Book Doctor</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
  },
  bottomTabsBg: {
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    alignItems: "center",
  },
  frame1Position: {
    left: "18.37%",
    top: "18.42%",
    position: "absolute",
    overflow: "hidden",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleSpaceBlock: {
    marginTop: 9,
    alignSelf: "stretch",
  },
  wrapperLayout: {
    width: 375,
    paddingHorizontal: Padding.p_3xs,
    flexDirection: "row",
  },
  titleTypo: {
    fontFamily: FontFamily.h5,
    fontWeight: "600",
  },
  appointmentSpaceBlock: {
    padding: Padding.p_base,
    borderRadius: Border.br_base,
    alignSelf: "stretch",
  },
  titleClr: {
    color: Color.black,
    textAlign: "center",
  },
  titleLayout: {
    lineHeight: 12,
    fontSize: FontSize.pixells_size,
  },
  frameContainerSpaceBlock: {
    marginTop: 16,
    flexDirection: "row",
  },
  doctorsTypo: {
    marginTop: 7,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.pixells_size,
    textAlign: "left",
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
  frame1: {
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
    maxWidth: "100%",
    maxHeight: "100%",
  },
  button: {
    height: 38,
    width: 38,
  },
  locohealth: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.gray_200,
    display: "flex",
    width: 97,
    textAlign: "center",
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
    justifyContent: "space-between",
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
  search: {
    shadowColor: "rgba(24, 57, 107, 0.05)",
    height: 50,
    paddingHorizontal: Padding.p_5xs,
    undefined: "",
    elevation: 20,
    shadowRadius: 20,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    paddingVertical: Padding.p_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
  searchBarIcon: {
    height: 152,
    paddingHorizontal: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_3xs,
  },
  listOfDoctors: {
    color: Color.gray3,
    width: 230,
    textAlign: "left",
    fontSize: FontSize.h5_size,
  },
  listOfDoctorsWrapper: {
    paddingTop: Padding.p_3xs,
    paddingHorizontal: Padding.p_3xs,
  },
  basedOnRating: {
    lineHeight: 14,
    color: Color.labelColorsLCLPrimary,
    fontFamily: FontFamily.pxRegular,
    fontSize: FontSize.pixells_size,
    textAlign: "left",
  },
  basedOnRatingWrapper: {
    paddingBottom: Padding.p_3xs,
    paddingHorizontal: Padding.p_3xs,
  },
  title1: {
    fontFamily: FontFamily.h5,
    fontWeight: "600",
    fontSize: FontSize.h5_size,
  },
  title2: {
    marginTop: 4,
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.pxRegular,
  },
  vectorIcon: {
    width: 20,
    height: 20,
  },
  fluentstar20Filled: {
    backgroundColor: Color.chocolate,
    padding: Padding.p_7xs,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  rating: {
    color: Color.gray2,
    fontFamily: FontFamily.pxRegular,
    textAlign: "left",
  },
  title3: {
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.h5,
    fontWeight: "600",
  },
  ratingParent: {
    marginLeft: 4,
  },
  fluentstar20FilledParent: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  icon1: {
    width: 80,
    height: 80,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  vectorIcon1: {
    width: 16,
    height: 16,
  },
  mondayDec23: {
    marginLeft: 8,
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.h5,
    fontWeight: "600",
  },
  vectorParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameContainer: {
    backgroundColor: Color.aliceblue,
    padding: Padding.p_base,
    borderRadius: Border.br_base,
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  bookDoctor: {
    lineHeight: 18,
    color: Color.systemBackgroundsSBLPrimary,
    fontFamily: FontFamily.pxRegular,
    fontSize: FontSize.h5_size,
    textAlign: "center",
  },
  bookDoctorWrapper: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.orange,
    paddingHorizontal: Padding.p_mid,
    paddingVertical: Padding.p_smi,
    alignSelf: "center",
    minWidth: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  appointment: {
    shadowColor: "rgba(0, 0, 0, 0.11)",
    backgroundColor: Color.gray_400,
    padding: Padding.p_base,
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    alignItems: "center",
  },
  appointmentWrapper: {
    alignSelf: "stretch",
  },
  appointment1: {
    shadowColor: "rgba(0, 0, 0, 0.11)",
    backgroundColor: Color.gray_400,
    padding: Padding.p_base,
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    alignItems: "center",
  },
  appointmentContainer: {
    marginTop: 14,
    alignSelf: "stretch",
  },
  appointments: {
    paddingBottom: 34,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
  },
  frame: {
    alignSelf: "stretch",
    flex: 1,
  },
  doctorsList: {
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
});

export default DoctorsList;
