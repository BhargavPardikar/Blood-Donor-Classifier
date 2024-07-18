// OTPVerificationScreen.js
import React, { useState } from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
const OTPVerificationScreen = ({ navigation }) => {
  const [otp, setOtp] = useState('');

  const handleVerification = () => {
    // Implement OTP verification logic here
    // If OTP is valid, navigate to the user details screen
    navigation.navigate('Registration');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Enter OTP:</Text>
      <OTPInputView
        pinCount={5}
        code={otp}
        onCodeChanged={(code) => setOtp(code)}
      />
      <Button title="Verify OTP" style={{flex:1,alignItems:'center'}} onPress={handleVerification} />
    </View>
  );
};
export default OTPVerificationScreen;

const styles = StyleSheet.create({

})