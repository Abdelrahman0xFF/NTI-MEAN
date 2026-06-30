import cart from "../data/cart.js";

const listCart = () => {
    if (cart.length === 0) {
        console.log("Your cart is empty.");
        return;
    }

    console.log("Items in your cart:");
    console.table(
        cart.map(({ name, price, quantity }) => ({
            Name: name,
            Price: `$${price.toFixed(2)}`,
            Quantity: quantity,
            Subtotal: `$${(price * quantity).toFixed(2)}`,
        })),
    );
};

export default listCart;
