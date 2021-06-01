import { AuthState, authInitialState } from '../states/authState';
import { AuthAction } from '../actions/authActions';

export const authReducer = ( state: AuthState = authInitialState, action: AuthAction ) : AuthState => {
    switch(action.type){
        case 'login': 
            return {
                ...state,
                isLoggedIn: true,
                username: action.payload.username
            }
        case 'signIn':
            return{
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
        case 'changeFavIcon': 
            return {
                ...state,
                favoriteIcon: action.payload.iconName
            }
        case 'logout':
            return {
                ...authInitialState,
            }
        case 'changeUsername':
            return {
                ...state,
                username: action.payload
            }
        default:
            return state;
    }
}