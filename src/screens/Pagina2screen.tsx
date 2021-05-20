import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {

    // Se obtiene el navigator llamando al hook
    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: '' // Coloca el titulo de retorno por defecto del idioma del telefono
        })
        return () => {
            
        }
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                Pagina2Screen
            </Text>
            <Button
                title="Ir a pagina 3"
                onPress={() => navigator.navigate('Pagina3Screen')} // Se manda a llamar con el name registrado
            />
        </View>
    )
}