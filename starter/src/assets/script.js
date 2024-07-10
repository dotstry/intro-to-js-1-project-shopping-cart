// Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [
{
     // Create 3 or more product objects using object literal notation 
     // Each product should include five properties
     // name: name of product (string)
     name: "Cherry",
     // price: price of product (number)
     price: 0.33,
     // quantity: quantity in cart should start at zero (number)
     quantity: 0,
     // productId: unique id for the product (number)
     productID: 0,
     // image: picture of product (url string)
     // Images provided in /images folder. All images from Unsplash.com
     // cherry.jpg by Mae Mu
     image: "../src/images/cherry.jpg",
},
{
     name: "Orange",
     price: 1.11,
     quantity:0 ,
     productID: 1,
     // orange.jpg by Mae Mu;
     image: "../src/images/orange.jpg",
},
{
     name: "Strawberry",
     price: 0.44,
     quantity: 0,
     productID: 2,
     // strawberry.jpg by Allec Gomes
     image: "../src/images/strawberry.jpg",
}]


/* Declare an empty array named cart to hold the items in the cart */
const cart = [];


// Create a function named addProductToCart that takes in the product productId as an argument
function addProductToCart(productID)
{
//- addProductToCart should get the correct product based on the productId
//- if the product is not already in the cart, add it to the cart
let correctProduct = 0;
// one of these is correct
products.forEach (product in products)
{
     if (product.productID === productID);
}
// or
// for (n=0; n<products.length; n++)
/* switch(productID)
{
     case 0:
          product0.quantity++;
          break;
     case 1:
          product1.quantity++;
          break;
     case 2:
          product2.quantity++;
          break;
     default:
          break; 
}*/
//- addProductToCart should then increase the product's quantity



}

// Create a function named increaseQuantity that takes in the productId as an argument
function increaseQuantity(productID)
{
// increaseQuantity should get the correct product based on the productId

//- increaseQuantity should then increase the product's quantity
     
}


// Create a function named decreaseQuantity that takes in the productId as an argument

function decreaseQuantity(productID)
{
// decreaseQuantity should get the correct product based on the productId

// decreaseQuantity should decrease the quantity of the product

// if the function decreases the quantity to 0, the product is removed from the cart

}


// Create a function named removeProductFromCart that takes in the productId as an argument
function removeProductFromCart(productID)
{
//- removeProductFromCart should get the correct product based on the productId

//- removeProductFromCart should update the product quantity to 0

//- removeProductFromCart should remove the product from the cart

}


// Create a function named cartTotal that has no parameters
function cartTotal()
{
//- cartTotal should iterate through the cart to get the total cost of all products
//- cartTotal should return the total cost of the products in the cart
//Hint: price and quantity can be used to determine total cost
     let totalConst = 0.00;
     cart.forEach()
     {

     }
}


/* Create a function called emptyCart that empties the products from the cart */
function emptyCart()
{
     cart = [];
}

// Create a function named pay that takes in an amount as an argument
function pay(amount)
{
// amount is the money paid by customer
// Hint: cartTotal function gives us cost of all the products in the cart  

//pay will return a negative number if there is a remaining balance

// pay will return a positive number if money should be returned to customer

}


/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
To fully complete this project, it is expected that all tests pass.
Run the following command in terminal to run tests
npm run test
*/

module.exports =
{
     products,
     cart,
     addProductToCart,
     increaseQuantity,
     decreaseQuantity,
     removeProductFromCart,
     cartTotal,
     pay, 
     emptyCart,
/* Uncomment the following line if completing the currency converter bonus */
// currency
}
