import React from 'react';
import { Text, View } from 'react-native';
import { colores, styles } from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Tab1Screen = () => {
    
    const { top } = useSafeAreaInsets();

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: top, 
            flex: 1,
            backgroundColor: 'white',
            marginHorizontal: 0,
            paddingHorizontal: 20         
        }}>
            <Text style={styles.title}>
                Iconos
            </Text>
            <Icon name="airplane-outline" size={60} color={colores.primary}/>
        </View>
    )
}
