import React from 'react'; // Se debe de importar React
import { createStackNavigator } from '@react-navigation/stack'; // Stack Navigator
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator> 
      <Stack.Screen name="Pagina1Screen" component={Pagina1Screen} /> 
      <Stack.Screen name="Pagina2Screen" component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" component={Pagina3Screen} />
    </Stack.Navigator>
  );
}