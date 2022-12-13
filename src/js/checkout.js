import { loadHeaderFooter } from "./utils";
import CheckoutProcess from "./checkoutProcess"



loadHeaderFooter();

const myCheckout = new CheckoutProcess('so-cart', '.checkout_summary');
//console.log(myCheckout);
myCheckout.init();

document
  .querySelector('#zip')
  .addEventListener('blur', myCheckout.calculateOrdertotal.bind(myCheckout));
// listening for click on the button
document.querySelector('#checkoutSubmit').addEventListener('click', (e) => {
  e.preventDefault();

  myCheckout.checkout();
});