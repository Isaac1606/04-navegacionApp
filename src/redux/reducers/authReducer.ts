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
        default:
            return state;
    }
}