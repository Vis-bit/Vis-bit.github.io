const filterContainer = document.querySelector('.filter-container'),
filterToggleBtn = document.querySelector('.filter-toggle'),
filterBtn = filterContainer.querySelectorAll('.ghost-button');

filterToggleBtn.addEventListener('click', () => {
    filterContainer.classList.toggle('hidden');
})

filterBtn.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('active');
    })
})

