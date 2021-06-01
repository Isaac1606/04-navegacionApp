import { AuthAction } from '../actions/authActions';

const login = ( username: string ) : AuthAction => ({
    type: 'login',
    payload: {
        username
    }
});

const signIn = () : AuthAction => ({
    type: 'signIn',
});

const changeFavIcon = (iconName : string) : AuthAction => ({
    type: 'changeFavIcon',
    payload: {
        iconName
    }
});

const logout = () : AuthAction => ({
    type: 'logout',
});

const changeUsername = (username: string) : AuthAction => ({
    type: 'changeUsername',
    payload: username
});

export { 
    login,
    signIn,
    changeFavIcon,
    logout,
    changeUsername
}