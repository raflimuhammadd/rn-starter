import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

const CounterScreen = () => {
  const [currentCounter, setCounter] = useState(0);

  return (
    <View>
      <Button title="Increase" onPress={() => {
        // Don't change directly (change via usestate)
        // counter--;
        setCounter(currentCounter + 1);
      }} />
      <Button title="Decrease" onPress={() => {
        // Don't change directly (change via usestate)
        // counter--;
        setCounter(currentCounter - 1);
      }} />
      <Text>Current Count: {currentCounter} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22
  }
});

export default CounterScreen;