import AuthChain from "./AuthChain";
import { AuthData } from "./interfaces";

(() => {
    const authData: AuthData = {
        token: 'TOKEN2',
        ip: '3.3.3.3',
        username: 'vitor.braggion'
    };

    const authChain = new AuthChain();

    const result = authChain.handle(authData);

    console.log(result);
})();