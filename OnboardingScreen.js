// OnboardingScreen.js
import React from 'react';
import { StyleSheet,View, Text, Button,Image, TouchableOpacity} from 'react-native'


const OnboardingScreen = ({navigation}) => {
  const handleGetStarted = ({}) => {
    // Navigate to OTP Verification screen
    navigation.navigate('PhoneRegistration');
  };
  return (
  <View style={styles.container}>
    <View style={styles.loremIpsumStack}>
      <Text style={styles.loremIpsum}></Text>
      <Text style={styles.loremIpsum1}>
        Be a Lifesaver, Donate Blood Today!
      </Text>
    </View>
      <View style={styles.imageRow}>
    <Image
        source={require("./assets/images/onBoardinglogo.jpeg")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View >
    <View>
      <TouchableOpacity onPress={handleGetStarted} style={styles.button}>
        <Text style={styles.getStarted}> Donate </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
    
};
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,1)"
  },
  loremIpsum: {
    top: 0,
    left: 30,
    position: "absolute",
    fontFamily: "",
    color: "#121212"
  },
  loremIpsum1: {
    top: 0,
    position: "absolute",
    fontFamily: "",
    color: "rgba(240,5,5,1)",
    height: 45,
    width: 326,
    fontSize: 18,
    textAlign: "center",
    letterSpacing: 2,
    left: 0
  },
  loremIpsumStack: {
    width: 326,
    height: 45,
    marginLeft: 30,
    marginTop: 506
  },
  image: {
    width: 450,
    height: 280,
    marginTop: 63,
    justifyContent:'center'

  },
  loremIpsum2: {
    fontFamily:"",
    color: "#121212",
    height: 85,
    width: 382,
    fontSize: 20,
    marginLeft: 85
  },
  imageRow: {
    height: 339,
    flexDirection: "row",
    flex: 1,
    marginRight: -450,
    marginLeft: -390,
    marginTop: 100
  },
  materialButtonDanger: {
    height: 36,
    width: 218,
    marginLeft:280,
    marginRight:90,
    marginTop: 620,
    marginBottom:150
  },
  button:{
    backgroundColor: "#F44336",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 100,
    marginTop:600,
    marginRight:110,
    height:60,
    width:180,
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
    fontSize: 25,
    fontWeight:'500'
    }
  }
);



export default OnboardingScreen;
