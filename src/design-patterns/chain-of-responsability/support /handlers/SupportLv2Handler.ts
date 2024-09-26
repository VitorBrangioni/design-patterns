import ChainHandler from "../../chain/handlers/ChainHandler";
import { IssueTI } from "../interfaces";

export default class SupportLv2Handler extends ChainHandler<IssueTI> {

    private actSupportLv2() {
        console.log('running support lv2...');
    }

    handle(data: IssueTI): IssueTI {
        this.actSupportLv2();

        return super.handle(data);
    }

}