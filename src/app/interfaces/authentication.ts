export interface UserLogin {
    grant_type: string;
    client_id: string;
    client_secret: string;
    scope: string;
    username: string; 
    password: string;
}

export interface UserSignup {
    grant_type: string;
    client_id: string;
    client_secret: string;
    scope: string;
    username: string; 
    password: string;
}
