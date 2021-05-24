import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    // Solo se requiere que se cuide la parte de arriba
    const { top:paddingTop } = useSafeAreaInsets();

    return (
        <Tab.Navigator
            // Le indicamos que coloque la separacion pertinente
            style={{paddingTop}}

             // Para personalizar de mejor forma los label
            sceneContainerStyle={{
                backgroundColor:'white'
            }}

            // Opciones de la barra de tab
            tabBarOptions={{
                pressColor: colores.primary, // cambia el color cuando se preciona un elemento del tab
                showIcon: true, // Para permitir colocar iconos
                indicatorStyle: { // Para la barrita que aparece debajo del label actual
                    backgroundColor: colores.primary
                },
                style: { // Para la linea que aparece debajo de la barrita 
                    shadowColor: 'transparent',
                    elevation: 0,
                },
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
                            case 'Chat':
                                iconName = 'chatbubbles-outline'
                            break;

                            case 'Contacts':
                                iconName = 'people-outline'
                            break;

                            case 'Albums':
                                iconName = 'albums-outline'
                            break;
                        }
                        return (
                            <Text 
                                style={{color}}
                            >
                                <Icon name={iconName} size={20} color={color}/>
                            </Text>
                            )
                    },
                })
            }
        >
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Contacts" component={ContactsScreen} />
        <Tab.Screen name="Albums" component={AlbumsScreen} />
        </Tab.Navigator>
    );
}