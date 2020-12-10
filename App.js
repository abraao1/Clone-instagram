import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feed from './src/pages/Feed';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'

import PreLoad from './src/PreLoad';

import SignIn from './src/SignIn';
import SignUp from './src/SignUp';

const Stack = createStackNavigator()

export default function App() {
  return (

    <View style={style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PreLoad"
        screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="PreLoad" component={PreLoad} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />   
          <Stack.Screen name="Feed" component={Feed} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  
  );
}

const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff' 
    }
  }
)


