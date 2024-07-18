// RegistrationScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const RegistrationScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');

  const handleRegistration = () => {
    // Handle user registration logic here
    // You can send the registration data to your backend or store it locally
    // For simplicity, we're just navigating back to the onboarding screen
    navigation.navigate('DonorMenu');
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Registration</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 8 }}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 8, marginTop: 8 }}
      />
      <TextInput
        placeholder="Blood Group"
        value={bloodGroup}
        onChangeText={(text) => setBloodGroup(text)}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 8, marginTop: 8 }}
      />
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

export default RegistrationScreen;
