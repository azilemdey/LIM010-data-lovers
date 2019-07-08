/* Manejo del DOM */
let i = 0;
const button = document.getElementById('boton');
button.addEventListener('click', () => {
  const pass = document.getElementById('pass').value;
  const userName = document.getElementById('name').value;
  if (pass === 'LABORATORIA') {
    let name = document.getElementById('view-name');
    name.innerHTML = `👤Usuario: ${userName}`;
    document.getElementById('contenedor').classList.add('hide');
    document.getElementById('cabecera').classList.remove('hide');
    document.getElementById('view-name').classList.remove('hide');
    document.getElementById('contenedor1').classList.remove('hide');
    document.getElementById('page1').classList.remove('hide');
  } else {
    document.getElementById('texto1').classList.add('estilo');
    i = i + 1;
  } if (i < 3) {
    document.getElementById('pass').disabled = true;
    document.getElementById('name').disabled = true;
    document.getElementById('boton').disabled = true;
  }
});

const atras = document.getElementById('regresar');
atras.addEventListener('click', () => {
  document.getElementById('contenedor').classList.remove('hide');
  document.getElementById('cabecera').classList.add('hide');
  document.getElementById('view-name').classList.add('hide');
  document.getElementById('contenedor1').classList.add('hide');
  document.getElementById('page1').classList.add('hide');
  document.getElementById('name').value = '';
});

const selector = document.getElementById('country');
selector.addEventListener('change', () => {
  for (i = 0; i < selector.length; i++) {
    if (selector.selectedIndex === 1) {
      document.getElementById('contenedor5-Brazil').classList.add('hide');
      document.getElementById('page5').classList.add('hide');
      document.getElementById('contenedor4-Chile').classList.add('hide');
      document.getElementById('page4').classList.add('hide');
      document.getElementById('contenedor3-Mexico').classList.add('hide');
      document.getElementById('page3').classList.add('hide');
      document.getElementById('contenedor2-Peru').classList.remove('hide');
      document.getElementById('page2').classList.remove('hide');
      document.getElementById('contenedor1').classList.add('hide');
      document.getElementById('page1').classList.add('hide');
    } else if (selector.selectedIndex === 2) {
      document.getElementById('contenedor5-Brazil').classList.add('hide');
      document.getElementById('page5').classList.add('hide');
      document.getElementById('contenedor4-Chile').classList.add('hide');
      document.getElementById('page4').classList.add('hide');
      document.getElementById('contenedor3-Mexico').classList.remove('hide');
      document.getElementById('page3').classList.remove('hide');
      document.getElementById('contenedor2-Peru').classList.add('hide');
      document.getElementById('page2').classList.add('hide');
      document.getElementById('contenedor1').classList.add('hide');
      document.getElementById('page1').classList.add('hide');
    } else if (selector.selectedIndex === 3) {
      document.getElementById('contenedor5-Brazil').classList.add('hide');
      document.getElementById('page5').classList.add('hide');
      document.getElementById('contenedor4-Chile').classList.remove('hide');
      document.getElementById('page4').classList.remove('hide');
      document.getElementById('contenedor3-Mexico').classList.add('hide');
      document.getElementById('page3').classList.add('hide');
      document.getElementById('contenedor2-Peru').classList.add('hide');
      document.getElementById('page2').classList.add('hide');
      document.getElementById('contenedor1').classList.add('hide');
      document.getElementById('page1').classList.add('hide');
    } else if (selector.selectedIndex === 4) {
      document.getElementById('contenedor5-Brazil').classList.remove('hide');
      document.getElementById('page5').classList.remove('hide');
      document.getElementById('contenedor4-Chile').classList.add('hide');
      document.getElementById('page4').classList.add('hide');
      document.getElementById('contenedor3-Mexico').classList.add('hide');
      document.getElementById('page3').classList.add('hide');
      document.getElementById('contenedor2-Peru').classList.add('hide');
      document.getElementById('page2').classList.add('hide');
      document.getElementById('contenedor1').classList.add('hide');
      document.getElementById('page1').classList.add('hide');
    }
  }
});

console.log(WORLDBANK['MEX'].indicators[0].data);

const info = [];
console.log(info.sort(function (prev, next){
  if (prev > next){
    return 1;
  }
  if (prev < next){
    return -1;
  }
  return 0;
}));


