import React from 'react'; // Se debe de importar React
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const  MenuLateral = () => {
  
    const { width, height } = useWindowDimensions();
    
    return (
        <Drawer.Navigator
        // Para que el menu se muestre de derecha a izquierda
        // drawerPosition="right"
            drawerType={ width > height ? "permanent" : "front" }
            drawerContent={ (props) => (<MenuInterno { ...props } />) } 
        >
            <Drawer.Screen name="Tabs" component={Tabs} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
  );
}

const MenuInterno = ( {navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {
    return (
        <DrawerContentScrollView>

            {/* Parte del avatar */}
            <View style={styles.avatarContainer}>
                {/* Las imagenes tienen 0 de ancho y 0 de alto por defecto modificar con estilos  */}
                <Image
                    source={{
                        uri: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
                    }}
                    style={styles.avatar}
                />
            </View>

            {/* Opciones de Menú */}
            <View style={styles.menuContainer}>
                <TouchableOpacity 
                    style={styles.menuBoton}
                    onPress={()=> navigation.navigate('Tabs')}
                    >
                    <Text style={styles.menuTexto}>
                        Navegación
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.menuBoton}
                    onPress={()=> navigation.navigate('SettingsScreen')}
                    >
                    <Text style={styles.menuTexto}>
                        Ajustes
                    </Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    )
}