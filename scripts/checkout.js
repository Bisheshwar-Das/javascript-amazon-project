import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts,loadProductsFetch } from "../data/products.js";
// import '../data/cart-OOP.js'
// import '../data/cart-class.js'
// import '../data/'
Promise.all([
  loadProductsFetch(),
]).then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
})
