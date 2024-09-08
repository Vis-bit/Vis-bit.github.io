const carouselInnerContainer = document.querySelector('.carousel-inner-container'),
prevButton = document.querySelector('button.prev'),
nextButton = document.querySelector('button.next'),
title = document.querySelector('main > h3.title'),
desc = document.querySelector('main > p.desc');

const step1Base = document.querySelectorAll('.step-1-choices > div'),
mapParts = document.querySelectorAll('.part'),
dimensionsCard = document.querySelectorAll('.dimensions-card > div'),
hubungiPerajinSkipBtn = document.querySelector('.hubungi-perajin .underline-button');

// Function to move carousel and change title text
let index = 0;
function carouselFunction() {
    carouselInnerContainer.style.translate = `calc((-100vw + 6rem) * ${index})`;

    switch (index) {
        case 0: 
            title.innerText = 'Tahap 1: Pilih Dasar';
            prevButton.disabled = true;
            break;
        case 1: 
            title.innerText = 'Tahap 2: Pilih Pola';
            prevButton.disabled = false;
            break;
        case 2: 
            title.innerText = 'Tahap 3: Pilih Dimensi';
            break;
        case 3: 
            title.innerText = 'Tahap 4: Hubungi Perajin';
            nextButton.innerText = 'Selesai';
            break;
        case 4: 
            title.innerText = 'Pesanan Anda Telah Dibuat';
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
    }
}

prevButton.addEventListener('click', () => {
    if (index != 0 && index != 4) {
        index--;
        carouselFunction();
    }
})

nextButton.addEventListener('click', () => {
    let contains = document.querySelector('.step-1-choices:has(.active)') && document.querySelector('.map-parts:has(.active)') && document.querySelector('.dimensions:has(.active)');

    if (index != 4) {
        if (index !== 3 || contains) {
            index++;
            carouselFunction();
        } else {
            alert('Tolong memilih pilihan pada setiap tahap!')
        }
    }
})

hubungiPerajinSkipBtn.addEventListener('click', () => {
    if (index != 4) {
        index++;
        carouselFunction();
    }
})

prevButton.disabled = true;

// Function to add active state to an element
// Base Selection (Step 1), Region Selection (Step 2), and Dimensions Selection (Step 3)
function selectItem(array, element) {
    array.forEach(el => {
        el !== element ? el.classList.remove('active') : null;
    })
    element.classList.toggle('active');
}

mapParts.forEach(el => {
    el.addEventListener('click', () => {
        selectItem(mapParts, el);
    })
})

step1Base.forEach(el => {
    el.addEventListener('click', () => {
        selectItem(step1Base, el);
    })
})

dimensionsCard.forEach(el => {
    el.addEventListener('click', () => {
        selectItem(dimensionsCard, el);
    })
})