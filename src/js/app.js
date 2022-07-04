import '../scss/import.scss';

const humBtn = document.querySelector('.hamburger');
humBtn.addEventListener('click', () => {
  humBtn.classList.toggle('_open');
});

const select = document.getElementById('select01');
console.log(select, select.selectedIndex);
