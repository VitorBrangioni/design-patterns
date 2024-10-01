import Product from "../Product";
import { Subscriber } from "../Subscriber";


class Ecommerce implements Subscriber<Product> {

    private name: string;
    private url: string;

    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }

    getName() {
        return this.name;
    }

    getUrl() {
        return this.url;
    }

    update(product: Product): void {
        console.log('Sending new product updates to = ', this.name);
        console.log(product);
    }
}

export default Ecommerce;