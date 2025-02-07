import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts,loadProductsFetch } from "../data/products.js";
// import '../data/cart-OOP.js'
// import '../data/cart-class.js'
// import '../data/'

async function loadPage() {
  await loadProductsFetch();
  
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();
/*
Promise.all([
  loadProductsFetch(),
]).then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
})*/
