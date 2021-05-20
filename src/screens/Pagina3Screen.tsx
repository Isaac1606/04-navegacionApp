import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pagina3Screen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                Pagina3Screen
            </Text>

            <Button
                title = " Regresar"
                onPress={() => navigation.pop()} 
            />
            <Button
                title = " Ir a página 1"
                onPress={() => navigation.popToTop()} 
            />
        </View>
    )
}