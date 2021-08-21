    // global
    const memoryCost = document.getElementById("memory-cost");
    const storageCost = document.getElementById("storage-cost");
    const totalDelivery = document.getElementById("delevery-charge");

    let promoCode = document.getElementById('promoCode');
    let promoCodeSubmit = document.getElementById('promo-code-apply');
    let finalPrice = document.getElementById('final-price');

// Extra Memory Cost
document.getElementById('memory-8gb').addEventListener('click',function(){
    memoryCost.innerText='0';
    getTotalProductPrice()
})
document.getElementById('memory-16gb').addEventListener('click',function(){
    memoryCost.innerText="180";
    getTotalProductPrice()
})

// Extra Storage Cost
document.getElementById('storage-256gb').addEventListener('click',function(){
    storageCost.innerText='0';
    getTotalProductPrice()
})
document.getElementById('storage-512gb').addEventListener('click',function(){
    storageCost.innerText='100';
    getTotalProductPrice()
})
document.getElementById('storage-1tb').addEventListener('click',function(){
    storageCost.innerText='180';
    getTotalProductPrice();
    
})

// Delivery charge
document.getElementById('free-delivery').addEventListener('click',function(){
    totalDelivery.innerText='0';
    getTotalProductPrice();
    
})
document.getElementById('charge-delivery').addEventListener('click',function(){
    totalDelivery.innerText='20';
    getTotalProductPrice();
    
})

// Total Price
 function getTotalProductPrice(){
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(totalDelivery.innerText) +1299;
     document.getElementById('final-price').innerText = totalPrice.innerText;
 }

// Promo code Discount price
function setPromoCode (){
    if(promoCode.value == 'stevekaku'){
        promoCodeSubmit.disabled = true;
        promoCode.disabled = true;
       finalPrice.innerText = parseInt(finalPrice.innerText) - (parseInt(finalPrice.innerText) / 100) * 20;
       promoCode.value = ' ';
    }
    else{
        alert('Invied Promo Code'); //Error massage
        promoCodeSubmit.disabled= false;
        promoCode.disabled = false;
      
    } 
}
 promoCodeSubmit.addEventListener('click', function(){
   setPromoCode();

 })

    