var pokemons = [{name: 'pickachu', level: 50 },
{ name: 'bulbasour', level: 10 },
{ name: 'snorlax', level: 1 },
{ name: 'mew', level: 2 },
{ name: 'abra', level: 150 }];
console.log(pokemons.sort(function (prev, next){
  if (prev.level > next.level) {
    return 1;
  }
  if (prev.level < next.level) {
    return -1;
  }
  return 0;
}));
/* Peru */
const data = WORLDBANK;
const visualizar = document.getElementById('proteccion-Peru');
visualizar.addEventListener('click', () => {
  document.getElementById('bloqueProteccion-Peru').classList.remove('hide');
  document.getElementById('bloqueEficacia-Peru').classList.add('hide');
  document.getElementById('bloqueDesarrollo-Peru').classList.add('hide');
  document.getElementById('bloqueEducacion-Peru').classList.add('hide');
  document.getElementById('bloqueSector-Peru').classList.add('hide');
  document.getElementById('bloqueGenero-Peru').classList.add('hide');
  document.getElementById('bloqueSalud-Peru').classList.add('hide');
  document.getElementById('bloqueEficacia-Mexico').classList.add('hide');
  document.getElementById('bloqueEficacia-Chile').classList.add('hide');
  document.getElementById('bloqueEficacia-Brazil').classList.add('hide');
  const indicadoresProteccionPeru = window.worldbank.indicatorsPeru(data['PER'].indicators);
  const arrayProteccionPeru = indicadoresProteccionPeru.proteccionSocialPeru;
  for (let i = 0; i < arrayProteccionPeru.length; i++) {
    document.getElementById('respuestaProteccion-Peru').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arrayProteccionPeru[i]}</a></br>`;
  }
});

const visualizar1 = document.getElementById('salud-Peru');
visualizar1.addEventListener('click', () => {
  document.getElementById('bloqueSalud-Peru').classList.remove('hide');
  document.getElementById('bloqueProteccion-Peru').classList.add('hide');
  document.getElementById('bloqueEficacia-Peru').classList.add('hide');
  document.getElementById('bloqueDesarrollo-Peru').classList.add('hide');
  document.getElementById('bloqueEducacion-Peru').classList.add('hide');
  document.getElementById('bloqueSector-Peru').classList.add('hide');
  document.getElementById('bloqueGenero-Peru').classList.add('hide');
  const indicadoresSaludPeru = window.worldbank.indicatorsPeru(data['PER'].indicators);
  const arraySaludPeru = indicadoresSaludPeru.saludPeru;
  for (let i = 0; i < arraySaludPeru.length; i++) {
    document.getElementById('respuestaSalud-Peru').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arraySaludPeru[i]}</a></br>`;
  }
});

const visualizar2 = document.getElementById('genero-Peru');
visualizar2.addEventListener('click', () => {
  document.getElementById('bloqueGenero-Peru').classList.remove('hide');
  document.getElementById('bloqueSalud-Peru').classList.add('hide');
  document.getElementById('bloqueProteccion-Peru').classList.add('hide');
  document.getElementById('bloqueEficacia-Peru').classList.add('hide');
  document.getElementById('bloqueDesarrollo-Peru').classList.add('hide');
  document.getElementById('bloqueEducacion-Peru').classList.add('hide');
  document.getElementById('bloqueSector-Peru').classList.add('hide');
  const indicadoresGeneroPeru = window.worldbank.indicatorsPeru(data['PER'].indicators);
  const arrayGeneroPeru = indicadoresGeneroPeru.generoPeru;
  for (let i = 0; i < arrayGeneroPeru.length; i++) {
    document.getElementById('respuestaGenero-Peru').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arrayGeneroPeru[i]}</a></br>`;
  }
});

const visualizar3 = document.getElementById('sector-Peru');
visualizar3.addEventListener('click', () => {
  document.getElementById('bloqueSector-Peru').classList.remove('hide');
  document.getElementById('bloqueGenero-Peru').classList.add('hide');
  document.getElementById('bloqueSalud-Peru').classList.add('hide');
  document.getElementById('bloqueProteccion-Peru').classList.add('hide');
  document.getElementById('bloqueEficacia-Peru').classList.add('hide');
  document.getElementById('bloqueDesarrollo-Peru').classList.add('hide');
  document.getElementById('bloqueEducacion-Peru').classList.add('hide');
  const indicadoresSectorPeru = window.worldbank.indicatorsPeru(data['PER'].indicators);
  const arraySectorPeru = indicadoresSectorPeru.sectorPeru;
  for (let i = 0; i < arraySectorPeru.length; i++) {
    document.getElementById('respuestaSector-Peru').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arraySectorPeru[i]}</a></br>`;
  }
});

