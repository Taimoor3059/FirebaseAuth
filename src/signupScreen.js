import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import * as firebase from "firebase";
import {Form, Input, Label, Button, Item} from 'native-base'



export default class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password:"",
      name:""
    }
  }

  signupUser = () => {
    
  }
  render() {
    return (
      <KeyboardAvoidingView
        behavior="position"
        enabled
        style={styles.container}
        >
          <View style={styles.logoContainer}>
            <Image
            source={require('../assets/logo.png')} 
            />
            <Text>hello world</Text>
          </View>
          <Form style={styles.form}>

          <Item floatingLabel>
              <Label>Name</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="name-phone-pad"
                onChangeText={name => this.setState({name})}
              />
            </Item>

            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={email => this.setState({email})}
              />
            </Item>

            <Item floatingLabel>
              <Label>password</Label>
              <Input
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={password => this.setState({password})}
              />
            </Item>
            <Button
              style={styles.button}
              full
              rounded
              onPress={ ()=>{
                this.signupUser(
                  this.state.name,
                  this.state.email,
                  this.state.password
                );
              } }
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </Button>

          </Form>
          <View style={styles.footer}>
            <Text>OR</Text>
            <TouchableOpacity
              onPress={ ()=> {
                this.props.navigation.navigate("signin")
              } }
            >
              <Text style={styles.tim}>already having an account ?</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100,
    height:20 
  },
  form: {
    padding: 20,
    width: "100%"
  },
  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  footer: {
    alignItems: "center"
  },
  tim: {
    padding:2,
    color: 'blue'
  }
});
