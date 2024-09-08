const loreDesc = document.querySelector('.lore-desc'),
expandDescButton = document.querySelector('.expand-desc'),
loreDescCopy = document.querySelector('.lore-desc-copy');
                    
expandDescButton.addEventListener('click', e => {
    if (loreDesc.classList.contains('open')) {
        e.target.innerText = 'Baca Selengkapnya';
        loreDesc.style.maxHeight = '7em';
    } else {
        e.target.innerText = 'Lebih Sedikit';
        loreDesc.style.maxHeight = `${loreDesc.scrollHeight}px`;
    }

    loreDesc.classList.toggle('open');
})