const visualizar4 = document.getElementById('educacion-Peru');
visualizar4.addEventListener('click', () => {
  document.getElementById('bloqueEducacion-Peru').classList.remove('hide');
  document.getElementById('bloqueSector-Peru').classList.add('hide');
  document.getElementById('bloqueGenero-Peru').classList.add('hide');
  document.getElementById('bloqueSalud-Peru').classList.add('hide');
  document.getElementById('bloqueProteccion-Peru').classList.add('hide');
  document.getElementById('bloqueEficacia-Peru').classList.add('hide');
  document.getElementById('bloqueDesarrollo-Peru').classList.add('hide');
  const indicadoresEducacionPeru = window.worldbank.indicatorsPeru(data['PER'].indicators);
  const arrayEducacionPeru = indicadoresEducacionPeru.educacionPeru;
  for (let i = 0; i < arrayEducacionPeru.length; i++) {
    document.getElementById('respuestaEducacion-Peru').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arrayEducacionPeru[i]}</a></br>`;
  }
});

const visualizar5 = document.getElementById('desarrollo-Peru');
visualizar5.addEventListener('click', () => {
  document.getElementById('bloqueDesarrollo-Peru').classList.remove('hide');
  document.getElementById('bloqueEducacion-Peru').classList.add('hide');
  document.getElementById('bloqueSector-Peru').classList.add('hide');
  document.getElementById('bloqueGenero-Peru').classList.add('hide');
  document.getElementById('bloqueSalud-Peru').classList.add('hide');
  document.getElementById('bloqueProteccion-Peru').classList.add('hide');
  document.getElementById('bloqueEficacia-Peru').classList.add('hide');
  const indicadoresDesarrolloPeru = window.worldbank.indicatorsPeru(data['PER'].indicators);
  const arrayDesarrolloPeru = indicadoresDesarrolloPeru.desarrolloPeru;
  for (let i = 0; i < arrayDesarrolloPeru.length; i++) {
    document.getElementById('respuestaDesarrollo-Peru').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arrayDesarrolloPeru[i]}</a></br>`;
  }
});

const visualizar6 = document.getElementById('eficacia-Peru');
visualizar6.addEventListener('click', () => {
  document.getElementById('bloqueEficacia-Peru').classList.remove('hide');
  document.getElementById('bloqueDesarrollo-Peru').classList.add('hide');
  document.getElementById('bloqueEducacion-Peru').classList.add('hide');
  document.getElementById('bloqueSector-Peru').classList.add('hide');
  document.getElementById('bloqueGenero-Peru').classList.add('hide');
  document.getElementById('bloqueSalud-Peru').classList.add('hide');
  document.getElementById('bloqueProteccion-Peru').classList.add('hide');
  const indicadoresEficaciaPeru = window.worldbank.indicatorsPeru(data['PER'].indicators);
  const arrayEficaciaPeru = indicadoresEficaciaPeru.eficaciaPeru;
  for (let i = 0; i < arrayEficaciaPeru.length; i++) {
    document.getElementById('respuestaEficacia-Peru').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arrayEficaciaPeru[i]}</a></br>`;
  }
});
/* Mexico */
const visualizar7 = document.getElementById('proteccion-Mexico');
visualizar7.addEventListener('click', () => {
  document.getElementById('bloqueProteccion-Mexico').classList.remove('hide');
  document.getElementById('bloqueEficacia-Mexico').classList.add('hide');
  document.getElementById('bloqueDesarrollo-Mexico').classList.add('hide');
  document.getElementById('bloqueEducacion-Mexico').classList.add('hide');
  document.getElementById('bloqueSector-Mexico').classList.add('hide');
  document.getElementById('bloqueGenero-Mexico').classList.add('hide');
  document.getElementById('bloqueSalud-Mexico').classList.add('hide');
  const indicadoresProteccionMexico = window.worldbank.indicatorsMexico(data['MEX'].indicators);
  const arrayProteccionMexico = indicadoresProteccionMexico.proteccionSocialMexico;
  for (let i = 0; i < arrayProteccionMexico.length; i++) {
    document.getElementById('respuestaProteccion-Mexico').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arrayProteccionMexico[i]}</a></br>`;
  }
});

