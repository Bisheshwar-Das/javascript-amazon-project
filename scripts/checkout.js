import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
// import '../data/cart-OOP.js'
// import '../data/cart-class.js'
// import '../data/'
loadProducts(()=>{
  renderOrderSummary();
  renderPaymentSummary();
})
