import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend 1', age: 12 },
    { name: 'Friend 2', age: 15 },
    { name: 'Friend 3', age: 17 },
    { name: 'Friend 4', age: 19 },
    { name: 'Friend 5', age: 21 },
    { name: 'Friend 6', age: 23 },
    { name: 'Friend 7', age: 25 },
    { name: 'Friend 8', age: 27 },
    { name: 'Friend 9', age: 29 },
    { name: 'Friend 10', age: 31 },
  ]

  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      KeyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
      }} />
  )
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 22,
    marginVertical: 25,
  }
})

export default ListScreen;