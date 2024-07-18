import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Registration1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.rect11Row}>
          <View style={styles.rect11}></View>
          <Text style={styles.fillDetails}>Fill Details</Text>
        </View>
      </View>
      <View style={styles.rect10}>
        <Text style={styles.firstName}>First Name</Text>
      </View>
      <View style={styles.rect3}>
        <Text style={styles.lastName}>Last Name</Text>
      </View>
      <View style={styles.rect4}>
        <Text style={styles.age}>Age</Text>
      </View>
      <View style={styles.rect5}>
        <View style={styles.dateOfBirthRow}>
          <Text style={styles.dateOfBirth}>Date of Birth</Text>
          <MaterialCommunityIconsIcon
            name="calendar-multiselect"
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>
        </View>
      </View>
      <View style={styles.rect6}>
        <View style={styles.bloodGroupRow}>
          <Text style={styles.bloodGroup}>Blood Group</Text>
          <EntypoIcon
            name="chevron-small-down"
            style={styles.icon}
          ></EntypoIcon>
        </View>
      </View>
      <View style={styles.rect7}>
        <View style={styles.sexRow}>
          <Text style={styles.sex}>Sex</Text>
          <EntypoIcon
            name="chevron-small-down"
            style={styles.icon3}
          ></EntypoIcon>
        </View>
      </View>
      <View style={styles.rect8}>
        <Text style={styles.loremIpsum}>Last Blood Donation Date</Text>
      </View>
      <View style={styles.icon4Stack}>
        <EntypoIcon name="circle" style={styles.icon4}></EntypoIcon>
        <Text style={styles.yes}>Yes</Text>
      </View>
      <View style={styles.rect9}>
        <Text style={styles.submit}>SUBMIT</Text>
      </View>
      <Text style={styles.loremIpsum2}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect1: {
    width: 368,
    height: 90,
    backgroundColor: "rgba(208,2,27,1)",
    flexDirection: "row",
    marginTop: 23,
    marginLeft: -8
  },
  rect11: {
    width: 14,
    height: 42,
    backgroundColor: "rgba(208,2,27,1)"
  },
  fillDetails: {
    fontFamily: "be-vietnam-pro-regular",
    color: "rgba(255,255,255,1)",
    height: 51,
    width: 177,
    fontSize: 30,
    marginLeft: 91,
    marginTop: 36
  },
  rect11Row: {
    height: 87,
    flexDirection: "row",
    flex: 1,
    marginRight: 78,
    marginLeft: 8,
    marginTop: 3
  },
  rect10: {
    width: 296,
    height: 38,
    backgroundColor: "#E6E6E6",
    borderRadius: 17,
    marginTop: 30,
    marginLeft: 30
  },
  firstName: {
    fontFamily: "trebuchet-ms-regular",
    color: "rgba(155,155,155,1)",
    height: 21,
    width: 116,
    fontSize: 18,
    marginTop: 8,
    marginLeft: 105
  },
  rect3: {
    width: 296,
    height: 38,
    backgroundColor: "#E6E6E6",
    borderRadius: 17,
    marginTop: 30,
    marginLeft: 30
  },
  lastName: {
    fontFamily: "trebuchet-ms-regular",
    color: "rgba(155,155,155,1)",
    height: 18,
    width: 104,
    fontSize: 18,
    marginTop: 7,
    marginLeft: 105
  },
  rect4: {
    width: 296,
    height: 38,
    backgroundColor: "#E6E6E6",
    borderRadius: 17,
    marginTop: 29,
    marginLeft: 30
  },
  age: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    height: 22,
    width: 41,
    fontSize: 18,
    marginTop: 8,
    marginLeft: 137
  },
  rect5: {
    width: 296,
    height: 38,
    backgroundColor: "#E6E6E6",
    borderRadius: 17,
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 30
  },
  dateOfBirth: {
    fontFamily: "trebuchet-ms-regular",
    color: "rgba(155,155,155,1)",
    height: 22,
    width: 111,
    fontSize: 18,
    marginTop: 3
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 26,
    height: 28,
    width: 26,
    marginLeft: 35
  },
  dateOfBirthRow: {
    height: 28,
    flexDirection: "row",
    flex: 1,
    marginRight: 13,
    marginLeft: 111,
    marginTop: 5
  },
  rect6: {
    width: 296,
    height: 38,
    backgroundColor: "#E6E6E6",
    borderRadius: 17,
    flexDirection: "row",
    marginTop: 31,
    marginLeft: 30
  },
  bloodGroup: {
    fontFamily: "trebuchet-ms-regular",
    color: "rgba(155,155,155,1)",
    height: 23,
    width: 111,
    fontSize: 18,
    marginTop: 7
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 32,
    height: 35,
    width: 32,
    marginLeft: 38
  },
  bloodGroupRow: {
    height: 35,
    flexDirection: "row",
    flex: 1,
    marginRight: 13,
    marginLeft: 102,
    marginTop: 2
  },
  rect7: {
    width: 296,
    height: 38,
    backgroundColor: "#E6E6E6",
    borderRadius: 17,
    flexDirection: "row",
    marginTop: 27,
    marginLeft: 30
  },
  sex: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    height: 27,
    width: 42,
    fontSize: 18,
    marginTop: 8
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 32,
    height: 35,
    width: 32,
    marginLeft: 73
  },
  sexRow: {
    height: 35,
    flexDirection: "row",
    flex: 1,
    marginRight: 13,
    marginLeft: 136
  },
  rect8: {
    width: 296,
    height: 38,
    backgroundColor: "#E6E6E6",
    borderRadius: 17,
    marginTop: 34,
    marginLeft: 30
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    height: 19,
    width: 210,
    fontSize: 18,
    marginTop: 10,
    marginLeft: 54
  },
  icon4: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 21
  },
  yes: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 0,
    width: 0,
    fontSize: 18
  },
  icon4Stack: {
    width: 21,
    height: 23,
    marginTop: -592
  },
  rect9: {
    width: 296,
    height: 43,
    backgroundColor: "rgba(208,2,27,1)",
    borderRadius: 17,
    marginTop: 610,
    marginLeft: 39
  },
  submit: {
    fontFamily: "be-vietnam-pro-700",
    color: "rgba(255,255,255,1)",
    height: 30,
    width: 152,
    letterSpacing: 3,
    fontSize: 25,
    marginTop: 7,
    marginLeft: 102
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 27,
    marginLeft: 154
  }
});

export default Registration1;
