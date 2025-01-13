function gaming() {
  const buttonElement = document.querySelector('.is-toggled');
  console.log(buttonElement.classList);

  if (buttonElement.classList.contains('is-toggled') && !buttonElement.classList.contains('toggled')) {
    
    buttonElement.classList.add('toggled');
    console.log(buttonElement.classList);
  }else{
    buttonElement.classList.remove('toggled');
    console.log(buttonElement.classList);
  }
}