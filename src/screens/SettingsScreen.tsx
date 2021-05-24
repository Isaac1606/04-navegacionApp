import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme'

export const SettingsScreen = () => {
    return (
        <SafeAreaView
            style={{
                ...styles.globalMargin,
                marginTop: 10
            }}
        >
            <View>
                <Text style={styles.title}>
                    Settings Screen 
                </Text>
            </View>
        </SafeAreaView>
    )
}