const visualizar8 = document.getElementById('salud-Mexico');
visualizar8.addEventListener('click', () => {
  document.getElementById('bloqueSalud-Mexico').classList.remove('hide');
  document.getElementById('bloqueProteccion-Mexico').classList.add('hide');
  document.getElementById('bloqueEficacia-Mexico').classList.add('hide');
  document.getElementById('bloqueDesarrollo-Mexico').classList.add('hide');
  document.getElementById('bloqueEducacion-Mexico').classList.add('hide');
  document.getElementById('bloqueSector-Mexico').classList.add('hide');
  document.getElementById('bloqueGenero-Mexico').classList.add('hide');
  const indicadoresSaludMexico = window.worldbank.indicatorsMexico(data['MEX'].indicators);
  const arraySaludMexico = indicadoresSaludMexico.saludMexico;
  for (let i = 0; i < arraySaludMexico.length; i++) {
    document.getElementById('respuestaSalud-Mexico').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arraySaludMexico[i]}</a></br>`;
  }
});

const visualizar9 = document.getElementById('genero-Mexico');
visualizar9.addEventListener('click', () => {
  document.getElementById('bloqueGenero-Mexico').classList.remove('hide');
  document.getElementById('bloqueSalud-Mexico').classList.add('hide');
  document.getElementById('bloqueProteccion-Mexico').classList.add('hide');
  document.getElementById('bloqueEficacia-Mexico').classList.add('hide');
  document.getElementById('bloqueDesarrollo-Mexico').classList.add('hide');
  document.getElementById('bloqueEducacion-Mexico').classList.add('hide');
  document.getElementById('bloqueSector-Mexico').classList.add('hide');
  const indicadoresGeneroMexico = window.worldbank.indicatorsMexico(data['MEX'].indicators);
  const arrayGeneroMexico = indicadoresGeneroMexico.generoMexico;
  for (let i = 0; i < arrayGeneroMexico.length; i++) {
    document.getElementById('respuestaGenero-Mexico').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arrayGeneroMexico[i]}</a></br>`;
  }
});

const cargarAños=()=>{
  const select2=document.getElementById('yearArray');
  for (let k=0; k < yearArray.length; k++) {
  const option2=document.createElement('option');
  option2.innerHTML=yearArray[k];
  select2.appendChild(option2)
  }
}
cargarAños();
const visualizar10 = document.getElementById('sector-Mexico');
visualizar10.addEventListener('click', () => {
  document.getElementById('bloqueSector-Mexico').classList.remove('hide');
  document.getElementById('bloqueGenero-Mexico').classList.add('hide');
  document.getElementById('bloqueSalud-Mexico').classList.add('hide');
  document.getElementById('bloqueProteccion-Mexico').classList.add('hide');
  document.getElementById('bloqueEficacia-Mexico').classList.add('hide');
  document.getElementById('bloqueDesarrollo-Mexico').classList.add('hide');
  document.getElementById('bloqueEducacion-Mexico').classList.add('hide');
  const indicadoresSectorMexico = window.worldbank.indicatorsMexico(data['MEX'].indicators);
  const arraySectorMexico = indicadoresSectorMexico.sectorMexico;
  for (let i = 0; i < arraySectorMexico.length; i++) {
    document.getElementById('respuestaSector-Mexico').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arraySectorMexico[i]}</a></br>`;
  }
});

const visualizar11 = document.getElementById('educacion-Mexico');
visualizar11.addEventListener('click', () => {
  document.getElementById('bloqueEducacion-Mexico').classList.remove('hide');
  document.getElementById('bloqueSector-Mexico').classList.add('hide');
  document.getElementById('bloqueGenero-Mexico').classList.add('hide');
  document.getElementById('bloqueSalud-Mexico').classList.add('hide');
  document.getElementById('bloqueProteccion-Mexico').classList.add('hide');
  document.getElementById('bloqueEficacia-Mexico').classList.add('hide');
  document.getElementById('bloqueDesarrollo-Mexico').classList.add('hide');
  const indicadoresEducacionMexico = window.worldbank.indicatorsMexico(data['MEX'].indicators);
  console.log(data['MEX'].indicators);
  const arrayEducacionMexico = indicadoresEducacionMexico.educacionMexico;
  for (let i = 0; i < arrayEducacionMexico.length; i++) {
    document.getElementById('respuestaEducacion-Mexico').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arrayEducacionMexico[i]}</a></br>`;
  }
});

