export let cart=JSON.parse(localStorage.getItem('cart'));

if(!cart){
  cart=[{
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:2,
    },{
    productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity:4,
  }];
}

function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId){
  let matchingItem;
  cart.forEach((cartItem)=>{
    if(productId===cartItem.productId){
      matchingItem=cartItem;
    }
  });
  const quantity=Number(document.querySelector(`.js-quantity-selector-${productId}`).value);

  if(matchingItem){
    matchingItem.quantity+=quantity
  }else{
    cart.push({
      productId,
      quantity,
    });
  }
  saveToStorage();

  let addedTimeout;
  const added=document.querySelector(`.js-added-to-cart-${productId}`);
  added.classList.add("addedItem");
  if(!matchingItem){
    addedTimeout=setTimeout(()=>{added.classList.remove("addedItem")},2000);
  }else{
    clearTimeout(addedTimeout);
    setTimeout(()=>{added.classList.remove("addedItem")},2000);}

}

export function removeFromCart(productId){
  const newCart=[];
  cart.forEach((cartItem)=>{
    if(cartItem.productId!==productId){
      newCart.push(cartItem);
    }
  });
  cart=newCart;
  saveToStorage();
}