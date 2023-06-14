function setRate(button) {
  let buttons = document.getElementsByClassName('rate');


  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('selected');
  }


  button.classList.add('selected');
}

function selected(opcion) {
  let selection = document.getElementsByClassName('selected')
  localStorage.setItem('selected', opcion);
  window.location.href = 'desafio.html';
}

