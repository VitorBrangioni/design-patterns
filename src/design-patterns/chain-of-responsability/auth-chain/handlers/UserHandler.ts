import { AuthData } from "../interfaces";
import { users } from "../mocks";
import ChainHandler from "../../chain/handlers/ChainHandler";

class UserHandler extends ChainHandler<AuthData> {

    populateUser(data: AuthData) {
        const userFound = users[data.token] || null;

        if (!userFound) {
            throw new Error('User not found!');
        }
        data.user = userFound;
    }

    handle(data: AuthData): AuthData {
        console.log('executing UserHandler...');

        this.populateUser(data);

        return super.handle(data);
    }

}

export default UserHandler;