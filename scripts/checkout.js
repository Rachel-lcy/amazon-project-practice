import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from "../data/products.js";

import { loadCart } from "../data/cart.js";
// import '../data/cart-oop.js';
// import '../data/cart-class.js';
//import '../data/backend-practice.js';

async function loadPage() {


  //loadProductsFetch().then(()=>{

  //})

  //instead of use .then, we can use await
  await loadProductsFetch();

  await new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();



/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/