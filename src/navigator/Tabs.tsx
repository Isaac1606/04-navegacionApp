import React from 'react'; // Se debe de importar React

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';

export const Tabs = () => {
    return Platform.OS === 'ios'
           ? <TabsIOS/>
           : <TabsAndroid/>
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={true}

            barStyle={{ // // Opciones de la barra de tab para MaterialBottomTab
                backgroundColor: colores.primary
            }}

            // Para personalizar de mejor forma los label
            screenOptions=
            { // Indicamos que se espera algo de Javascript
              // De las props destructuramos route
                ({ route }) => ({ // Indicamos que se retorna un objeto literal
  
                    // Propiedad tabBarIcon que necesita un JSX
                    tabBarIcon: ({color, focused}) => {
  
                        let iconName: string = '';
  
                        switch( route.name ){
                            case 'Tab1Screen':
                                iconName = 'T1'
                            break;
  
                            case 'Tab2Screen':
                                iconName = 'T2'
                            break;
  
                            case 'StackNavigator':
                                iconName = 'St'
                            break;
                        }
                        return (
                            <Text 
                                style={{color}}
                            >
                                {iconName}
                            </Text>
                        )
                    },
                })
            }
        >
            <BottomTabAndroid.Screen name="Tab1Screen" options={{title: 'Tab1' }} component={Tab1Screen} />
            <BottomTabAndroid.Screen name="Tab2Screen" options={{title: 'Tab2'}} component={TopTabNavigator} />
            <BottomTabAndroid.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
      </BottomTabAndroid.Navigator>
    );
}



const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
    return (
    <BottomTabIOS.Navigator
        sceneContainerStyle={{ // Opciones para el container de los tab
            backgroundColor: 'white'
        }}

        tabBarOptions={{ // Opciones de la barra de tab
            activeTintColor: colores.primary, // coloca un color al tab Activo
            style: {
                borderTopColor: colores.primary, // color de la linea del tab
                borderTopWidth: 0, // Para desaparecer la linea del tab
                elevation: 0,
            },
            labelStyle: { // Para modificar los label del tab
                fontSize: 16
            }
        }}

        // Para personalizar de mejor forma los label
        screenOptions=
        { // Indicamos que se espera algo de Javascript
            // De las props destructuramos route
            ({ route }) => ({ // Indicamos que se retorna un objeto literal

                // Propiedad tabBarIcon que necesita un JSX
                tabBarIcon: ({color, focused, size}) => {

                    let iconName: string = '';

                    switch( route.name ){
                        case 'Tab1Screen':
                            iconName = 'T1'
                        break;

                        case 'Tab2Screen':
                            iconName = 'T2'
                        break;

                        case 'StackNavigator':
                            iconName = 'St'
                        break;
                    }
                    return (
                            <Text 
                                style={{color}}
                            >
                                {iconName}
                            </Text>
                            )
                },
            })
        }
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{title: 'Tab1' }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{title: 'Tab2'}} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}