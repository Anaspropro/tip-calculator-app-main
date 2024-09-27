let tipPercentage = 0

function selectTip(percentage){
  tipPercentage = percentage
  document.getElementById('customTip').value = ''
  calculateTip()
}


function calculateTip(){
  const bill = parseFloat(document.getElementById('userBill').value)
  const people = parseFloat(document.getElementById('peopleNum').value)
  const customTip = parseFloat(document.getElementById('customTip').value)

  if (customTip) {
    tipPercentage = customTip
  }

  if (!people || people <= 0 ) {
    document.getElementById('error').innerHTML = 'people cannot be 0'
  } else{
    document.getElementById('error').innerHTML = ''
  }

  const tipAmount = (bill * (tipPercentage / 100)) / people;
  const totalPerPerson = (bill + bill * (tipPercentage / 100)) / people;

  document.getElementById('tipPerPerson').textContent = `$${tipAmount.toFixed(2)}`;
  document.getElementById('totalPerPerson').textContent = `$${totalPerPerson.toFixed(2)}`;
}

function resetCalculator() {
  document.getElementById('bill').value = '';
  document.getElementById('people').value = '';
  document.getElementById('customTip').value = '';
  document.getElementById('tipAmount').textContent = '$0.00';
  document.getElementById('totalPerPerson').textContent = '$0.00';
  tipPercentage = 0;
}