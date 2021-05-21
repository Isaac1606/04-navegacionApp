import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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

            <Text>
                Navegar con argumentos
            </Text>

            <View style={{ flexDirection: 'row' }}>    
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6'
                    }
                    }
                    onPress={()=> navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro'
                    })}
                >
                    <View>
                        <Text style={styles.botonGrandeTexto}>
                            Pedro
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#FF9427'
                    }}
                    onPress={()=> navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Maria'
                    })}
                >
                    <View>
                        <Text style={styles.botonGrandeTexto}>
                            Maria
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
