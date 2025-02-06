export const cart=[];

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

  let addedTimeout;
  const added=document.querySelector(`.js-added-to-cart-${productId}`);
  added.classList.add("addedItem");
  if(!matchingItem){
    addedTimeout=setTimeout(()=>{added.classList.remove("addedItem")},2000);
  }else{
    clearTimeout(addedTimeout);
    setTimeout(()=>{added.classList.remove("addedItem")},2000);}

}