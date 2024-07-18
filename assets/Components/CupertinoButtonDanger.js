import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

function CupertinoButtonDanger(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <View style={styles.loremIpsumStack}>
        <Text style={styles.loremIpsum}></Text>
        <Text style={styles.verify}>VERIFY</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(223,16,0,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 46,
    paddingLeft: 16,
    paddingRight: 16
  },
  loremIpsum: {
    top: 7,
    left: 20,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  verify: {
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    left: 0,
    top: 0
  },
  loremIpsumStack: {
    width: 46,
    height: 17,
    marginLeft: 27,
    marginTop: 14
  }
});

export default CupertinoButtonDanger;
