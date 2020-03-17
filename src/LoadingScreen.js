import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';





export default class LoadingScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Sign In</Text>
        <Button
        title="signin"
        onPress={() => this.props.navigation.navigate('signin')}
      />
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
