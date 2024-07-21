import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

export default function DetailScreen({ route }) {
  const { item } = route.params;


  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    color: 'orange',
  },
  backButton: {
    marginLeft: 15,
    color: 'orange',
    fontSize: 18,
  },
});
