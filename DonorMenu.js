import React from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity,Image } from 'react-native';

const DonorMenu = ({ navigation }) => {
  const navigateToEligibilityCheck = () => {
    navigation.navigate('EligibilityCheck');
  };

  const navigateToBloodBanks = () => {
    navigation.navigate('BloodBanks');
  };

  return (
    <View style={styles.container}>
      <View style={styles.ImageRow}>
          <Image
             source={require("./assets/images/onBoardinglogo.jpeg")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Donor Eligibility</Text>
      </View>
      <View>
      <TouchableOpacity style ={styles.buttonEligible}  onPress={navigateToEligibilityCheck}>
        <Text style={styles.buttonText}>
        Check Eligibility
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Background color
  },
  header: {
    fontSize: 50,
    marginBottom:600,
    fontWeight: 'bold',
    alignItems:'center'
  },
  buttonEligible: {
    padding:20,
    paddingHorizontal:40,
    backgroundColor:'red',
    borderRadius:10,
    marginBottom:30,
    marginTop:-50
  },
  buttonText:{
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
  
  },
  headerText: {
    fontSize:40,
    fontWeight: 'bold',
    color: 'red', // Text color of the header
    marginBottom:10,
    textAlign:'auto'
  },
  ImageRow:{
    height: 339,
    flexDirection: "row",
    flex: 1,
    marginRight: -450,
    marginLeft: -450,
    marginTop: 82    
  },
  image: {
    width: 450,
    height: 280,
    marginTop:150,
    justifyContent:'center',
    resizeMode:'contain'

  },
});

export default DonorMenu;
