import Publisher from "./Publisher";

class Product {

    private id: number;
    private price: number;
    private name: string;

    publisher: Publisher<Product> = new Publisher();

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getId() {
        return this.id;
    }

    getPrice() {
        return this.price;
    }

    setName(name: string) {
        if (!name && name.length < 3) {
            throw new Error('Name shuld have more than 3 chars');
        }
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setPrice(price: number) {
        if (price < 0) {
            throw new Error('You cannot change the price less than 0');
        }
        this.price = price;

        const clone = {...this};
        delete clone.publisher;

        this.publisher.notify(clone);
    }

}

export default Product;