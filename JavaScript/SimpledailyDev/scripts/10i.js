let calculation = localStorage.getItem('calculation') || ''; 
      
function updateCalculation(value) {
  
  document.querySelector('.js-calculation').classList.add('output-button');
  
  displayCalculation();  
  calculation += value;
  localStorage.setItem('calculation', calculation);

  
}
function displayCalculation() {
  document.querySelector('.js-calculation').innerHTML = calculation;

}

