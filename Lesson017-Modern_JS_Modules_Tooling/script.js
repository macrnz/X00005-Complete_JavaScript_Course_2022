/*
import {
  addToCart,
  totalPrice as price,
  totalQuantity,
} from "./shoppingCart.js";

//OR import * as ShoppingCart from './shoppingCart.js'

addToCart("bread", 5);
console.log(`${price} ${totalQuantity}`);


/////////////////////////////////////////////////////////////
//TOP-LEVEL AWAIT
const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await res.json();
console.log(data)

const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
console.log(lastPost);

const lastPost2 = await getLastPost();
console.log(lastPost2);

/////////////////////////////////////////////////////////////
//THE MODULE PATTERN
//COMMON JS MODULES
// Export
export.addTocart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
  );
};

// Import
const { addTocart } = require('./shoppingCart.js');
*/

//INTRODUCTION TO NPM
import { cloneDeep } from "lodash";
