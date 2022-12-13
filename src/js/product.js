import ProductData from "./productData.js";
import ProductDetails from "./productDetails.js";

import { getParams } from "./utils.js";

const dataSource = new ProductData("tents");

//console.log(dataSource.getData());

const productId = getParams("product");

const product = new ProductDetails(productId, dataSource);
product.init();

//console.log(dataSource.findProductById(productId));

//console.log(dataTents.getData());
//let products = [];

//THIS FUNCTION I COPIED IN productData.js, it is to filter one json file
//function convertToJson(res) {
// if (res.ok) {
//    return res.json();
//  } else {
//    throw new Error("Bad Response");
//  }
//}

//THIS FUNCTION IS PULL IN productoDetails.js file in addToCart() function.
//function setLocalStorage(key, data) {
//  localStorage.setItem(key, JSON.stringify(data));
//}

//THE FOLLOWING CODE WAS COPIED IN productData.js file. It is to get the data of every tent product.
// get tents data
//function getProductsData() {
//  fetch("../json/tents.json")
//    .then(convertToJson)
//    .then((data) => {
//      products = data;
//    });
//}
// or should we do it this way?
// async function getProductsDataAwait() {
//   products = await fetch("../json/tents.json").then(convertToJson);
// }

// add to cart button event handler
//function addToCart(e) {
//  const product = products.find((item) => item.Id === e.target.dataset.id);
//  setLocalStorage("so-cart", product);
//}

//getProductsData();
// add listener to Add to Cart button
//document.getElementById("addToCart").addEventListener("click", addToCart);
