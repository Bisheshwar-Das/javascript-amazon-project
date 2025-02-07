import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts,loadProductsFetch } from "../data/products.js";
// import '../data/cart-OOP.js'
// import '../data/cart-class.js'
// import '../data/'

async function loadPage() {
  try{
    await loadProductsFetch();
    const value=await new Promise((resolve,reject)=>{
      //any other backend call which on completion will give resolve and some value, else error if any
    });
  }catch(error){
    console.log("Unexpected Error: Please try again later.")
  }
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
