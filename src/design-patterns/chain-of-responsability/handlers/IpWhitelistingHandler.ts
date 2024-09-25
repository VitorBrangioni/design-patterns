import BaseHandler from "./ChainHandler";


class IpWhitelistingHandler extends BaseHandler {

    handle<AuthData>(data: AuthData): AuthData {
        console.log('Executing IpWhitelistingHandler');
        return null;
    }

}

export default IpWhitelistingHandler;