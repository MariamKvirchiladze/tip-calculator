`use strict`;
let bill;
let people;
let tipAmount;
let total;
let error = document.querySelectorAll(`.red-text`);

function addError() {
  document.querySelector(`#red-text1`).textContent = `Cant be zero...`;
  document.querySelector(`#bill`).style.border = `2px red solid`;
  document.querySelector(`#red-text2`).textContent = `Cant be zero...`;
  document.querySelector(`#people`).style.border = `2px red solid`;
}
function removeError() {
  document.querySelector(`#red-text1`).textContent = ``;
  document.querySelector(`#bill`).style.border = `none`;
  document.querySelector(`#red-text2`).textContent = ``;
  document.querySelector(`#people`).style.border = `none`;
}

function calcTip(x) {
  bill = Number(document.querySelector(`#bill`).value);
  people = Number(document.querySelector(`#people`).value);
  if (bill != 0 && people != 0) {
    removeError();

   
      let tipPercent = Number(document.querySelector(x).value);
      let tip = (bill * tipPercent) / 100;
      tipAmount = tip / people;
      total = (bill + tip) / people;
      document.querySelector(`#valuetip`).textContent = `$` + tipAmount;
      document.querySelector(`#valuetotal`).textContent = `$` + total;
   
  } else {
    addError();
  }
}

function reset() {
 
    document.querySelector(`#bill`).value = ``;
    document.querySelector(`#people`).value = ``;
    removeError();
    document.querySelector(`#valuetip`).textContent = `$0.00`;
    document.querySelector(`#valuetotal`).textContent = `$0.00`;

}
