// Como luce nuesto estado que maneja la autentificacion 
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado inicial de nuestra autentificacion
export const authInitialState : AuthState = {
    isLoggedIn: false,
}