const visualizar12 = document.getElementById('desarrollo-Mexico');
visualizar12.addEventListener('click', () => {
  document.getElementById('bloqueDesarrollo-Mexico').classList.remove('hide');
  document.getElementById('bloqueEducacion-Mexico').classList.add('hide');
  document.getElementById('bloqueSector-Mexico').classList.add('hide');
  document.getElementById('bloqueGenero-Mexico').classList.add('hide');
  document.getElementById('bloqueSalud-Mexico').classList.add('hide');
  document.getElementById('bloqueProteccion-Mexico').classList.add('hide');
  document.getElementById('bloqueEficacia-Mexico').classList.add('hide');
  const indicadoresDesarrolloMexico = window.worldbank.indicatorsMexico(data['MEX'].indicators);
  const arrayDesarrolloMexico = indicadoresDesarrolloMexico.desarrolloMexico;
  for (let i = 0; i < arrayDesarrolloMexico.length; i++) {
    document.getElementById('respuestaDesarrollo-Mexico').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arrayDesarrolloMexico[i]}</a></br>`;
  }
});

const visualizar13 = document.getElementById('eficacia-Mexico');
visualizar13.addEventListener('click', () => {
  document.getElementById('bloqueEficacia-Mexico').classList.remove('hide');
  document.getElementById('bloqueDesarrollo-Mexico').classList.add('hide');
  document.getElementById('bloqueEducacion-Mexico').classList.add('hide');
  document.getElementById('bloqueSector-Mexico').classList.add('hide');
  document.getElementById('bloqueGenero-Mexico').classList.add('hide');
  document.getElementById('bloqueSalud-Mexico').classList.add('hide');
  document.getElementById('bloqueProteccion-Mexico').classList.add('hide');
  const indicadoresEficaciaMexico = window.worldbank.indicatorsMexico(data['MEX'].indicators);
  const arrayEficaciaMexico = indicadoresEficaciaMexico.eficaciaMexico;
  for (let i = 0; i < arrayEficaciaMexico.length; i++) {
    document.getElementById('respuestaEficacia-Mexico').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arrayEficaciaMexico[i]}</a></br>`;
  }
});

/* Chile */
const visualizar14 = document.getElementById('proteccion-Chile');
visualizar14.addEventListener('click', () => {
  document.getElementById('bloqueProteccion-Chile').classList.remove('hide');
  document.getElementById('bloqueEficacia-Chile').classList.add('hide');
  document.getElementById('bloqueDesarrollo-Chile').classList.add('hide');
  document.getElementById('bloqueEducacion-Chile').classList.add('hide');
  document.getElementById('bloqueSector-Chile').classList.add('hide');
  document.getElementById('bloqueGenero-Chile').classList.add('hide');
  document.getElementById('bloqueSalud-Chile').classList.add('hide');
  const indicadoresProteccionChile = window.worldbank.indicatorsChile(data['CHL'].indicators);
  const arrayProteccionChile = indicadoresProteccionChile.proteccionSocialChile;
  for (let i = 0; i < arrayProteccionChile.length; i++) {
    document.getElementById('respuestaProteccion-Chile').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arrayProteccionChile[i]}</a></br>`;
  }
});

const visualizar15 = document.getElementById('salud-Chile');
visualizar15.addEventListener('click', () => {
  document.getElementById('bloqueSalud-Chile').classList.remove('hide');
  document.getElementById('bloqueProteccion-Chile').classList.add('hide');
  document.getElementById('bloqueEficacia-Chile').classList.add('hide');
  document.getElementById('bloqueDesarrollo-Chile').classList.add('hide');
  document.getElementById('bloqueEducacion-Chile').classList.add('hide');
  document.getElementById('bloqueSector-Chile').classList.add('hide');
  document.getElementById('bloqueGenero-Chile').classList.add('hide');
  const indicadoresSaludChile = window.worldbank.indicatorsChile(data['CHL'].indicators);
  const arraySaludChile = indicadoresSaludChile.saludChile;
  for (let i = 0; i < arraySaludChile.length; i++) {
    document.getElementById('respuestaSalud-Chile').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arraySaludChile[i]}</a></br>`;
  }
});

