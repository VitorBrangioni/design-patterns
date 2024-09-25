import ChainHandler from "../handlers/ChainHandler";

export interface IChainResponsability {
    orderedHandlers: ChainHandler[];

    handle: <T>(data: T) => T;
}

export interface IChainHandler {
    nextHandler: ChainHandler;

    handle: <T>(data: T) => T;
}