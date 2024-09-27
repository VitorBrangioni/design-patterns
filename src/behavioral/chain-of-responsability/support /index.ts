import { IssueTI } from "./interfaces";
import SupportChain from "./SupportChain";

(() => {

    const issueTI: IssueTI = {
        code: 'CODE-3',
        company: 'Google',
        systemName: 'SAP',
        user: 'vitor.braggion'
    };

    const supportChain = new SupportChain();

    supportChain.handle(issueTI);
})();