
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/HomeScreen";
import signupScreen from './src/signupScreen';
import signinScreen from './src/SigninScreen';
import LoadingScreen from './src/LoadingScreen';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA7_iAKjbGfCej02sqDuB4RdYShoUi1CEQ",
  authDomain: "reactbootcamp-7b911.firebaseapp.com",
  databaseURL: "https://reactbootcamp-7b911.firebaseio.com",
  projectId: "reactbootcamp-7b911",
  storageBucket: "reactbootcamp-7b911.appspot.com",
  messagingSenderId: "325386629613",
  appId: "1:325386629613:web:afae973c009eb28f1977e4",
  measurementId: "G-VTG0CDRDTQ"
};

firebase.initializeApp(firebaseConfig);



const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="loading" component={LoadingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="signin" component={signinScreen} />
        <Stack.Screen name="signup" component={signupScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}



