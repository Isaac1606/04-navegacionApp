import 'react-native-gesture-handler'; // Debe de estar antes de la importacion de React

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Navigationcontainer
import { StackNavigator } from './src/navigator/StackNavigator'; // StackNavigator
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer> 
          {/* <StackNavigator/> */} 
          {/* <MenuLateralBasico/>  */}
          {/* Como el StackNavigator se encuentra encapsulado dentro del Drawer ya no es necesario colocarlo */}
          <MenuLateral/>
      </NavigationContainer>
    </Provider>
  )
}

export default App;
