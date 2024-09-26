import { AuthData } from "../interfaces";
import BaseHandler from "./ChainHandler";


class IpWhitelistingHandler extends BaseHandler<AuthData> {

    handle(data: AuthData): AuthData {
        console.log('Executing IpWhitelistingHandler');
        return null;
    }

}

export default IpWhitelistingHandler;