import Chain from "./Chain";
import IpWhitelistingHandler from "./handlers/IpWhitelistingHandler";
import TokenValidationHandler from "./handlers/TokenValidationHandler";

export interface AuthData {
    username: string;
    token: string;
    ip: string;
}

class AuthChain extends Chain {
    constructor() {
        super([
            new TokenValidationHandler(),
            new IpWhitelistingHandler(),
        ]);
    }
}

export default AuthChain;