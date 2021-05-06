import 'react-native-gesture-handler'; // Debe de estar antes de la importacion de React
import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // Navigationcontainer
import { StackNavigator } from './src/navigator/StackNavigator'; // StackNavigator

export const App = () => {
  return (
    <NavigationContainer> 
      <SafeAreaView> 
        <StackNavigator/> 
      </SafeAreaView>      
    </NavigationContainer>
  )
}

export default App;
