// set counter
let counter = 0;

//select buttons
let btns = document.querySelectorAll('.counter__button');

//select counter display element
let countValue = document.querySelector('.counter__count');

//add event listener to each button
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // increase counter when clicked
    if (e.currentTarget.classList.contains('counter__button--increase')) {
      counter++;
    } else if (
      // decrease counter when clicked
      e.currentTarget.classList.contains('counter__button--decrease')
    ) {
      counter--;
    } else {
      // reset counter when clicked
      counter = 0;
    }

    // change colors if count is smaller or larger than 0
    if (counter < 0) {
      countValue.style.color = '#ff7a18';
    } else if (counter > 0) {
      countValue.style.color = '#58a6ff';
    } else {
      countValue.style.color = 'aliceblue';
    }
    countValue.textContent = counter;
  });
});
