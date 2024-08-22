import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from "../data/products.js";

import { loadCart } from "../data/cart.js";
// import '../data/cart-oop.js';
// import '../data/cart-class.js';
//import '../data/backend-practice.js';

async function loadPage() {
  try {
    //throw 'error1';
    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      //throw 'error2';
      loadCart(() => {
        //reject('error3');
        resolve('value3');
      });
    });

  } catch (error) {
    console.log('unexpected error. please try again later.');
  }


  //loadProductsFetch().then(()=>{

  //})

  //instead of use .then, we can use await


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