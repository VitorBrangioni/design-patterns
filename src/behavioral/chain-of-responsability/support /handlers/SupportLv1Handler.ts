import ChainHandler from "../../chain/handlers/ChainHandler";
import { IssueTI } from "../interfaces";

export default class SupportLv1Handler extends ChainHandler<IssueTI> {

    actSupportLv1() {
        console.log('running support lv1...');
    }

    handle(data: IssueTI): IssueTI {
        this.actSupportLv1();

        return super.handle(data);
    }
}