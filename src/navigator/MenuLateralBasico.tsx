import React from 'react'; // Se debe de importar React
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const  MenuLateralBasico = () => {
  
    const { width, height } = useWindowDimensions();
    
    return (
        <Drawer.Navigator
        // Para que el menu se muestre de derecha a izquierda
        // drawerPosition="right"
            drawerType={ width > height ? "permanent" : "front" } 
        >
            {/* Dentro del Drawer Navigator se colocan los StackNavigator y otros componentes  */}
            {/* title cambia como se despliega el nombre del componente dentro del drawer */}
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
  );
}