const visualizar16 = document.getElementById('genero-Chile');
visualizar16.addEventListener('click', () => {
  document.getElementById('bloqueGenero-Chile').classList.remove('hide');
  document.getElementById('bloqueSalud-Chile').classList.add('hide');
  document.getElementById('bloqueProteccion-Chile').classList.add('hide');
  document.getElementById('bloqueEficacia-Chile').classList.add('hide');
  document.getElementById('bloqueDesarrollo-Chile').classList.add('hide');
  document.getElementById('bloqueEducacion-Chile').classList.add('hide');
  document.getElementById('bloqueSector-Chile').classList.add('hide');
  const indicadoresGeneroChile = window.worldbank.indicatorsChile(data['CHL'].indicators);
  const arrayGeneroChile = indicadoresGeneroChile.generoChile;
  for (let i = 0; i < arrayGeneroChile.length; i++) {
    document.getElementById('respuestaGenero-Chile').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arrayGeneroChile[i]}</a></br>`;
  }
});

const visualizar17 = document.getElementById('sector-Chile');
visualizar17.addEventListener('click', () => {
  document.getElementById('bloqueSector-Chile').classList.remove('hide');
  document.getElementById('bloqueGenero-Chile').classList.add('hide');
  document.getElementById('bloqueSalud-Chile').classList.add('hide');
  document.getElementById('bloqueProteccion-Chile').classList.add('hide');
  document.getElementById('bloqueEficacia-Chile').classList.add('hide');
  document.getElementById('bloqueDesarrollo-Chile').classList.add('hide');
  document.getElementById('bloqueEducacion-Chile').classList.add('hide');
  const indicadoresSectorChile = window.worldbank.indicatorsChile(data['CHL'].indicators);
  const arraySectorChile = indicadoresSectorChile.sectorChile;
  for (let i = 0; i < arraySectorChile.length; i++) {
    document.getElementById('respuestaSector-Chile').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arraySectorChile[i]}</a></br>`;
  }
});

const visualizar18 = document.getElementById('educacion-Chile');
visualizar18.addEventListener('click', () => {
  document.getElementById('bloqueEducacion-Chile').classList.remove('hide');
  document.getElementById('bloqueSector-Chile').classList.add('hide');
  document.getElementById('bloqueGenero-Chile').classList.add('hide');
  document.getElementById('bloqueSalud-Chile').classList.add('hide');
  document.getElementById('bloqueProteccion-Chile').classList.add('hide');
  document.getElementById('bloqueEficacia-Chile').classList.add('hide');
  document.getElementById('bloqueDesarrollo-Chile').classList.add('hide');
  const indicadoresEducacionChile = window.worldbank.indicatorsChile(data['CHL'].indicators);
  console.log(data['CHL'].indicators);
  const arrayEducacionChile = indicadoresEducacionChile.educacionChile;
  for (let i = 0; i < arrayEducacionChile.length; i++) {
    document.getElementById('respuestaEducacion-Chile').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arrayEducacionChile[i]}</a></br>`;
  }
});

const visualizar19 = document.getElementById('desarrollo-Chile');
visualizar19.addEventListener('click', () => {
  document.getElementById('bloqueDesarrollo-Chile').classList.remove('hide');
  document.getElementById('bloqueEducacion-Chile').classList.add('hide');
  document.getElementById('bloqueSector-Chile').classList.add('hide');
  document.getElementById('bloqueGenero-Chile').classList.add('hide');
  document.getElementById('bloqueSalud-Chile').classList.add('hide');
  document.getElementById('bloqueProteccion-Chile').classList.add('hide');
  document.getElementById('bloqueEficacia-Chile').classList.add('hide');
  const indicadoresDesarrolloChile = window.worldbank.indicatorsChile(data['CHL'].indicators);
  const arrayDesarrolloChile = indicadoresDesarrolloChile.desarrolloChile;
  for (let i = 0; i < arrayDesarrolloChile.length; i++) {
    document.getElementById('respuestaDesarrollo-Chile').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arrayDesarrolloChile[i]}</a></br>`;
  }
});

