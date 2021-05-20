import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

// Heredamos de las propiedades del StackNavigationScreen 
interface Props extends StackScreenProps<any,any>{  };

// De las props nos interesa navigation asi que lo desestruturamos de las props
export const Pagina1Screen = ( {navigation}: Props ) => {
    
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                Pagina1Screen
            </Text>

            <Button
                title="Ir pgaina 2"
                onPress={()=> navigation.navigate('Pagina2Screen')}
            />
        </View>
    )
}
