type LoginPayload = {
    username: string,
}

interface Login {
    type: 'login',
    payload: LoginPayload
}

interface Logout {
    type: 'logout',
}

export type AuthAction = 
    | Login
    | Logout
;