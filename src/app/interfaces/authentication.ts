export interface UserLogin {
    username: string;
    password: string;
}

export interface UserLoggedIn {
    access_token: string;
    expires_in: number;
    token_type: string;
    refresh_token: string;
    scope: string;
}

export interface UserSignup {
    name: string;
    surname: string;
    email: string;
    role: string;
}
