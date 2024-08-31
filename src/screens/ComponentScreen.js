import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
  const name = 'Rafli';
  const greeting = 'Hello Morning ';
  // const greeting = <Text style={styles.subTextStyle}>My Name is {name}</Text>;

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.subTextStyle}>{greeting}{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subTextStyle: {
    fontSize: 20,
  }
})

export default ComponentScreen;