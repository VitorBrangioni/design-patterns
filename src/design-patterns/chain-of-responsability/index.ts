import AuthChain from "./AuthChain";
import { AuthData } from "./interfaces";

(() => {
    const authData: AuthData = {
        token: 'ZZZ',
        ip: '0.0.0.0',
        username: 'vitor.braggion'
    };

    const authChain = new AuthChain();

    authChain.handle(authData);
    
})();