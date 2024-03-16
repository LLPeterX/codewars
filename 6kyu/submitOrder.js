/* 
6kyu - Promises Made and Broken: The Misadventures of Bob the Highly Paid Consultant
https://www.codewars.com/kata/587593285448632b8d000143/train/javascript

fix code 

In the sample test case (submitOrder(12345)), "Your order was placed successfully" 
should be logged to the console. Hit "Attempt" to see if you pass the kata.

Some notes:

- You can assume that the functions Bob is calling actually exist 
   and take the given parameters in the given order.
- User "12345" is a valid user for testing
- Any provided function whose name ends in Async returns a Promise.
- Any provided function whose name does not end in Async is synchronous, i.e. calculateShipping().

*/

// for test

const users = {
  "12345": {
    cart: 1,
    profile: {
      zipCode: "5555"
    }
  },
  "2222": {
    cart: 2,
    profile: {
      zipCode: "666"
    }
  }
};

class OrderAPI {
  static async getShoppingCartAsync(user) {
    return new Promise(resolve => setTimeout(() => resolve(users[user].cart), 300));
  }
  static async placeOrderAsync(shoppingCart, shippingRate) {
    return new Promise(resolve => setTimeout(() => resolve(true), 500));
  }
}

class CustomerAPI {
  static getProfileAsync(user) {
    return new Promise(resolve => setTimeout(() => resolve(users[user].profile), 500));
  }
}

function calculateShipping(shoppingCart, zipCode) {
  return shoppingCart * zipCode / 2;
}


// ---------------- MAIN CODE -----------------------------------------

// v1
// function submitOrder(user) {
//   Promise.all([OrderAPI.getShoppingCartAsync(user), CustomerAPI.getProfileAsync(user)])
//     .then(([cart, profile]) => {
//       console.log(`u=${user} cart=${cart} p=${JSON.stringify(profile)}`);
//       OrderAPI.placeOrderAsync(cart, calculateShipping(cart, profile.zipCode))
//         .then((success) => console.log(`Your order ${success ? "was" : "was NOT"} placed successfully`))
//     })
//     .catch(() => console.log("Your order was NOT placed successfully"));
// }

// v2 (final)
function submitOrder(user) {
  Promise.all([OrderAPI.getShoppingCartAsync(user), CustomerAPI.getProfileAsync(user)])
    .then(([cart, profile]) => OrderAPI.placeOrderAsync(cart, calculateShipping(cart, profile.zipCode)))
    .then((success) => console.log(`Your order ${success ? "was" : "was NOT"} placed successfully`))
    .catch(() => console.log("Your order was NOT placed successfully"));
}

//submitOrder("12345");

// best

/* 
// Promises are garbo people, it's <<current year>>

async function submitOrder(user) {
  let shoppingCart, zipCode, shippingRate, orderSuccessful;
  
  // Get the current user's shopping cart
  shoppingCart = await OrderAPI.getShoppingCartAsync(user);
  
  // Also look up the ZIP code from their profile
  zipCode = (await CustomerAPI.getProfileAsync(user)).zipCode;
  
  // Calculate the shipping fees
  shippingRate = calculateShipping(shoppingCart, zipCode);
  
  // Submit the order
  orderSuccessful = await OrderAPI.placeOrderAsync(shoppingCart, shippingRate);
  console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
}
*/