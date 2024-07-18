import {View, Text, TextInput,TouchableOpacity,StyleSheet,Alert,Image} from 'react-native';
import React, {useRef,useState} from 'react';
import {FirebaseRecaptchaVerifierModal} from 'expo-firebase-recaptcha';
import { firebaseConfig } from './fireBaseConfig';
import firebase from 'firebase/compat/app';

const Otp = ({navigation}) =>{
   const [phoneNumber,setPhoneNumber] = useState('');
   const [code,setcode] = useState('');
   const [verificationId,setVerificationID] = useState(null);
   const recaptchaVerifier = useRef(null);

   const sendVerification = () => {
    
     const phoneProvider = new firebase.auth.PhoneAuthProvider();
     phoneProvider
          .verifyPhoneNumber(phoneNumber,recaptchaVerifier.current)
          .then(setVerificationID);
          setPhoneNumber('');

   };

   const confirCode = () => {
      const  credential  = firebase.auth.PhoneAuthProvider.credential(
          verificationId,
          code
      );
       firebase.auth().signInWithCredential(credential)
       .then(() => {
          setcode('');
        navigation.navigate('Registration')
       })
       .catch((error) =>{
          // show an alert in case of error
          alert(error)
       })
       
       

       }
       
       return(
        <View style={styles.container}>
          <FirebaseRecaptchaVerifierModal
            ref = {recaptchaVerifier}
            firebaseConfig={firebaseConfig}

          />
          <View style={styles.ImageRow}>
          <Image
             source={require("./assets/images/onBoardinglogo.jpeg")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          </View>
          <Text style = {styles.otpText}>
            Login using OTP

          </Text>
          <TextInput
            placeholder=' Enter Phone Number with country code'
            onChangeText={setPhoneNumber}
            keyboardType='phone-pad'
            autoCompleteType='tel'
            style={styles.textInput}
          />

          <TouchableOpacity style ={styles.sendVerification} onPress={sendVerification}>
            <Text style={styles.buttonText}>
              Send Verification
              </Text> 

          </TouchableOpacity>
          <TextInput
            placeholder='Confirm Code'
            onChangeText={setcode}
            keyboardType='number-pad'
            autoCompleteType='tel'
            style={styles.textInput}
          />
          <TouchableOpacity style ={styles.sendCode} onPress={confirCode}>
            <Text style={styles.buttonText}>
              Confirm Verification
              </Text>
              </TouchableOpacity>
        </View>
       )
   }


export default Otp;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"rgba(255,255,255,1)",
        alignItems:'center',
        justifyContent:'center',
        borderRadius:32,

    },
    textInput: {
        paddingTop:40,
        paddingBottom:20,
        paddingHorizontal:10,
        fontSize:20,
        borderBottomColor:'#fff',
        borderBottomWidth:20,
        marginBottom:20,
        textAlign:'center',
        color:'#000'

    },
    sendVerification:{
        padding:20,
        backgroundColor:'red',
        paddingHorizontal:50,
        borderRadius:10,
    },
    sendCode:{
        padding:20,
        paddingHorizontal:40,
        backgroundColor:'red',
        borderRadius:10,
        marginBottom:20,
    },
    buttonText:{
      textAlign:'center',
      color:'#fff',
      fontWeight:'bold',
    
    },
    otpText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#000',
        marginTop:300,
        backgroundColor:"white",
        width:365,
        height:105,
        textAlign:"center",
        textAlignVertical:"center"
    },
    ImageRow:{
      height: 339,
      flexDirection: "row",
      flex: 1,
      marginRight: -450,
      marginLeft: -450,
      marginTop: 5    
    },
    image: {
      width: 450,
      height: 280,
      marginTop: 30,
      justifyContent:'center',
      resizeMode:'contain'
  
    },
});