import { User } from "./interfaces";

export interface Users {
    [token: string]: User;
}

export const users: Users = {
    'TOKEN1': {
        id: 1,
        name: 'Don Cabron',
        email: 'cabron@gmail.com'
    },
    'TOKEN2': {
        id: 2,
        name: 'Steve Jobs',
        email: 'steve.jobs@apple.com'
    },
    'TOKEN3': {
        id: 3,
        name: 'Vitor Braggion',
        email: 'vitor.braggion@gmail.com'
    }
};