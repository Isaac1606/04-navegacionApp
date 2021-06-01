import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { colores, styles } from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { login } from '../redux/services/auth';


export const Tab1Screen = () => {
    
    const { top } = useSafeAreaInsets();

    const { isLoggedIn, username }  = useAppSelector( state => state.auth );
    
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(login('Isaac'));
        return () => {
            
        }
    }, [])

    // dispatch(login('Isaac'));

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
            <Text>
                { isLoggedIn.toString() }
                { username }
            </Text>
        </View>
    )
}
