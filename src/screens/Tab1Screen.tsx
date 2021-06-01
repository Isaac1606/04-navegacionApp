import React from 'react';
import { Text, View } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';


export const Tab1Screen = () => {
    
    const { top } = useSafeAreaInsets();

    const iconNames = [
        "airplane-outline",
        "attach-outline",
        "bonfire-outline",
        "calculator-outline",
        "chatbubble-ellipses-outline",
        "images-outline",
        "leaf-outline",
    ]

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

            <Text>
                {
                    iconNames.map( name => 
                        (
                            <TouchableIcon key={name} iconName={name}/>
                        ) 
                    )
                }
            </Text>
        </View>
    )
}
