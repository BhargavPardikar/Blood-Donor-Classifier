import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";

function Otp(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/images/Screenshot_2023-08-23_202431.png")}
        resizeMode="cover"
        style={styles.image1}
      ></Image>
      <Text style={styles.loremIpsum}>
        We have sent you an OTP on your registered Mobile no. via SMS
      </Text>
      <View style={styles.iconRow}>
        <FeatherIcon name="droplet" style={styles.icon}></FeatherIcon>
        <FeatherIcon name="droplet" style={styles.icon1}></FeatherIcon>
        <FeatherIcon name="droplet" style={styles.icon2}></FeatherIcon>
        <FeatherIcon name="droplet" style={styles.icon3}></FeatherIcon>
      </View>
      <Text style={styles.resendOtp}>Resend OTP</Text>
      <Text style={styles.verify}>VERIFY</Text>
      <View style={styles.rect3}></View>
      <CupertinoButtonDanger
        style={styles.cupertinoButtonDanger}
      ></CupertinoButtonDanger>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image1: {
    width: 257,
    height: 268,
    borderRadius: 17,
    marginTop: 80,
    marginLeft: 51
  },
  loremIpsum: {
    fontFamily: "trebuchet-ms-regular",
    color: "#121212",
    height: 61,
    width: 335,
    fontSize: 16,
    textAlign: "center",
    marginTop: 18,
    marginLeft: 12
  },
  icon: {
    color: "rgba(208,2,27,1)",
    fontSize: 54
  },
  icon1: {
    color: "rgba(208,2,27,1)",
    fontSize: 54
  },
  icon2: {
    color: "rgba(208,2,27,1)",
    fontSize: 54
  },
  icon3: {
    color: "rgba(208,2,27,1)",
    fontSize: 54
  },
  iconRow: {
    height: 54,
    flexDirection: "row",
    marginTop: 34,
    marginLeft: 71,
    marginRight: 73
  },
  resendOtp: {
    fontFamily: "trebuchet-ms-regular",
    color: "#121212",
    height: 37,
    width: 135,
    fontSize: 25,
    marginTop: 21,
    marginLeft: 112
  },
  verify: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 19,
    width: 152,
    fontSize: 25,
    letterSpacing: 3,
    marginTop: 23,
    marginLeft: 125
  },
  rect3: {
    width: 290,
    height: 47,
    backgroundColor: "rgba(208,2,27,1)",
    borderRadius: 18,
    marginTop: 99,
    marginLeft: 480
  },
  cupertinoButtonDanger: {
    height: 44,
    width: 135,
    marginTop: -146,
    marginLeft: 113
  }
});

export default Otp;
