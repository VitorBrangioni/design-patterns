import { AuthData } from "../interfaces";
import { users } from "../interfaces/mocks";
import ChainHandler from "./ChainHandler";

// #1
class TokenValidationHandler extends ChainHandler<AuthData> {

    private validateToken(data: AuthData) {

        if (!users[data.token]) {
            throw new Error('Invalid Token');
        }
    }

    handle(data: AuthData): AuthData {
        console.log('Executing TokenValidationHandler');
        this.validateToken(data);

        return super.handle(data);
    }


}

export default TokenValidationHandler;