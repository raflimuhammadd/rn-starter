import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>This is Component Screen!</Text>
      <Text>Hi There!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  }
})

export default ComponentScreen;