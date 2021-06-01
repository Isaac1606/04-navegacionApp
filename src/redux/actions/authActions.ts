// Payload de las actions (solo si el payload tiene mas de un campo)
type LoginPayload = {
    username: string,
}

type ChangeFavIconPayload = {
    iconName : string
}

// Actions
interface Login {
    type: 'login',
    payload: LoginPayload
}

interface Logout {
    type: 'logout',
}

interface SignIn { 
    type: 'signIn',
}

interface ChangeFavIcon {
    type: 'changeFavIcon',
    payload: ChangeFavIconPayload
}

interface ChangeUsername {
    type: 'changeUsername',
    payload: string
}

// Action
export type AuthAction = 
    | Login
    | Logout
    | SignIn
    | ChangeFavIcon
    | ChangeUsername
;