// Select bestseller section elements
const bestsellersSection = document.querySelector('.bestsellers-section'),
bestsellersCarousel = bestsellersSection.querySelector('.bestsellers-carousel .inside-carousel'),
bestsellersImage = bestsellersCarousel.querySelectorAll('img'),
leftButton = bestsellersSection.querySelector('.left-button'),
rightButton = bestsellersSection.querySelector('.right-button'),
bestsellersProductDesc = bestsellersSection.querySelector('.bestsellers-product-desc'),
bestsellersDescTitle = bestsellersProductDesc.querySelector('h5'),
bestsellersDescPrice = bestsellersProductDesc.querySelector('.bestsellers-price');

// Select category section elements
const categorySection = document.querySelector('.category-section'),
categorySwitchButton = document.querySelectorAll('.category-nav button'),
daerahButton = categorySection.querySelector('.category-nav button.daerah'),
jenisButton = categorySection.querySelector('.category-nav button.jenis'),
categoryCarousel = categorySection.querySelector('.category-carousel'),
categoryInnerContainer = categoryCarousel.querySelectorAll('.category-inner-container'),
controlButtons = categoryCarousel.querySelectorAll('.carousel-page-indicator button'),
categoryTypes = categorySection.querySelector('.category-types'),
category = categorySection.querySelectorAll('.category');

// Function to translate bestsellers carousel images
let allowEvent = true;
function translateImg(direction) {
    if (allowEvent === false) {
        return;
    }

    bestsellersCarousel.classList.add('carousel-transition');

    const activeEl = document.querySelector('.bestsellers-carousel img.active');
    const nextEl = direction == -1 ? 
        document.querySelector('.bestsellers-carousel img.active + img') : document.querySelector('.bestsellers-carousel img:has(+ img.active)');
    bestsellersCarousel.style.translate = `calc((${activeEl.offsetWidth}px + 5rem) * ${direction})`;
    
    if (direction == -1) {
        setTimeout(() => {
            bestsellersCarousel.insertAdjacentElement('beforeend', bestsellersCarousel.querySelector('img:first-child'));
            bestsellersCarousel.classList.remove('carousel-transition');
            bestsellersCarousel.style.translate = "";
            allowEvent = true;
        }, 500);
    } else if (direction == 1) {
        setTimeout(() => {
            bestsellersCarousel.insertAdjacentElement('afterbegin', bestsellersCarousel.querySelector('img:last-child'));
            bestsellersCarousel.classList.remove('carousel-transition');
            bestsellersCarousel.style.translate = "";
            allowEvent = true;
        }, 500);
    }
    

    activeEl.classList.remove('active');
    nextEl.classList.add('active');
    allowEvent = false;
}

// Function to change text of description below bestsellers carousel
function changeText() {
    switch (parseInt(bestsellersCarousel.querySelector('img.active').src.at(-5))) {
        case 1: 
            bestsellersDescTitle.innerText = 'Bufet Purbasari';
            bestsellersDescPrice.innerText = 'Rp 5.000.000,00';
            break;
        case 2: 
            bestsellersDescTitle.innerText = 'Patung Suri Ikun';
            bestsellersDescPrice.innerText = 'Rp 7.000.000,00';
            break;
        case 3: 
            bestsellersDescTitle.innerText = 'Ukiran Jayengrana';
            bestsellersDescPrice.innerText = 'Rp 7.000.000,00';
            break;
        case 4: 
            bestsellersDescTitle.innerText = 'Meja Kopi Toba';
            bestsellersDescPrice.innerText = 'Rp 8.000.000,00';
            break;
        case 5: 
            bestsellersDescTitle.innerText = 'Kursi Jati Ciung Wanara';
            bestsellersDescPrice.innerText = 'Rp 6.500.000,00';
    }
}

leftButton.addEventListener('click', (e) => {
    translateImg(-1);
    changeText();
})

rightButton.addEventListener('click', () => {
    translateImg(1);
    changeText();
})

// Function to change visible item of category carousel
function changeActive(index) {
    categoryInnerContainer.forEach(el => {
        el.classList.remove('active');
    })
    controlButtons.forEach(el => {
        el.classList.remove('active');
    })

    categoryInnerContainer[index].classList.add('active');
    controlButtons[index].classList.add('active');

    intervalIndex = index;
    intervalIndex < 4 ? intervalIndex += 1 : intervalIndex = 0;
    clearInterval(categoryInterval);
    categoryInterval = setInterval(categoryFunction, 5000);
}

let intervalIndex = 1;
let categoryFunction = () => {
    changeActive(intervalIndex);
}
let categoryInterval = setInterval(categoryFunction, 5000);

controlButtons.forEach((el, i) => {
    el.addEventListener('click', e => {
        changeActive(i);
    })
})

function categoryChange(e) {
    categorySwitchButton.forEach(el => {
        el.classList.remove('active');
    })
    e.target.classList.add('active');

    const nextCategory = categorySection.querySelector('.category:not(.active)');
    category.forEach(el => {
        el.classList.remove('active');
    })
    nextCategory.classList.add('active');
}

daerahButton.addEventListener('click', e => {
    categoryChange(e);
    categoryInterval = setInterval(categoryFunction, 5000);
})

jenisButton.addEventListener('click', e => {
    categoryChange(e);
    changeActive(0);
    clearInterval(categoryInterval);
})


