import Product from "../Product";
import Email from "../services/Email";
import { Subscriber } from "../Subscriber";

class Customer implements Subscriber<Product> {

    private name: string;
    private email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    update(product: Product): void {
        console.log('Customer: product updated ', product);

        Email.send(this.email);
    }

}

export default Customer;