
export interface User {
    id: number;
    name: string;
    email: string;
}

export interface AuthData {
    username: string;
    token: string;
    ip: string;
    user?: User
}