const visualizar20 = document.getElementById('eficacia-Chile');
visualizar20.addEventListener('click', () => {
  document.getElementById('bloqueEficacia-Chile').classList.remove('hide');
  document.getElementById('bloqueDesarrollo-Chile').classList.add('hide');
  document.getElementById('bloqueEducacion-Chile').classList.add('hide');
  document.getElementById('bloqueSector-Chile').classList.add('hide');
  document.getElementById('bloqueGenero-Chile').classList.add('hide');
  document.getElementById('bloqueSalud-Chile').classList.add('hide');
  document.getElementById('bloqueProteccion-Chile').classList.add('hide');
  const indicadoresEficaciaChile = window.worldbank.indicatorsChile(data['CHL'].indicators);
  const arrayEficaciaChile = indicadoresEficaciaChile.eficaciaChile;
  for (let i = 0; i < arrayEficaciaChile.length; i++) {
    document.getElementById('respuestaEficacia-Chile').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arrayEficaciaChile[i]}</a></br>`;
  }
});

/* Brazil */
const visualizar21 = document.getElementById('proteccion-Brazil');
visualizar21.addEventListener('click', () => {
  document.getElementById('bloqueProteccion-Brazil').classList.remove('hide');
  document.getElementById('bloqueEficacia-Brazil').classList.add('hide');
  document.getElementById('bloqueDesarrollo-Brazil').classList.add('hide');
  document.getElementById('bloqueEducacion-Brazil').classList.add('hide');
  document.getElementById('bloqueSector-Brazil').classList.add('hide');
  document.getElementById('bloqueGenero-Brazil').classList.add('hide');
  document.getElementById('bloqueSalud-Brazil').classList.add('hide');
  const indicadoresProteccionBrazil = window.worldbank.indicatorsBrazil(data['BRA'].indicators);
  const arrayProteccionBrazil = indicadoresProteccionBrazil.proteccionSocialBrazil;
  for (let i = 0; i < arrayProteccionBrazil.length; i++) {
    document.getElementById('respuestaProteccion-Brazil').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arrayProteccionBrazil[i]}</a></br>`;
  }
});

const visualizar22 = document.getElementById('salud-Brazil');
visualizar22.addEventListener('click', () => {
  document.getElementById('bloqueSalud-Brazil').classList.remove('hide');
  document.getElementById('bloqueProteccion-Brazil').classList.add('hide');
  document.getElementById('bloqueEficacia-Brazil').classList.add('hide');
  document.getElementById('bloqueDesarrollo-Brazil').classList.add('hide');
  document.getElementById('bloqueEducacion-Brazil').classList.add('hide');
  document.getElementById('bloqueSector-Brazil').classList.add('hide');
  document.getElementById('bloqueGenero-Brazil').classList.add('hide');
  const indicadoresSaludBrazil = window.worldbank.indicatorsBrazil(data['BRA'].indicators);
  const arraySaludBrazil = indicadoresSaludBrazil.saludBrazil;
  for (let i = 0; i < arraySaludBrazil.length; i++) {
    document.getElementById('respuestaSalud-Brazil').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arraySaludBrazil[i]}</a></br>`;
  }
});

const visualizar23 = document.getElementById('genero-Brazil');
visualizar23.addEventListener('click', () => {
  document.getElementById('bloqueGenero-Brazil').classList.remove('hide');
  document.getElementById('bloqueSalud-Brazil').classList.add('hide');
  document.getElementById('bloqueProteccion-Brazil').classList.add('hide');
  document.getElementById('bloqueEficacia-Brazil').classList.add('hide');
  document.getElementById('bloqueDesarrollo-Brazil').classList.add('hide');
  document.getElementById('bloqueEducacion-Brazil').classList.add('hide');
  document.getElementById('bloqueSector-Brazil').classList.add('hide');
  const indicadoresGeneroBrazil = window.worldbank.indicatorsBrazil(data['BRA'].indicators);
  const arrayGeneroBrazil = indicadoresGeneroBrazil.generoBrazil;
  for (let i = 0; i < arrayGeneroBrazil.length; i++) {
    document.getElementById('respuestaGenero-Brazil').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arrayGeneroBrazil[i]}</a></br>`;
  }
});

