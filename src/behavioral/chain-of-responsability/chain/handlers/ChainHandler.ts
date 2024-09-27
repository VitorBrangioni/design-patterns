
abstract class ChainHandler<T> {
    nextHandler: ChainHandler<T>;

    handle(data: T): T {
        if (this.nextHandler) {
            return this.nextHandler.handle(data);    
        }
        return data;
    }

    getNextHandler() {
        return this.nextHandler;
    }

    setNextHandler(chainHandler: ChainHandler<T>) {
        this.nextHandler = chainHandler;
    }

}

export default ChainHandler;