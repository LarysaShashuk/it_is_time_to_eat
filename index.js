const button = document.querySelector('.button');
const fireworksArr = document.querySelectorAll('.firework');

button.addEventListener('click', () => {
  fireworksArr.forEach((element) => {
    element.classList.contains('hidden')
      ? element.classList.remove('hidden')
      : element.classList.add('hidden');
  });
});
