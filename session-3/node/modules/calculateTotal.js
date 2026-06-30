import cart from "../data/cart.js";

const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export default calculateTotal;
