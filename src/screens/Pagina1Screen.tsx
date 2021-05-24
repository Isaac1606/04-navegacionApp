import { DrawerScreenProps } from '@react-navigation/drawer';
// import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Button, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native';
import { colores, styles } from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';

// Heredamos de las propiedades del StackNavigationScreen 
// interface Props extends StackScreenProps<any,any>{};

interface Props extends DrawerScreenProps<any,any>{};

// De las props nos interesa navigation asi que lo desestruturamos de las props
export const Pagina1Screen = ( {navigation}: Props ) => {

    const { width, height } = useWindowDimensions();

    useEffect(() => {
        if(width > height)
        {
        navigation.setOptions({
            headerLeft: () => 
                (<TouchableOpacity
                    style={{marginLeft:5}}
                    onPress={() => navigation.toggleDrawer() }  
                    >
                        <Icon name="menu-outline" size={45} color={colores.primary}/>
                    </TouchableOpacity>
                )
            })
        }
        else {}
    }, [])
    
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                Pagina1Screen
            </Text>

            <Button
                title="Ir pagina 2"
                onPress={()=> navigation.navigate('Pagina2Screen')}
            />

            <Text
                style={{
                    marginVertical: 20,
                    fontSize: 18,
                    marginLeft: 5
                }}
            >
                Navegar con argumentos
            </Text>

            <View style={{ flexDirection: 'row' }}>    
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6'
                    }
                    }
                    onPress={()=> navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro'
                    })}
                >
                    <View>
                        <Text style={styles.botonGrandeTexto}>
                            Pedro
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#FF9427'
                    }}
                    onPress={()=> navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Maria'
                    })}
                >
                    <View>
                        <Text style={styles.botonGrandeTexto}>
                            Maria
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
