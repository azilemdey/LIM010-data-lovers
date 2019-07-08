/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/* const example = () => {
  return 'example';
};

window.example = example; */

let arrayIndicators= new Array();
for(let i=0; i<=138;i++) {
arrayIndicators[i]=WORLDBANK.PER.indicators[i].indicatorName;}
arrayIndicators.sort();
console.log(arrayIndicators);




