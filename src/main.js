/* Manejo del DOM */
let i = 0;
const button = document.getElementById('boton');
button.addEventListener('click', (event) => {
  event.preventDefault()
  const pass = document.getElementById('pass').value;
  const userName = document.getElementById('name').value;
  if (pass === 'LABORATORIA') {
    let name = document.getElementById('view-name');
    name.innerHTML = `👤Usuario: ${userName}`;
    document.getElementById('contenedor').classList.add('hide');
    document.getElementById('cabecera').classList.remove('hide');
    document.getElementById('view-name').classList.remove('hide');
    document.getElementById('contenedor1').classList.remove('hide');
    document.getElementById('contiene-boton').classList.remove('hide');
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

//Template para ingresar el nombre de los paises al select

let array = Object.entries(WORLDBANK);

let template= `<option value="" disabled selected>Países:</option>`

for (let i = 0; i < array.length; i++){
template += `<option value=${array[i][1].indicators[0].countryName}>${array[i][1].indicators[0].countryName}</option>`
};
const country=document.getElementById('country');
country.innerHTML=template;

//boton para retornar
const atras = document.getElementById('regresar');
atras.addEventListener('click', () => {
  location.reload();
  document.getElementById('contenedor').classList.remove('hide');
  document.getElementById('contenedor2-peru').classList.add('hide');
  document.getElementById('contenedor3-mexico').classList.add('hide');
  document.getElementById('contenedor4-chile').classList.add('hide');
  document.getElementById('contenedor5-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('cabecera').classList.add('hide');
  document.getElementById('view-name').classList.add('hide');
  document.getElementById('contenedor1').classList.add('hide');
  document.getElementById('page1').classList.add('hide');
  document.getElementById('name').value = '';
  document.getElementById('pass').value = '';
});

const atras1 = document.getElementById('regresar1');
atras1.addEventListener('click', () => {
  document.getElementById('cabecera').classList.remove('hide');
  document.getElementById('view-name').classList.remove('hide');
  document.getElementById('contenedor1').classList.remove('hide');
  document.getElementById('contiene-boton').classList.remove('hide');
  document.getElementById('respuestaproteccion-peru').classList.remove('hide');
  document.getElementById('page1').classList.remove('hide');
  document.getElementById('country').classList.remove('hide');
  document.getElementById('selector').classList.remove('hide');
  document.getElementById('contiene-boton1').classList.add('hide');
  document.getElementById('mostraryear').classList.add('hide');
});

const selector = document.getElementById('country');
selector.addEventListener('change', () => {
  for (i = 0; i < selector.length; i++) {
    if (selector.selectedIndex === 1) {
      document.getElementById('contenedor5-brazil').classList.add('hide');
      document.getElementById('page5').classList.add('hide');
      document.getElementById('contenedor4-chile').classList.add('hide');
      document.getElementById('page4').classList.add('hide');
      document.getElementById('contenedor3-mexico').classList.add('hide');
      document.getElementById('page3').classList.add('hide');
      document.getElementById('contenedor2-peru').classList.remove('hide');
      document.getElementById('page2').classList.remove('hide');
      document.getElementById('contenedor1').classList.add('hide');
      document.getElementById('page1').classList.add('hide');
    } else if (selector.selectedIndex === 2) {
      document.getElementById('contenedor5-brazil').classList.add('hide');
      document.getElementById('page5').classList.add('hide');
      document.getElementById('contenedor4-chile').classList.add('hide');
      document.getElementById('page4').classList.add('hide');
      document.getElementById('contenedor3-mexico').classList.remove('hide');
      document.getElementById('page3').classList.remove('hide');
      document.getElementById('contenedor2-peru').classList.add('hide');
      document.getElementById('page2').classList.add('hide');
      document.getElementById('contenedor1').classList.add('hide');
      document.getElementById('page1').classList.add('hide');
    } else if (selector.selectedIndex === 4) {
      document.getElementById('contenedor5-brazil').classList.add('hide');
      document.getElementById('page5').classList.add('hide');
      document.getElementById('contenedor4-chile').classList.remove('hide');
      document.getElementById('page4').classList.remove('hide');
      document.getElementById('contenedor3-mexico').classList.add('hide');
      document.getElementById('page3').classList.add('hide');
      document.getElementById('contenedor2-peru').classList.add('hide');
      document.getElementById('page2').classList.add('hide');
      document.getElementById('contenedor1').classList.add('hide');
      document.getElementById('page1').classList.add('hide');
    } else if (selector.selectedIndex === 3) {
      document.getElementById('contenedor5-brazil').classList.remove('hide');
      document.getElementById('page5').classList.remove('hide');
      document.getElementById('contenedor4-chile').classList.add('hide');
      document.getElementById('page4').classList.add('hide');
      document.getElementById('contenedor3-mexico').classList.add('hide');
      document.getElementById('page3').classList.add('hide');
      document.getElementById('contenedor2-peru').classList.add('hide');
      document.getElementById('page2').classList.add('hide');
      document.getElementById('contenedor1').classList.add('hide');
      document.getElementById('page1').classList.add('hide');
    }
  }
});

/* Peru */
const data = WORLDBANK;
const visualizar = document.getElementById('proteccion-peru');
visualizar.addEventListener('click', () => {
  document.getElementById('respuestaproteccion-peru').innerHTML = '';
  document.getElementById('bloqueproteccion-peru').classList.remove('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['PER'].indicators);
  const arrayProteccionPeru = dataindicadores.proteccionSocial;
  for (let i = 0; i < arrayProteccionPeru.length; i++) {
    document.getElementById('respuestaproteccion-peru').innerHTML += `<a href="javascript:showDataProteccionPeru(${i})"  style="color: #333333; font-weight: bold">✓ ${arrayProteccionPeru[i]}</a></br>`;
  }
});

let sesionActualIndicador = [];
const listarTodo = (pais, indicador) => {
  let infop = data[pais].indicators;
  let resultado;
  for (let i = 0; infop.length > i; i++) {
    if (infop[i].indicatorCode === indicador) {
      resultado = infop[i];
      sesionActualIndicador = infop[i];
    }
  }
  return resultado;
};

let dataFiltro;
const showDataProteccionPeru = (x) => {
  document.getElementById('contenedor2-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('respuestaproteccion-peru').classList.add('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  
  
  let dataFiltroYear;
  if (x === 1){
    dataFiltro = listarTodo('PER', 'per_allsp.cov_pop_tot');
    dataFiltroYear = listarTodo('PER', 'per_allsp.cov_pop_tot');
  }else if (x === 2){
    dataFiltro = listarTodo('PER', 'per_allsp.ben_q1_tot');
    dataFiltroYear = listarTodo('PER', 'per_allsp.ben_q1_tot');
  } else{
    dataFiltro = listarTodo('PER', 'per_lm_alllm.ben_q1_tot');
    dataFiltroYear = listarTodo('PER', 'per_lm_alllm.ben_q1_tot');
  }
  print(dataFiltro);
  printSelector(dataFiltroYear);
}

const visualizar1 = document.getElementById('salud-peru');
visualizar1.addEventListener('click', () => {
  document.getElementById('respuestasalud-peru').innerHTML = '';
  document.getElementById('bloquesalud-peru').classList.remove('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['PER'].indicators);
  const arraySaludPeru = dataindicadores.salud;
  for (let i = 0; i < arraySaludPeru.length; i++) {
    document.getElementById('respuestasalud-peru').innerHTML += `<a href="javascript:showDataSaludPeru(${i})"  style="color: #333333; font-weight: bold">✓ ${arraySaludPeru[i]}</a></br>`;
  }
});
const showDataSaludPeru = (x) => {
  document.getElementById('contenedor2-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('respuestasalud-peru').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  if (x === 1){
    dataFiltro = listarTodo('PER', 'SH.ANM.NPRG.ZS');
    dataFiltroYear = listarTodo('PER', 'SH.ANM.NPRG.ZS');
  }else if (x === 2){
    dataFiltro = listarTodo('PER', 'SP.UWT.TFRT')
    dataFiltroYear = listarTodo('PER', 'SP.UWT.TFRT');
  } else{
    dataFiltro = listarTodo('PER', 'SH.ANM.ALLW.ZS"')
    dataFiltroYear = listarTodo('PER', 'SH.ANM.ALLW.ZS"');
  }
  print(dataFiltro);
  printSelector(dataFiltroYear);
}

const visualizar2 = document.getElementById('genero-peru');
visualizar2.addEventListener('click', () => {
  document.getElementById('respuestagenero-peru').innerHTML = '';
  document.getElementById('bloquegenero-peru').classList.remove('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['PER'].indicators);
  const arrayGeneroPeru = dataindicadores.genero;
  for (let i = 0; i < arrayGeneroPeru.length; i++) {
    document.getElementById('respuestagenero-peru').innerHTML += `<a href="javascript:showDataGeneroPeru(${i})"  style="color: #333333; font-weight: bold">✓ ${arrayGeneroPeru[i]}</a></br>`;
  }
});


const visualizar3 = document.getElementById('sector-peru');
visualizar3.addEventListener('click', () => {
  document.getElementById('respuestasector-peru').innerHTML = '';
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.remove('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['PER'].indicators);
  const arraySectorPeru = dataindicadores.sector;
  for (let i = 0; i < arraySectorPeru.length; i++) {
    document.getElementById('respuestasector-peru').innerHTML += `<a href="javascript:showDataSectorPeru(${i})"  style="color: #333333; font-weight: bold">✓ ${arraySectorPeru[i]}</a></br>`;
  }
});


const visualizar4 = document.getElementById('educacion-peru');
visualizar4.addEventListener('click', () => {
  document.getElementById('respuestaeducacion-peru').innerHTML = '';
  document.getElementById('bloqueeducacion-peru').classList.remove('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['PER'].indicators);
  const arrayEducacionPeru = dataindicadores.educacion;
  for (let i = 0; i < arrayEducacionPeru.length; i++) {
    document.getElementById('respuestaeducacion-peru').innerHTML += `<a href="javascript:showDataEducacionPeru(${i})"  style="color: #333333; font-weight: bold">✓ ${arrayEducacionPeru[i]}</a></br>`;
  }
});


const visualizar5 = document.getElementById('desarrollo-peru');
visualizar5.addEventListener('click', () => {
  document.getElementById('respuestadesarrollo-peru').innerHTML = '';
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.remove('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['PER'].indicators);
  const arrayDesarrolloPeru = dataindicadores.desarrollo;
  for (let i = 0; i < arrayDesarrolloPeru.length; i++) {
    document.getElementById('respuestadesarrollo-peru').innerHTML += `<a href="javascript:showDataDesarrolloPeru(${i})"  style="color: #333333; font-weight: bold">✓ ${arrayDesarrolloPeru[i]}</a></br>`;
  }
});


const visualizar6 = document.getElementById('sectorpublico-peru');
visualizar6.addEventListener('click', () => {
  document.getElementById('respuestasectorpublico-peru').innerHTML = '';
  document.getElementById('bloquesectorpublico-peru').classList.remove('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['PER'].indicators);
  const arraySectorPublicoPeru = dataindicadores.sectorPublico;
  for (let i = 0; i < arraySectorPublicoPeru.length; i++) {
    document.getElementById('respuestasectorpublico-peru').innerHTML += `<a href="javascript:showDataSectorPublicoPeru(${i})"  style="color: #333333; font-weight: bold">✓ ${arraySectorPublicoPeru[i]}</a></br>`;
  }
});

const visualizar7 = document.getElementById('eficacia-peru');
visualizar7.addEventListener('click', () => {
  document.getElementById('respuestaeficacia-peru').innerHTML = '';
  document.getElementById('bloqueeficacia-peru').classList.remove('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['PER'].indicators);
  const arrayEficaciaPeru = dataindicadores.eficacia;
  for (let i = 0; i < arrayEficaciaPeru.length; i++) {
    document.getElementById('respuestaeficacia-peru').innerHTML += `<a href="javascript:showDataEficaciaPeru(${i})"  style="color: #333333; font-weight: bold">✓ ${arrayEficaciaPeru[i]}</a></br>`;
  }
});

/* Mexico */
const visualizar8 = document.getElementById('proteccion-mexico');
visualizar8.addEventListener('click', () => {
  document.getElementById('respuestaproteccion-mexico').innerHTML = '';
  document.getElementById('bloqueproteccion-mexico').classList.remove('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['MEX'].indicators);
  const arrayProteccionMexico = dataindicadores.proteccionSocial;
  for (let i = 0; i < arrayProteccionMexico.length; i++) {
    document.getElementById('respuestaproteccion-mexico').innerHTML += `<a href="javascript:showDataProteccionMexico(${i})"  style="color: #333333; font-weight: bold">✓ ${arrayProteccionMexico[i]}</a></br>`;
  }
});

const showDataProteccionMexico = (x) => {
  document.getElementById('contenedor3-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('respuestaproteccion-mexico').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  if (x === 1) {
    dataFiltro = listarTodo('MEX', 'per_allsp.cov_pop_tot');
    dataFiltroYear = listarTodo('MEX', 'per_allsp.cov_pop_tot');
  } else if (x === 2) {
    dataFiltro = listarTodo('MEX', 'per_allsp.ben_q1_tot');
    dataFiltroYear = listarTodo('MEX', 'per_allsp.ben_q1_tot');
  } else {
    dataFiltro = listarTodo('MEX', 'per_lm_alllm.ben_q1_tot');
    dataFiltroYear = listarTodo('MEX', 'per_lm_alllm.ben_q1_tot');
  }
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};

const visualizar9 = document.getElementById('salud-mexico');
visualizar9.addEventListener('click', () => {
  document.getElementById('respuestasalud-mexico').innerHTML = '';
  document.getElementById('bloquesalud-mexico').classList.remove('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['MEX'].indicators);
  const arraySaludMexico = dataindicadores.salud;
  for (let i = 0; i < arraySaludMexico.length; i++) {
    document.getElementById('respuestasalud-mexico').innerHTML += `<a href="#"  style="color: #333333; font-weight: bold">✓ ${arraySaludMexico[i]}</a></br>`;
  }
});

const visualizar10 = document.getElementById('genero-mexico');
visualizar10.addEventListener('click', () => {
  document.getElementById('respuestagenero-mexico').innerHTML = '';
  document.getElementById('bloquegenero-mexico').classList.remove('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['MEX'].indicators);
  const arrayGeneroMexico = dataindicadores.genero;
  for (let i = 0; i < arrayGeneroMexico.length; i++) {
    document.getElementById('respuestagenero-mexico').innerHTML += `<a href="#"  style="color: #333333; font-weight: bold">✓ ${arrayGeneroMexico[i]}</a></br>`;
  }
});

const visualizar11 = document.getElementById('sector-mexico');
visualizar11.addEventListener('click', () => {
  document.getElementById('respuestasector-mexico').innerHTML = '';
  document.getElementById('bloquesector-mexico').classList.remove('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['MEX'].indicators);
  const arraySectorMexico = dataindicadores.sector;
  for (let i = 0; i < arraySectorMexico.length; i++) {
    document.getElementById('respuestasector-mexico').innerHTML += `<a href="#"  style="color: #333333; font-weight: bold">✓ ${arraySectorMexico[i]}</a></br>`;
  }
});

const visualizar12 = document.getElementById('educacion-mexico');
visualizar12.addEventListener('click', () => {
  document.getElementById('respuestaeducacion-mexico').innerHTML = '';
  document.getElementById('bloqueeducacion-mexico').classList.remove('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['MEX'].indicators);
  const arrayEducacionMexico = dataindicadores.educacion;
  for (let i = 0; i < arrayEducacionMexico.length; i++) {
    document.getElementById('respuestaeducacion-mexico').innerHTML += `<a href="#"  style="color: #333333; font-weight: bold">✓ ${arrayEducacionMexico[i]}</a></br>`;
  }
});

const visualizar13 = document.getElementById('desarrollo-mexico');
visualizar13.addEventListener('click', () => {
  document.getElementById('respuestadesarrollo-mexico').innerHTML = '';
  document.getElementById('bloquedesarrollo-mexico').classList.remove('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['MEX'].indicators);
  const arrayDesarrolloMexico = dataindicadores.desarrollo;
  for (let i = 0; i < arrayDesarrolloMexico.length; i++) {
    document.getElementById('respuestadesarrollo-mexico').innerHTML += `<a href="#"  style="color: #333333; font-weight: bold">✓ ${arrayDesarrolloMexico[i]}</a></br>`;
  }
});

const visualizar14 = document.getElementById('sectorpublico-mexico');
visualizar14.addEventListener('click', () => {
  document.getElementById('respuestasectorpublico-mexico').innerHTML = '';
  document.getElementById('bloquesectorpublico-mexico').classList.remove('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['MEX'].indicators);
  const arraySectorPublicoMexico = dataindicadores.sectorPublico;
  for (let i = 0; i < arraySectorPublicoMexico.length; i++) {
    document.getElementById('respuestasectorpublico-mexico').innerHTML += `<a href="#"  style="color: #333333; font-weight: bold">✓ ${arraySectorPublicoMexico[i]}</a></br>`;
  }
});

const visualizar15 = document.getElementById('eficacia-mexico');
visualizar15.addEventListener('click', () => {
  document.getElementById('respuestaeficacia-mexico').innerHTML = '';
  document.getElementById('bloqueeficacia-mexico').classList.remove('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['MEX'].indicators);
  const arrayEficaciaMexico = dataindicadores.eficacia;
  for (let i = 0; i < arrayEficaciaMexico.length; i++) {
    document.getElementById('respuestaeficacia-mexico').innerHTML += `<a href="#"  style="color: #333333; font-weight: bold">✓ ${arrayEficaciaMexico[i]}</a></br>`;
  }
});

/* Chile */
const visualizar16 = document.getElementById('proteccion-chile');
visualizar16.addEventListener('click', () => {
  document.getElementById('respuestaproteccion-chile').innerHTML = '';
  document.getElementById('bloqueproteccion-chile').classList.remove('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['CHL'].indicators);
  const arrayProteccionChile = dataindicadores.proteccionSocial;
  for (let i = 0; i < arrayProteccionChile.length; i++) {
    document.getElementById('respuestaproteccion-chile').innerHTML += `<a href="#"  style="color: #333333; font-weight: bold">✓ ${arrayProteccionChile[i]}</a></br>`;
  }
});

const visualizar17 = document.getElementById('salud-chile');
visualizar17.addEventListener('click', () => {
  document.getElementById('respuestasalud-chile').innerHTML = '';
  document.getElementById('bloquesalud-chile').classList.remove('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['CHL'].indicators);
  const arraySaludChile = dataindicadores.salud;
  for (let i = 0; i < arraySaludChile.length; i++) {
    document.getElementById('respuestasalud-chile').innerHTML += `<a href="#"  style="color: #333333; font-weight: bold">✓ ${arraySaludChile[i]}</a></br>`;
  }
});

const visualizar18 = document.getElementById('genero-chile');
visualizar18.addEventListener('click', () => {
  document.getElementById('respuestagenero-chile').innerHTML = '';
  document.getElementById('bloquegenero-chile').classList.remove('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['CHL'].indicators);
  const arrayGeneroChile = dataindicadores.genero;
  for (let i = 0; i < arrayGeneroChile.length; i++) {
    document.getElementById('respuestagenero-chile').innerHTML += `<a href="#"  sstyle="color: #333333; font-weight: bold">✓ ${arrayGeneroChile[i]}</a></br>`;
  }
});

const visualizar19 = document.getElementById('sector-chile');
visualizar19.addEventListener('click', () => {
  document.getElementById('respuestasector-chile').innerHTML = '';
  document.getElementById('bloquesector-chile').classList.remove('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['CHL'].indicators);
  const arraySectorChile = dataindicadores.sector;
  for (let i = 0; i < arraySectorChile.length; i++) {
    document.getElementById('respuestasector-chile').innerHTML += `<a href="#"  style="color: #333333; font-weight: bold">✓ ${arraySectorChile[i]}</a></br>`;
  }
});

const visualizar20 = document.getElementById('educacion-chile');
visualizar20.addEventListener('click', () => {
  document.getElementById('respuestaeducacion-chile').innerHTML = '';
  document.getElementById('bloqueeducacion-chile').classList.remove('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['CHL'].indicators);
  const arrayEducacionChile = dataindicadores.educacion;
  for (let i = 0; i < arrayEducacionChile.length; i++) {
    document.getElementById('respuestaeducacion-chile').innerHTML += `<a href="#"  style="color: #333333; font-weight: bold">✓ ${arrayEducacionChile[i]}</a></br>`;
  }
});

const visualizar21 = document.getElementById('desarrollo-chile');
visualizar21.addEventListener('click', () => {
  document.getElementById('respuestadesarrollo-chile').innerHTML = '';
  document.getElementById('bloquedesarrollo-chile').classList.remove('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['CHL'].indicators);
  const arrayDesarrolloChile = dataindicadores.desarrollo;
  for (let i = 0; i < arrayDesarrolloChile.length; i++) {
    document.getElementById('respuestadesarrollo-chile').innerHTML += `<a href="#"  style="color: #333333; font-weight: bold">✓ ${arrayDesarrolloChile[i]}</a></br>`;
  }
});

const visualizar22 = document.getElementById('sectorpublico-chile');
visualizar22.addEventListener('click', () => {
  document.getElementById('respuestasectorpublico-chile').innerHTML = '';
  document.getElementById('bloquesectorpublico-chile').classList.remove('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['CHL'].indicators);
  const arraySectorPublicoChile = dataindicadores.sectorPublico;
  for (let i = 0; i < arraySectorPublicoChile.length; i++) {
    document.getElementById('respuestasectorpublico-chile').innerHTML += `<a href="#"  style="color: #333333; font-weight: bold">✓ ${arraySectorPublicoChile[i]}</a></br>`;
  }
});

const visualizar23 = document.getElementById('eficacia-chile');
visualizar23.addEventListener('click', () => {
  document.getElementById('respuestaeficacia-chile').innerHTML = '';
  document.getElementById('bloqueeficacia-chile').classList.remove('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['CHL'].indicators);
  const arrayEficaciaChile = dataindicadores.eficacia;
  for (let i = 0; i < arrayEficaciaChile.length; i++) {
    document.getElementById('respuestaeficacia-chile').innerHTML += `<a href="#"  style="color: #333333; font-weight: bold">✓ ${arrayEficaciaChile[i]}</a></br>`;
  }
});

/* Brazil */
const visualizar24 = document.getElementById('proteccion-brazil');
visualizar24.addEventListener('click', () => {
  document.getElementById('respuestaproteccion-brazil').innerHTML = '';
  document.getElementById('bloqueproteccion-brazil').classList.remove('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['BRA'].indicators);
  const arrayProteccionBrazil = dataindicadores.proteccionSocial;
  for (let i = 0; i < arrayProteccionBrazil.length; i++) {
    document.getElementById('respuestaproteccion-brazil').innerHTML += `<a href="#"  style="color: #333333; font-weight: bold">✓ ${arrayProteccionBrazil[i]}</a></br>`;
  }
});

const visualizar25 = document.getElementById('salud-brazil');
visualizar25.addEventListener('click', () => {
  document.getElementById('respuestasalud-brazil').innerHTML = '';
  document.getElementById('bloquesalud-brazil').classList.remove('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['BRA'].indicators);
  const arraySaludBrazil = dataindicadores.salud;
  for (let i = 0; i < arraySaludBrazil.length; i++) {
    document.getElementById('respuestasalud-brazil').innerHTML += `<a href="#"  style="color: #333333; font-weight: bold">✓ ${arraySaludBrazil[i]}</a></br>`;
  }
});

const visualizar26 = document.getElementById('genero-brazil');
visualizar26.addEventListener('click', () => {
  document.getElementById('respuestagenero-brazil').innerHTML = '';
  document.getElementById('bloquegenero-brazil').classList.remove('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['BRA'].indicators);
  const arrayGeneroBrazil = dataindicadores.genero;
  for (let i = 0; i < arrayGeneroBrazil.length; i++) {
    document.getElementById('respuestagenero-brazil').innerHTML += `<a href="#"  style="color: #333333; font-weight: bold">✓ ${arrayGeneroBrazil[i]}</a></br>`;
  }
});

const visualizar27 = document.getElementById('sector-brazil');
visualizar27.addEventListener('click', () => {
  document.getElementById('respuestasector-brazil').innerHTML = '';
  document.getElementById('bloquesector-brazil').classList.remove('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['BRA'].indicators);
  const arraySectorBrazil = dataindicadores.sector;
  for (let i = 0; i < arraySectorBrazil.length; i++) {
    document.getElementById('respuestasector-brazil').innerHTML += `<a href="#"  style="color: #333333; font-weight: bold">✓ ${arraySectorBrazil[i]}</a></br>`;
  }
});

const visualizar28 = document.getElementById('educacion-brazil');
visualizar28.addEventListener('click', () => {
  document.getElementById('respuestaeducacion-brazil').innerHTML = '';
  document.getElementById('bloqueeducacion-brazil').classList.remove('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['BRA'].indicators);
  const arrayEducacionBrazil = dataindicadores.educacion;
  for (let i = 0; i < arrayEducacionBrazil.length; i++) {
    document.getElementById('respuestaeducacion-brazil').innerHTML += `<a href="#"  style="color: #333333; font-weight: bold">✓ ${arrayEducacionBrazil[i]}</a></br>`;
  }
});

const visualizar29 = document.getElementById('desarrollo-brazil');
visualizar29.addEventListener('click', () => {
  document.getElementById('respuestadesarrollo-brazil').innerHTML = '';
  document.getElementById('bloquedesarrollo-brazil').classList.remove('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['BRA'].indicators);
  const arrayDesarrolloBrazil = dataindicadores.desarrollo;
  for (let i = 0; i < arrayDesarrolloBrazil.length; i++) {
    document.getElementById('respuestadesarrollo-brazil').innerHTML += `<a href="#"  style="color: #333333; font-weight: bold">✓ ${arrayDesarrolloBrazil[i]}</a></br>`;
  }
});

const visualizar30 = document.getElementById('sectorpublico-brazil');
visualizar30.addEventListener('click', () => {
  document.getElementById('respuestasectorpublico-brazil').innerHTML = '';
  document.getElementById('bloquesectorpublico-brazil').classList.remove('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['BRA'].indicators);
  const arraySectorPublicoBrazil = dataindicadores.sectorPublico;
  for (let i = 0; i < arraySectorPublicoBrazil.length; i++) {
    document.getElementById('respuestasectorpublico-brazil').innerHTML += `<a href="#"  style="color: #333333; font-weight: bold">✓ ${arraySectorPublicoBrazil[i]}</a></br>`;
  }
});

const visualizar31 = document.getElementById('eficacia-brazil');
visualizar31.addEventListener('click', () => {
  document.getElementById('respuestaeficacia-brazil').innerHTML = '';
  document.getElementById('bloqueeficacia-brazil').classList.remove('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('bloqueproteccion-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('bloquesalud-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  const dataindicadores = worldbank.indicatorsPais(data['BRA'].indicators);
  const arrayEficaciaBrazil = dataindicadores.eficacia;
  for (let i = 0; i < arrayEficaciaBrazil.length; i++) {
    document.getElementById('respuestaeficacia-brazil').innerHTML += `<a href="#"  style="color: #333333; font-weight: bold">✓ ${arrayEficaciaBrazil[i]}</a></br>`;
  }
});

const botonDesc= document.getElementById("boton-desc");
botonDesc.addEventListener('click',()=>{
  print2(dataFiltro);
});
google.charts.load('current', {'packages':['corechart']});
const botonAsc= document.getElementById("boton-asc");
botonAsc.addEventListener('click',()=>{
  print(dataFiltro);

  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales'],
    ['2004',  1000],
    ['2005',  1170],
    ['2006',  660],
    ['2007',  1030]
  ]);

  var options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById("container-year1"));

  chart.draw(data, options);
});



     