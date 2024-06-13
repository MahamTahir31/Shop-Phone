const search = document.querySelector('.search');
const btn = document.querySelector('.btn-search');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
})