const visualizar24 = document.getElementById('sector-Brazil');
visualizar24.addEventListener('click', () => {
  document.getElementById('bloqueSector-Brazil').classList.remove('hide');
  document.getElementById('bloqueGenero-Brazil').classList.add('hide');
  document.getElementById('bloqueSalud-Brazil').classList.add('hide');
  document.getElementById('bloqueProteccion-Brazil').classList.add('hide');
  document.getElementById('bloqueEficacia-Brazil').classList.add('hide');
  document.getElementById('bloqueDesarrollo-Brazil').classList.add('hide');
  document.getElementById('bloqueEducacion-Brazil').classList.add('hide');
  const indicadoresSectorBrazil = window.worldbank.indicatorsBrazil(data['BRA'].indicators);
  const arraySectorBrazil = indicadoresSectorBrazil.sectorBrazil;
  for (let i = 0; i < arraySectorBrazil.length; i++) {
    document.getElementById('respuestaSector-Brazil').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arraySectorBrazil[i]}</a></br>`;
  }
});

const visualizar25 = document.getElementById('educacion-Brazil');
visualizar25.addEventListener('click', () => {
  document.getElementById('bloqueEducacion-Brazil').classList.remove('hide');
  document.getElementById('bloqueSector-Brazil').classList.add('hide');
  document.getElementById('bloqueGenero-Brazil').classList.add('hide');
  document.getElementById('bloqueSalud-Brazil').classList.add('hide');
  document.getElementById('bloqueProteccion-Brazil').classList.add('hide');
  document.getElementById('bloqueEficacia-Brazil').classList.add('hide');
  document.getElementById('bloqueDesarrollo-Brazil').classList.add('hide');
  const indicadoresEducacionBrazil = window.worldbank.indicatorsBrazil(data['BRA'].indicators);
  console.log(data['BRA'].indicators);
  const arrayEducacionBrazil = indicadoresEducacionBrazil.educacionBrazil;
  for (let i = 0; i < arrayEducacionBrazil.length; i++) {
    document.getElementById('respuestaEducacion-Brazil').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arrayEducacionBrazil[i]}</a></br>`;
  }
});

const visualizar26 = document.getElementById('desarrollo-Brazil');
visualizar26.addEventListener('click', () => {
  document.getElementById('bloqueDesarrollo-Brazil').classList.remove('hide');
  document.getElementById('bloqueEducacion-Brazil').classList.add('hide');
  document.getElementById('bloqueSector-Brazil').classList.add('hide');
  document.getElementById('bloqueGenero-Brazil').classList.add('hide');
  document.getElementById('bloqueSalud-Brazil').classList.add('hide');
  document.getElementById('bloqueProteccion-Brazil').classList.add('hide');
  document.getElementById('bloqueEficacia-Brazil').classList.add('hide');
  const indicadoresDesarrolloBrazil = window.worldbank.indicatorsBrazil(data['BRA'].indicators);
  const arrayDesarrolloBrazil = indicadoresDesarrolloBrazil.desarrolloBrazil;
  for (let i = 0; i < arrayDesarrolloBrazil.length; i++) {
    document.getElementById('respuestaDesarrollo-Brazil').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arrayDesarrolloBrazil[i]}</a></br>`;
  }
});

const visualizar27 = document.getElementById('eficacia-Brazil');
visualizar27.addEventListener('click', () => {
  document.getElementById('bloqueEficacia-Brazil').classList.remove('hide');
  document.getElementById('bloqueDesarrollo-Brazil').classList.add('hide');
  document.getElementById('bloqueEducacion-Brazil').classList.add('hide');
  document.getElementById('bloqueSector-Brazil').classList.add('hide');
  document.getElementById('bloqueGenero-Brazil').classList.add('hide');
  document.getElementById('bloqueSalud-Brazil').classList.add('hide');
  document.getElementById('bloqueProteccion-Brazil').classList.add('hide');
  const indicadoresEficaciaBrazil = window.worldbank.indicatorsBrazil(data['BRA'].indicators);
  const arrayEficaciaBrazil = indicadoresEficaciaBrazil.eficaciaBrazil;
  for (let i = 0; i < arrayEficaciaBrazil.length; i++) {
    document.getElementById('respuestaEficacia-Brazil').innerHTML += `<a href="#"  style="color: #fff">✔️ ${arrayEficaciaBrazil[i]}</a></br>`;
  }
});
