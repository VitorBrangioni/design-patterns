import Product from "./Product";
import Customer from "./subscribers/Customer";
import Ecommerce from "./subscribers/Ecommerce";


(() => {
    const macbook = new Product(3, 'MacBook Pro Max', 2000);

    macbook.publisher.subscribe([
        new Customer('Vitor Braggion', 'vitor.braggion@gmail.com'),
        new Customer('Jobs', 'jobs@apple.com'),
        new Customer('Musk', 'jobs@spacex.com'),
        new Ecommerce('Ecommerce 1', 'ecommerce1.com'),
        new Ecommerce('Ecommerce 2', 'ecommerce2.com'),
        new Ecommerce('Ecommerce 3', 'ecommerce3.com')
    ]);

    macbook.setPrice(1500);
})();