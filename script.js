const scrollButtons = document.querySelectorAll('[data-scroll]');
scrollButtons.forEach((button) => button.addEventListener('click', () => document.querySelector(button.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' })));

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.car-card');
const inventoryCount = document.querySelector('#inventoryCount');
filters.forEach((filter) => filter.addEventListener('click', () => {
  filters.forEach((item) => item.classList.remove('active'));
  filter.classList.add('active');
  const selected = filter.dataset.filter;
  let visible = 0;
  cards.forEach((card) => {
    const show = selected === 'all' || card.dataset.category === selected;
    card.style.display = show ? '' : 'none';
    if (show) visible += 1;
  });
  inventoryCount.textContent = `${String(visible).padStart(2, '0')} vehicles`;
}));

document.querySelector('#contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(event.currentTarget).get('name');
  document.querySelector('#formStatus').textContent = `Thank you, ${name}. Our concierge will be in touch shortly.`;
  event.currentTarget.reset();
});
