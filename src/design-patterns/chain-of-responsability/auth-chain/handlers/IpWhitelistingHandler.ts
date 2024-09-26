import { AuthData } from "../interfaces";
import ChainHandler from "../../chain/handlers/ChainHandler";


class IpWhitelistingHandler extends ChainHandler<AuthData> {

    private trustedIPs: string[] = [
        '0.0.0.0',
        '3.3.3.3',
        '7.7.7.7'
    ];

    private validateIp(data: AuthData) {
        if (!this.trustedIPs.includes(data.ip)) {
            throw new Error('IP Not Allowed!');
        }
    }

    handle(data: AuthData): AuthData {
        console.log('Executing IpWhitelistingHandler');

        this.validateIp(data);

        return super.handle(data);
    }

}

export default IpWhitelistingHandler;