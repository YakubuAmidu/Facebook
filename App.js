/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 // import React from 'react';
 // import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
 //
 // const facebook = () => {
 //   return (
 //     <View style={styles.container}>
 //     <Text style={styles.textStyle}>facebook</Text>
 //     <TextInput style={styles.emailStyle} placeholder="Email"></TextInput>
 //     <TextInput style={styles.emailStyle} placeholder="password"></TextInput>
 //     </View>
 //     );
 // };
 //
 // const styles = StyleSheet.create({
 //   container: {
 //     flex: 1,
 //     backgroundColor: '#43609C',
 //     justifyContent: 'center',
 //     alignItems: 'center',
 //     paddingRight: 20,
 //     paddingLeft: 20
 //   },
 //   textStyle: {
 //    fontSize: 50,
 //    marginBottom: 60,
 //    color: '#fff',
 //    fontWeight: 'bold'
 //   },
 //   emailStyle: {
 //     backgroundColor: '#fff',
 //     width: '100%',
 //     paddingTop: 15,
 //     paddingBottom: 15,
 //     paddingLeft: 10,
 //     marginTop: 20,
 //   }
 //   })
 //
 // export default facebook;

import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const LogIn = () => {
return (
  <View style={styles.container}>
<Text style={styles.textStyle}>Facebook</Text>
<TextInput style={styles.textInputStyle} placeholder="Email"></TextInput>
<TextInput placeholder="Password"></TextInput>
  </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
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
  }
  })

export default LogIn;
