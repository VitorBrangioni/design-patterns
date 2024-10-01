import { Subscriber } from "./Subscriber";


class Publisher<T> {

    private subscribers: Subscriber<T>[] = [];

    notify(data: T) {
        this.subscribers.forEach(subscriber => {
            subscriber.update(data);
        });
    }

    subscribe(subscribers: Subscriber<T>[]) {
        this.subscribers.push(...subscribers);
    }

    unsubscribe(subscriber: Subscriber<T>) {
        return this.subscribers.filter(sub => sub !== subscriber);
    }

}

export default Publisher;