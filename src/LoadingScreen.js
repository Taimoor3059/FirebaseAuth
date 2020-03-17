import React from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import * as firebase from "firebase";






export default class LoadingScreen extends React.Component {

  //check if the user is authenticated or not below
  componentDidMount() {
    firebase.auth().onAuthStateChanged( (authenticate) => {
      if (authenticate) {
        this.props.navigation.navigate("Home")
      } else {
        this.props.navigation.navigate("signin")
      }
    } )
  }

  render() {
    return (
      <View>
        <ActivityIndicator size="large" />
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
