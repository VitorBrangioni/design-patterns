import ChainHandler from "../../chain/handlers/ChainHandler";
import { IssueTI } from "../interfaces";

export default class SupportLv3Handler extends ChainHandler<IssueTI> {

    private actSupportLv3() {
        console.log('running support lv3...');
    }

    handle(data: IssueTI): IssueTI {
        this.actSupportLv3();

        return super.handle(data);
    }

}