import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import  Icon  from 'react-native-vector-icons/Ionicons'
import { useAppSelector } from '../app/hooks'
import { styles } from '../theme/appTheme'

export const SettingsScreen = () => {

    const auth  = useAppSelector( state => state.auth );

    const { top } = useSafeAreaInsets();

    return (
        <View
            style={{
                marginTop: top,
                paddingHorizontal: 20,
                paddingTop: 10,
                flex: 1,
                backgroundColor: 'white'
            }}
        >
            <Text style={styles.title}>
                Settings Screen 
            </Text>
            <View>
                <Text>
                    {JSON.stringify(auth, null, 3)}
                </Text>
            </View>

            {
                auth.favoriteIcon && 
                (
                    <Icon
                        name = {auth.favoriteIcon}
                        size={60}
                    />
                )
            }

        </View>
    )
}
