import cart from "../data/cart.js";
import products from "../data/products.js";

const addToCart = (id, quantity = 1) => {
    const product = products.find((p) => p.id === id);
    if (!product) {
        console.error(`Product with ID ${id} not found.`);
        return;
    }

    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    console.log(`${product.name} has been added to your cart.`);
};

export default addToCart;