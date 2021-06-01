import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { logout, signIn } from '../redux/services/authServices';
import { styles } from '../theme/appTheme';


export const ContactsScreen = () => {

    const { isLoggedIn } = useAppSelector( state => state.auth );

    const dispatch = useAppDispatch();

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                ContactsScreen
            </Text>
            {
                !isLoggedIn ?
                    <Button
                        title="SignIn"
                        onPress={() => { dispatch(signIn()) }}
                    />
                :
                    <Button
                        title="Logout"
                        onPress={() => { dispatch(logout()) }}
                    />
            }
        </View>
    )
}
