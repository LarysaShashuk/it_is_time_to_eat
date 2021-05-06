const button = document.querySelector('.button');
const fireworksArr = document.querySelectorAll('.firework');
const pawsArr = document.querySelectorAll('.paw');

button.addEventListener('click', () => {
  fireworksArr.forEach((element) => {
    element.classList.contains('hidden')
      ? element.classList.remove('hidden')
      : element.classList.add('hidden');
  });

  let i = 0;
  function callMe() {
    const timetowait = 1000;
    pawsArr[i].classList.contains('shownPaw')
      ? pawsArr[i].classList.remove('shownPaw')
      : pawsArr[i].classList.add('shownPaw');
    i++;
    if (i < pawsArr.length) {
      setTimeout(callMe, timetowait);
    }
  }

  callMe();
});
