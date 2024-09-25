import AuthChain, { AuthData } from "./AuthChain";

(() => {
    const authData: AuthData = {
        token: 'JIDSAJIDJAI',
        ip: '0.0.0.0',
        username: 'vitor.braggion'
    };

    const authChain = new AuthChain();

    authChain.handle(authData);
})();