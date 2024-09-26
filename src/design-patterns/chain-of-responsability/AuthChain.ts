import Chain from "./Chain";
import IpWhitelistingHandler from "./handlers/IpWhitelistingHandler";
import TokenValidationHandler from "./handlers/TokenValidationHandler";
import UserHandler from "./handlers/UserHandler";
import { AuthData } from "./interfaces";


class AuthChain extends Chain<AuthData> {
    constructor() {
        super([
            new TokenValidationHandler(),
            new IpWhitelistingHandler(),
            new UserHandler()
        ]);
    }
}

export default AuthChain;