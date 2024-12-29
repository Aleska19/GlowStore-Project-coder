/**
 * This function calculate total price of a new order 
 * @param {array} products cartProduct: array of objects
 * @returns {number} total price of all products 
 * 
 */

export const totalPrice = (products) =>{
let sum = 0;
products.forEach(product=> sum += product.price)
return sum 

};
