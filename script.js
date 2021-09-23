// Document Id Selected to HTML Mark
const deliveryCharge = document.getElementById('delivery-charge');
const storageCost = document.getElementById('storage-cost');
const memoryCost = document.getElementById('memory-cost');
const defouldPrice = document.getElementById('defould-price');
let totalPrice = document.getElementById('total-price');
const promoFiled = document.getElementById('promo-filed');
// Memory Update Handler Code
function updateMemory(memory) {
    if (memory == true) {
        memoryCost.innerText = '0'
    } else {
        memoryCost.innerText = '180'
    }
    addtionTotal()
};
document.getElementById('defould-memory').addEventListener('click', function(){
    updateMemory(true);
});
document.getElementById('extra-memory').addEventListener('click', function(){
    updateMemory(false);
});

// Storage Update Handler Code
function storageUpdate(storage){
    storageCost.innerText = storage;
    addtionTotal()
};
document.getElementById('defould-storage').addEventListener('click', function(){
    storageUpdate(0)
   
});
document.getElementById('storage-512-gb').addEventListener('click', function(){
    storageUpdate(100)
});
document.getElementById('storage-1-tb').addEventListener('click', function(){
    storageUpdate(180)
});
// // Delivery Update Code
function deliveryStyleSet(delivery){
    if(delivery == true){
        deliveryCharge.innerText = 0;
    }else{
        deliveryCharge.innerText = 20;
    }
    addtionTotal()
}
document.getElementById('delivery-defould-charge').addEventListener('click', function(){
    deliveryStyleSet(true);
});
document.getElementById('set-delivery-charge').addEventListener('click', function(){
    deliveryStyleSet(false);
});


// All Total Price Addition
function addtionTotal() {
    const deliveryChargeText = deliveryCharge.innerText
    const deliveryNumber = parseFloat(deliveryChargeText);

    const storageCostText = storageCost.innerText;
    const storageCostNumber = parseFloat(storageCostText);

    const memoryCostText = memoryCost.innerText;
    const memoryCostNumber = parseFloat(memoryCostText);

    const defouldPriceText = defouldPrice.innerText;
    const defouldPriceNumber = parseFloat(defouldPriceText);


    const allUpdatePrice = deliveryNumber + storageCostNumber + memoryCostNumber + defouldPriceNumber;
    totalPrice.innerText = allUpdatePrice;

   // Final Total PRice
   document.getElementById('final-order-price').innerText = allUpdatePrice;
}

// Apply Promo Code 
document.getElementById('promo-apply').addEventListener('click', function () {
    promoC()
})

function promoC() {
    
    const promoCode = promoFiled.value;
    if (promoCode.toLowerCase() == 'stevekaku') {
        let totalPrice = parseFloat(document.getElementById('total-price').innerText);
        totalPrice = totalPrice - (totalPrice * 0.20);
        document.getElementById('final-order-price').innerText = totalPrice;
    }

    promoFiled.value = '';
}