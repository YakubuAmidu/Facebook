/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const LogIn = () => {
return (
  <View style={styles.container}>
<Text style={styles.textStyle}>facebook</Text>
<TextInput style={styles.textInputStyle}
placeholder="Email"></TextInput>
<TextInput style={styles.textInputStyle}
placeholder="Password"
secureTextEntry={true}></TextInput>
<Text style={styles.textStyle2}>Log In</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 50
  },
  container: {
    flex: 1,
    backgroundColor: "#43609C",
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  textInputStyle: {
    backgroundColor: '#fff',
    width: '100%',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    fontSize: 20,
    marginBottom: 10
  }
  })

export default LogIn;
