import AuthChain from "./auth-chain/AuthChain";
import { AuthData } from "./auth-chain/interfaces";

(() => {
    const authData: AuthData = {
        token: 'TOKEN4',
        ip: '3.3.3.3',
        username: 'vitor.braggion'
    };

    const authChain = new AuthChain();

    const result = authChain.handle(authData);

    console.log(result);
})();