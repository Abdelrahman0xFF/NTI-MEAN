import addToCart from "./modules/addToCart.js";
import listCart from "./modules/listCart.js";
import removeFromCart from "./modules/removeFromCart.js";
import calculateTotal from "./modules/calculateTotal.js";

addToCart(1);
addToCart(2, 2);
addToCart(3);
addToCart(1);

console.log("\n=== Cart contents ===");
listCart();
console.log(`Total: $${calculateTotal().toFixed(2)}`);

console.log("\n=== Removing one Mouse ===");
removeFromCart(2);

console.log("\n=== Cart contents after removal ===");
listCart();
console.log(`Total: $${calculateTotal().toFixed(2)}`);

console.log("\n=== Removing a product not in cart ===");
removeFromCart(99);
