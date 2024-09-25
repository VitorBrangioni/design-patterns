import { IChainHandler } from "../interfaces";

abstract class ChainHandler implements IChainHandler {
    nextHandler: ChainHandler;

    handle<T>(data: T): T {
        if (this.nextHandler) {
            return this.nextHandler.handle(data);    
        }
        return data;
    }

    getNextHandler() {
        return this.nextHandler;
    }

    setNextHandler(chainHandler: ChainHandler) {
        this.nextHandler = chainHandler;
    }

}

export default ChainHandler;