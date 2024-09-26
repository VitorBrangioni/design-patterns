import ChainHandler from "./handlers/ChainHandler";
import { IChainResponsability } from "./interfaces";

abstract class Chain<T> implements IChainResponsability<T> {
    orderedHandlers: ChainHandler<T>[] = [];

    constructor(handlers: ChainHandler<T>[]) {
        this.orderedHandlers = handlers;
        
        this.setupHandlers();
    }

    setOrderedHandlers(handlers: ChainHandler<T>[]) {
        this.orderedHandlers = handlers;
    }

    getOrderedHandlers() {
        return this.orderedHandlers;
    }

    handle(data: T) {
        if (!this.orderedHandlers.length) {
            throw new Error('You should use a Handler at least');
        }
        return this.orderedHandlers[0].handle(data);
    }

    private setupHandlers() {
        for (let i = 0; i < this.orderedHandlers.length; i++) {
            const currentHandler = this.orderedHandlers[i];
            const nextHandlerIndex = ++i;
            const isThereNextHandler = (this.orderedHandlers.length !== nextHandlerIndex);

            if (isThereNextHandler) {
                const nextHandler = this.orderedHandlers[nextHandlerIndex];
                currentHandler.setNextHandler(nextHandler);
            }
        }
    }
z
}

export default Chain;