// https://www.omnicalculator.com/conversion/hectares-to-acres-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const acresRadio = document.getElementById('acresRadio');
const hectaresRadio = document.getElementById('hectaresRadio');

let acres;
let hectares = v; 

// labels of the inpust
const variable = document.getElementById('variable');

acresRadio.addEventListener('click', function() {
  variable.textContent = 'Hectares';
  hectares = v;
  result.textContent = '';
});

hectaresRadio.addEventListener('click', function() {
  variable.textContent = 'Acres';
  acres = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(acresRadio.checked)
    result.textContent = `Acres = ${computeacres().toFixed(5)}`;

  else if(hectaresRadio.checked)
    result.textContent = `Hectares = ${computehectares().toFixed(5)}`;
})

// calculation

function computeacres() {
  return Number(hectares.value) * 2.471;
}

function computehectares() {
  return Number(acres.value) / 2.471;
}