import { AuthAction } from "../actions/authActions";

const login = (username: string): AuthAction => ({
    type: 'login',
    payload: {
        username
    }
})

export { 
    login
}