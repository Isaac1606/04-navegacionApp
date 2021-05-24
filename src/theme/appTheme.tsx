import { StyleSheet } from "react-native";

export const colores = {
    primary: '#5856D6',
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,

    },
    title: {
        fontSize: 20,
        marginBottom: 10,
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginTop: 10,
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 100,
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 15,
    }, 
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50,
        alignItems: 'flex-start',
    },
    menuBoton: {
      marginVertical: 10,  
    },
    menuTexto: {
        fontSize: 20,
    },
});