import React from 'react'; // Se debe de importar React
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

export const  MenuLateralBasico = () =>{
  return (
    <Drawer.Navigator>
      {/* Dentro del Drawer Navigator se colocan los StackNavigator y otros componentes  */}
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Article" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}