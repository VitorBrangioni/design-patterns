import Chain from "./Chain";
import IpWhitelistingHandler from "./handlers/IpWhitelistingHandler";
import TokenValidationHandler from "./handlers/TokenValidationHandler";
import { AuthData } from "./interfaces";


class AuthChain extends Chain<AuthData> {
    constructor() {
        super([
            new TokenValidationHandler(),
            new IpWhitelistingHandler(),
        ]);
    }
}

export default AuthChain;