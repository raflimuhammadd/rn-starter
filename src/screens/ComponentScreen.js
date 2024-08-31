import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
  const greeting = <Text style={styles.subTextStyle}>My Name is Rafli</Text>;

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      {greeting}
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