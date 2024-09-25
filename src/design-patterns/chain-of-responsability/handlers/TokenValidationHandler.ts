import { AuthData } from "../AuthChain";
import BaseHandler from "./ChainHandler";

// #1
class TokenValidationHandler extends BaseHandler  {

    // private validateToken(data: AuthData) {
    //     if (data.token !== 'ZZZ') {
    //         throw new Error('Invalid Token');
    //     }
    // }

    handle<AuthData>(data: AuthData) {
        console.log('Executing TokenValidationHandler');

        return super.handle(data);
    }

}

export default TokenValidationHandler;