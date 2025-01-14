function handleCostKeyDown (event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-input-cost');
  let cost = Number(inputElement.value);

  const costElement = document.querySelector('.js-total-cost');

  console.log(costElement);
  if (cost > 0) {
    costElement.classList.remove('cost-error');
    if (cost < 40) {
      cost+= 10;
    } 
  }
  document.querySelector('.js-total-cost').innerHTML = `$${cost}`;

  if (cost < 0) {
    costElement.classList.add('cost-error');
    document.querySelector('.js-total-cost').innerHTML = `Error: Cost cannot be less than $0`;
  }
}
