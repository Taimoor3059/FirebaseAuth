import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TouchableOpacity  } from 'react-native';
import * as firebase from "firebase";
import { Form, Item, Input, Label, Button } from "native-base"




export default class SigninScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password:""
    }
  }
  render() {
    return (
      <KeyboardAvoidingView>
        <View style={styles.logoContainer}>
          <Image
          source={require('../assets/logo.png')} 
          />
          <Text>hello world</Text>
        </View>
        <Form style={styles.form}>

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

        </Form>
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
    marginBottom: 100
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
  }
});
