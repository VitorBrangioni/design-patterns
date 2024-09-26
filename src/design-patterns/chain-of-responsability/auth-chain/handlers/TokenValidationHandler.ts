import { AuthData } from "../interfaces";
import { users } from "../mocks";
import ChainHandler from "../../chain/handlers/ChainHandler";

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