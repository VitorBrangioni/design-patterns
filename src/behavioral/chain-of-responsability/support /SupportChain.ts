import Chain from "../chain/Chain";
import SupportLv1Handler from "./handlers/SupportLv1Handler";
import SupportLv2Handler from "./handlers/SupportLv2Handler";
import SupportLv3Handler from "./handlers/SupportLv3Handler";
import { IssueTI } from "./interfaces";


export default class SupportChain extends Chain<IssueTI> {

    constructor() {
        super([
            new SupportLv1Handler(),
            new SupportLv2Handler(),
            new SupportLv3Handler()
        ]);
    }
}