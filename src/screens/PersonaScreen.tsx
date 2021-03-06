import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useAppDispatch } from '../app/hooks';
import { RootStackParams } from '../navigator/StackNavigator';
import { changeUsername } from '../redux/services/authServices';
import { styles } from '../theme/appTheme';

// Las props heredan de las props tipo de navegador que en este caso es Stack
// Como primer argumento se indica el paramList 
// como segundo argumento el name con el que se encuentra en la paramList
interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{};

export const PersonaScreen = ( {route, navigation }: Props ) => {

    const params = route.params;

    const dispatch = useAppDispatch();

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })

        dispatch(changeUsername(params.nombre));

        return () => {
            
        }
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {
                    JSON.stringify(params,null,3)
                }
            </Text>
        </View>
    )
}
