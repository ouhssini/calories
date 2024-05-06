let checks = document.querySelectorAll('input[type="checkbox"]');
let val = document.querySelectorAll('input[type="number"]');
let affichage = document.getElementById("resul");
let values = [2.75, 1.8, 0.4, 116, 80, 140];

function calc() {
  let res = 0;
  for (let i = 0; i < checks.length; i++) {
    if (checks[i].checked) {
      res += val[i].value * values[i];
    }
  }
  affichage.innerHTML = res + ' Kcal';
}
