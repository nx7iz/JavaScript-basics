console.log(document.querySelector('.is-toggled'));
function gaming() {
  const buttonElement = document.querySelector('.gaming-button');
  // console.log(buttonElement.classList);

  if (buttonElement.classList.contains('is-toggled') && !buttonElement.classList.contains('toggled')) {
    
    buttonElement.classList.add('toggled');
    console.log(buttonElement.classList);
  } else{
    buttonElement.classList.remove('toggled');
    console.log(buttonElement.classList);
  }
  const musicElement = document.querySelector('.music-button');
  if (musicElement.classList.contains('is-toggled')) {

    musicElement.classList.remove('toggled');
    console.log(musicElement.classList);
  }
  
  const techElement = document.querySelector('.tech-button');
  if (techElement.classList.contains('is-toggled')) {

    techElement.classList.remove('toggled');
    console.log(techElement.classList);
  }
}

function music() {
  const buttonElement = document.querySelector('.music-button');
  // console.log(buttonElement.classList);

  if (buttonElement.classList.contains('is-toggled') && !buttonElement.classList.contains('toggled')) {
    
    buttonElement.classList.add('toggled');
    console.log(buttonElement.classList);
  }else{
    buttonElement.classList.remove('toggled');
    console.log(buttonElement.classList);
  }

  const gamingElement = document.querySelector('.gaming-button');
  if (gamingElement.classList.contains('is-toggled')) {

    gamingElement.classList.remove('toggled');
    console.log(gamingElement.classList);
  }  

  const techElement = document.querySelector('.tech-button');
  if (techElement.classList.contains('is-toggled')) {

    techElement.classList.remove('toggled');
    console.log(techElement.classList);
  }

}
function tech() {
  const buttonElement = document.querySelector('.tech-button');
  // console.log(buttonElement.classList);

  if (buttonElement.classList.contains('is-toggled') && !buttonElement.classList.contains('toggled')) {
    
    buttonElement.classList.add('toggled');
    console.log(buttonElement.classList);
  }else{
    buttonElement.classList.remove('toggled');
    console.log(buttonElement.classList);
  }
  
  const gamingElement = document.querySelector('.gaming-button');
  if (gamingElement.classList.contains('is-toggled')) {

    gamingElement.classList.remove('toggled');
    console.log(gamingElement.classList);
  } 
  
  const musicElement = document.querySelector('.music-button');
  if (musicElement.classList.contains('is-toggled')) {

    musicElement.classList.remove('toggled');
    console.log(musicElement.classList);
  } 

}

