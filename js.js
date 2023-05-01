const button = document.querySelector('button');
button.addEventListener('click', function() {
	alert('Вся жизнь - баги, а ты в ней тестировщик!')
})

const btn = document.querySelector('.men');
let isMovingRight = true;
let xPosition = 0;
const moveStep = 5;

function moveButton() {
  if (isMovingRight) {
    xPosition += moveStep;
    if (xPosition + btn.clientWidth > window.innerWidth) {
      isMovingRight = false;
    }
  } else {
    xPosition -= moveStep;
    if (xPosition < 0) {
      isMovingRight = true;
    }
  }
  btn.style.left = xPosition + 'px';
}

setInterval(moveButton, 50);