const customerData = document.querySelector('.customer-data:first-of-type'),
customerDataBody = customerData.querySelector('.customer-data-body'),
customerHeadBody = customerData.querySelector('.customer-head-body'),
nameInput = customerData.querySelector('input[name="nama"]'),
customerDataEditButton = document.querySelector('.customer-data-container .underline-button'),
deliveryData = document.querySelector('.delivery-data'),
deliveryDataItem = deliveryData.querySelector('.delivery-data-item'),
deliveryDataEditButton = document.querySelector('.delivery-data-container .underline-button'),
deliveryOptions = deliveryData.querySelector('.delivery-options'),
paymentMethod = document.querySelector('.payment-method'),
paymentOptions = paymentMethod.querySelector('.payment-options');

function editMode(e, container, containerBody, firstInput) {
    if (container.classList.contains('edit-mode')) {
        e.target.innerText = 'Edit';
        firstInput ? firstInput.disabled = true : null;
        containerBody.style.maxHeight = '0';
    } else {
        e.target.innerText = 'Save';
        firstInput ? firstInput.disabled = false : null;
        containerBody.style.maxHeight = `${containerBody.scrollHeight}px`;
    }

    container.classList.toggle('edit-mode');
}

customerDataEditButton.addEventListener('click', e => {
    editMode(e, customerData, customerDataBody, nameInput);
    console.log(customerHeadBody.scrollHeight);
    customerData.classList.contains('edit-mode') ? customerHeadBody.style.maxHeight = '0' : customerHeadBody.style.maxHeight = `${customerHeadBody.scrollHeight}px`;
})

deliveryDataEditButton.addEventListener('click', e => {
    editMode(e, deliveryData, deliveryOptions);
    editMode(e, paymentMethod, paymentOptions);
})

const itemAmountControls = document.querySelectorAll('.item-amount-controls');

function changeAmount(text, i) {
    text.innerText = parseInt(text.innerText) + 1 * i;
}

itemAmountControls.forEach(el => {
    let p = el.querySelector('p')
    el.querySelector('.add-btn').addEventListener('click', () => {
        parseInt(p.innerText) < 2 ? changeAmount(p, 1) : null;
    });
    el.querySelector('.remove-btn').addEventListener('click', () => {
        parseInt(p.innerText) > 1 ? changeAmount(p, -1) : null;
    });
})
