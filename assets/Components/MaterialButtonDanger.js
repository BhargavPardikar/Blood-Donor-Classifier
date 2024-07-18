import React, { Component,useState } from "react";
import { StyleSheet, Button,TouchableOpacity,View, Text } from "react-native";

const MaterialButtonDanger = ({navigation})=>{
  const handleGetStarted = ({}) => {
    // Navigate to OTP Verification screen
    navigation.navigate('OTPVerificationScreen');
  };
  
  return (
    <View>
    <Button  title = "Get Started" style={[styles.container,styles.getStarted] } onPress={handleGetStarted}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F44336",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 11,
    elevation: 11,
    minWidth: 88,
    paddingLeft: 17,
    paddingRight: 16
  },
  getStarted: {
    color: "#fff",
    fontSize: 14,
  }
});

export default MaterialButtonDanger;
