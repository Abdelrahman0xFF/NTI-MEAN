import cart from "../data/cart.js";

const removeFromCart = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1);
        }

        console.log(`Item with ID ${id} has been removed from your cart.`);
    } else {
        console.error(`Item with ID ${id} not found in your cart.`);
    }
};

export default removeFromCart;
