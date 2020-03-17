import * as React from 'react';
import { Button, View, Text } from 'react-native';




export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>HomeScreen!!!!</Text>
        <Button
        title="signin"
        onPress={() => this.props.navigation.navigate('signin')}
      />
      </View>
    );
  }
  
}

