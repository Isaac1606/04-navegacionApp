import React from 'react'; // Se debe de importar React
import { createStackNavigator } from '@react-navigation/stack'; // Stack Navigator
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Pagina2Screen" // por si se quere comenzar por otra pantalla
      // screenOptions es una propiedad que sirve en el stackNavigator para darle un estilo comun 
      // a las pantallas que incluyan dentro de este.
      // aunque deben ser cosas como background, etc, ya que es para la pantalla como tal,
      // cosas como tipo de texto, tamaño, etc deben ser definidas en lugares mas especificos
      screenOptions={{
        headerStyle:{
          elevation: 0, // elevation para android
          shadowColor: 'transparent', // shadowColor para ios
        },
        cardStyle: {
          backgroundColor: 'white',
        }
      }}
    > 

      <Stack.Screen name="Pagina1Screen" options={{title:"Página 1"}} component={Pagina1Screen} /> 
      <Stack.Screen name="Pagina2Screen" options={{title:"Página 2"}} component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{title:"Página 3"}} component={Pagina3Screen} />
    </Stack.Navigator>
  );
}