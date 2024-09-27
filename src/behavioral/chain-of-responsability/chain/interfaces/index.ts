import ChainHandler from "../handlers/ChainHandler";
export interface IChainResponsability<T> {
    orderedHandlers: ChainHandler<T>[];

    handle: (data: T) => T;
}

export interface IChainHandler<T> {
    nextHandler: ChainHandler<T>;

    handle: <T>(data: T) => T;
}