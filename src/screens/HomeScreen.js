import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Morning Rafli!</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
      />

      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />

      <Button
        title="Go to Image Screen"
        onPress={() => navigation.navigate('Image')}
      />

      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />

      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate('Color')}
      />

      <Button
        title="Go to Square Demo"
        onPress={() => navigation.navigate('Square')}
      />


      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
