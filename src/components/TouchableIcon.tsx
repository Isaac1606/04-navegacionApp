import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useAppDispatch } from '../app/hooks'
import { changeFavIcon } from '../redux/services/authServices'
import { colores } from '../theme/appTheme'

interface Props { 
    iconName: string
}

export const TouchableIcon = ( { iconName }: Props ) => {

    const dispatch = useAppDispatch();

    return (
        <TouchableOpacity
            onPress = { () => dispatch(changeFavIcon(iconName)) }
        >
            <Icon 
                name={iconName} 
                size={60} 
                color={colores.primary}
            />
        </TouchableOpacity>
    )
}
