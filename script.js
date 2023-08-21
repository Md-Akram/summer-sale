const purchasedItemsContainer = document.querySelector('#puchased-items');
const totalPriceContainer = document.querySelector('#total-price');
const discountPriceContainer = document.querySelector('#discount-price');
const totalContainer = document.querySelector('#total');
const makePurchaseBtn = document.querySelector('#make-purchase');
const applyBtn = document.querySelector('#apply-btn');
const resetBtn = document.querySelector('#reset-btn');


let purchasedCount = 0;
let totalPrice = 0;
let discountPrice = 0;
let total = 0;

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', (e) => {
        purchasedCount++
        const purchasedItemName = e.currentTarget.querySelector('.product-name').innerText
        const purchasedItemPrice = e.currentTarget.querySelector('#product-price').innerText
        purchasedItemsContainer.innerHTML += `<p class="text-2xl capitalize">${purchasedCount}. ${purchasedItemName}</p>`
        totalPrice += parseInt(purchasedItemPrice)
        totalPriceContainer.innerText = totalPrice
        total = totalPrice - discountPrice
        totalContainer.innerText = total
        if (totalPrice) {
            makePurchaseBtn.disabled = false
        }
        if (totalPrice >= 200) {
            applyBtn.disabled = false
        }
    });
});

function handleApplyBtn() {
    let discountCode = document.querySelector('#discount-code').value
    if (discountCode === 'SELL20') {
        discountPrice = (totalPrice * 0.2).toFixed(2)
        discountPriceContainer.innerText = discountPrice
        total = totalPrice - discountPrice
        totalContainer.innerText = total
    } else {
        alert('Invalid Discount Code')
    }

}

function handleResetBtn() {
    purchasedCount = 0;
    totalPrice = 0;
    discountPrice = 0;
    total = 0;
    purchasedItemsContainer.innerHTML = ''
    totalPriceContainer.innerText = totalPrice
    discountPriceContainer.innerText = discountPrice
    totalContainer.innerText = total
    makePurchaseBtn.disabled = true
    applyBtn.disabled = true
    document.querySelector('#discount-code').value = ''
}
