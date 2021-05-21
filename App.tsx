import 'react-native-gesture-handler'; // Debe de estar antes de la importacion de React

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Navigationcontainer
import { StackNavigator } from './src/navigator/StackNavigator'; // StackNavigator
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';

export const App = () => {
  return (
    <NavigationContainer> 
        {/* <StackNavigator/> */} 
        <MenuLateralBasico/> 
        {/* Como el StackNavigator se encuentra encapsulado dentro del Drawer ya no es necesario colocarlo */}
    </NavigationContainer>
  )
}

export default App;
