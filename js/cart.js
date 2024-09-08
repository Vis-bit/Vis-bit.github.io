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

