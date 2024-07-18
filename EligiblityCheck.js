import React, { useState } from 'react';
import { View, Text, Button, TextInput,StyleSheet,TouchableOpacity } from 'react-native';
import axios from 'axios';

const EligibilityCheck = () =>
  {
  const [Recency, setRecency] = useState('');
  const [Frequency, setFrequency] = useState('');
  const [Monetary, setMonetary] = useState('');
  const [Time, setTime] = useState('');



  const [prediction, setPrediction] = useState('');

  const handlePrediction = async () => {
    const apiUrl = 'http://127.0.0.1:5000/predict';

    const requestData = {
      Recency: parseInt(Recency),
      Frequency: parseInt(Frequency),
      Monetary:parseInt(Monetary),
      Time:parseInt(Time)
    };

    try {
      const response = await axios.post(apiUrl, requestData);

      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }

      const result = response.data;
      const prediction = result.prediction;

      setPrediction(prediction);
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };
  return (
    <View>
      <Text style={styles.label}>Recency (months):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={Recency}
        onChangeText={(text) => setRecency(text)}
      />
      <Text style={styles.label}>Frequency (times):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={Frequency}
        onChangeText={(text) => setFrequency(text)}
      />

      <Text style={styles.label}>Monetary (c.c. blood):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={Monetary}
        onChangeText={(text) => setMonetary(text)}
      />

      <Text style={styles.label}>Time (months):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={Time}
        onChangeText={(text) => setTime(text)}
      />
      <View>
      <TouchableOpacity
        onPress={handlePrediction}
        style={styles.prediction}
      >
        <Text style={styles.text}>Make Prediction</Text>
      </TouchableOpacity>
      </View>
      {prediction !== null && (
        <Text >
          
          {prediction === 1
            ? "The individual is likely to donate blood."
            : "The individual is not likely to donate blood."}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom:500
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
    marginLeft:10
  },
  input: {
    height: 40,
    borderColor: 'red',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 5,
    borderRadius:20
  },
  result: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlignVertical:'bottom',
    paddingVertical:200,
    textAlign:'center',
    color:'green'
  },
  text:{
      textAlign:'center',
      color:'white',
      fontWeight:'bold',
  },
  prediction:{
    padding:20,
    paddingHorizontal:20,
    backgroundColor:'red',
    borderRadius:20,
    marginBottom:30,
    marginTop:40,
  },
});

export default EligibilityCheck;




