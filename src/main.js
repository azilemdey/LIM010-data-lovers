/* DOM eventos */ 
let i = 0;
const button = document.getElementById('boton');
button.addEventListener('click', (event) => {
  event.preventDefault();
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
  }
  if (i < 3) {
    document.getElementById('pass').disabled = true;
    document.getElementById('name').disabled = true;
    document.getElementById('boton').disabled = true;
  }
});


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

// Template para ingresar el nombre de los paises al select

let array = Object.entries(WORLDBANK);
let template = '<option value="" disabled selected>Países:</option>';
for (let i = 0; i < array.length; i++) {
  template += `<option value=${array[i][1].indicators[0].countryName}>${array[i][1].indicators[0].countryName}</option>`
};
const country = document.getElementById('country');
country.innerHTML = template;


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
    }
  }
});

/* Peru */
const data = WORLDBANK;
let sesionActualIndicador = [];
let dataindicadores = [];
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

const showDataProteccionPeru = (x) => {
  document.getElementById('contenedor2-peru').classList.add('hide');
  document.getElementById('bloqueproteccion-peru').classList.add('hide');
  document.getElementById('respuestaproteccion-peru').classList.add('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorProteccion1[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};

const print = (dataFiltro, nombretabla) => {
  let tableDataProteccionPeru = document.getElementById(nombretabla);
  let llaves = Object.keys(dataFiltro.data);
  let html = '<tr><td>Año</td><td>Valor</td></tr>';
  for (let i = 0; llaves.length > i; i++) {
    html += `<tr><td>${llaves[i]}</td><td>${dataFiltro.data[llaves[i]]}</td></tr>`;
  }
  let calculo = promedio(dataFiltro, llaves);
  html += `<tr><td>Promedio</td><td>${calculo}</td></tr>`;
  tableDataProteccionPeru.innerHTML = html;
};

const botonYear = document.getElementById('filtroyear');
botonYear.addEventListener('change', () => {
  let valor = botonYeardata.value;
  let copia = filtroYear(sesionActualIndicador, valor);
  print(copia, 'datayear2');
});

const botonYeardata = document.getElementById('filtroyear');
// const botonYear = document.getElementById('filtrar-poranio');
botonYeardata.addEventListener('click', () => {
  let valor = botonYeardata.value;
  let copia = filtroYear(sesionActualIndicador, valor);
  print(copia, 'datayear2');
});

const botonYear1 = document.getElementById('filtrar-porrango');
const desde = document.getElementById('desde');
const hasta = document.getElementById('hasta');
botonYear1.addEventListener('click', () => {
  document.getElementById('texto-porrango').innerHTML = '';
  let desdeEntero = parseInt(desde.value);
  let hastaEntero = parseInt(hasta.value);
  console.log(desdeEntero, hastaEntero);
  if (desdeEntero < hastaEntero) {
    let copia = filtrodesdeToHasta(sesionActualIndicador, desdeEntero, hastaEntero);
    print(copia, 'datayear2');
  } else {
    document.getElementById('texto-porrango').innerHTML = 'El hasta debe ser mayor que el desde !!!';
  }
});
const printSelector = (dataFiltroYear) => {
  let tableDataYearProteccionPeru = document.getElementById('filtroyear');
  let llaves = Object.keys(dataFiltroYear.data);
  let html = '<option>Año</option>';
  for (let i = 0; llaves.length > i; i++) {
    html += `<option>${llaves[i]}</option>`;
  }
  tableDataYearProteccionPeru.innerHTML = html;
};

const printDA = (llaves) => {
  let tableDataProteccionPeru = document.getElementById('datayear');
  let dataFiltro = sesionActualIndicador;
  let html = '<tr><td>Año</td><td>Valor</td></tr>';
  for (let i = 0; llaves.length > i; i++) {
    html += `<tr><td>${llaves[i]}</td><td>${dataFiltro.data[llaves[i]]}</td></tr>`;
  }

  html += promedio(dataFiltro, llaves);
  tableDataProteccionPeru.innerHTML = html;
};

const ascendentebutton = document.getElementById('boton-asc');
ascendentebutton.addEventListener('click', () => {
  let filtro = ascendente(sesionActualIndicador);
  printDA(filtro);
});
const descendentebutton = document.getElementById('boton-desc');
descendentebutton.addEventListener('click', () => {
  let filtro = descendente(sesionActualIndicador);
  printDA(filtro);
});

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
  let list = dataIndicadorSalud1[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};

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

const showDataGeneroPeru = (x) => {
  document.getElementById('contenedor2-peru').classList.add('hide');
  document.getElementById('bloquegenero-peru').classList.add('hide');
  document.getElementById('respuestagenero-peru').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorGenero1[x + 1];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};

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

const showDataSectorPeru = (x) => {
  document.getElementById('contenedor2-peru').classList.add('hide');
  document.getElementById('bloquesector-peru').classList.add('hide');
  document.getElementById('respuestasector-peru').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorSector1[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};



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

const showDataEducacionPeru = (x) => {
  document.getElementById('contenedor2-peru').classList.add('hide');
  document.getElementById('bloqueeducacion-peru').classList.add('hide');
  document.getElementById('respuestaeducacion-peru').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorEducacion1[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};

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

const showDataDesarrolloPeru = (x) => {
  document.getElementById('contenedor2-peru').classList.add('hide');
  document.getElementById('bloquedesarrollo-peru').classList.add('hide');
  document.getElementById('respuestadesarrollo-peru').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorDesarrollo1[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};

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

const showDataSectorPublicoPeru = (x) => {
  document.getElementById('contenedor2-peru').classList.add('hide');
  document.getElementById('bloquesectorpublico-peru').classList.add('hide');
  document.getElementById('respuestasectorpublico-peru').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorSectorPublico1[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};


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

const showDataEficaciaPeru = (x) => {
  document.getElementById('contenedor2-peru').classList.add('hide');
  document.getElementById('bloqueeficacia-peru').classList.add('hide');
  document.getElementById('respuestaeficacia-peru').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorEficacia1[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};


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
  let list = dataIndicadorProteccion2[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
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
    document.getElementById('respuestasalud-mexico').innerHTML += `<a href="javascript:showDataSaludMexico(${i})"  style="color: #333333; font-weight: bold">✓ ${arraySaludMexico[i]}</a></br>`;
  }
});

const showDataSaludMexico = (x) => {
  document.getElementById('contenedor3-mexico').classList.add('hide');
  document.getElementById('bloquesalud-mexico').classList.add('hide');
  document.getElementById('respuestasalud-mexico').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorSalud2[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};


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
    document.getElementById('respuestagenero-mexico').innerHTML += `<a href="javascript:showDataGeneroMexico(${i})"  style="color: #333333; font-weight: bold">✓ ${arrayGeneroMexico[i]}</a></br>`;
  }
});

const showDataGeneroMexico = (x) => {
  document.getElementById('contenedor3-mexico').classList.add('hide');
  document.getElementById('bloquegenero-mexico').classList.add('hide');
  document.getElementById('respuestagenero-mexico').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorGenero2[x + 1];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};

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
    document.getElementById('respuestasector-mexico').innerHTML += `<a href="javascript:showDataSectorMexico(${i})"  style="color: #333333; font-weight: bold">✓ ${arraySectorMexico[i]}</a></br>`;
  }
});

const showDataSectorMexico = (x) => {
  document.getElementById('contenedor3-mexico').classList.add('hide');
  document.getElementById('bloquesector-mexico').classList.add('hide');
  document.getElementById('respuestasector-mexico').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorSector2[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};

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
    document.getElementById('respuestaeducacion-mexico').innerHTML += `<a href="javascript:showDataEducacionMexico(${i})"  style="color: #333333; font-weight: bold">✓ ${arrayEducacionMexico[i]}</a></br>`;
  }
});
const showDataEducacionMexico = (x) => {
  document.getElementById('contenedor3-mexico').classList.add('hide');
  document.getElementById('bloqueeducacion-mexico').classList.add('hide');
  document.getElementById('respuestaeducacion-mexico').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorEducacion2[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};
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
    document.getElementById('respuestadesarrollo-mexico').innerHTML += `<a href="javascript:showDataDesarrolloMexico(${i})"  style="color: #333333; font-weight: bold">✓ ${arrayDesarrolloMexico[i]}</a></br>`;
  }
});

const showDataDesarrolloMexico = (x) => {
  document.getElementById('contenedor3-mexico').classList.add('hide');
  document.getElementById('bloquedesarrollo-mexico').classList.add('hide');
  document.getElementById('respuestadesarrollo-mexico').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorDesarrollo2[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};

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
    document.getElementById('respuestasectorpublico-mexico').innerHTML += `<a href="javascript:showDataSectorPublicoMexico(${i})"  style="color: #333333; font-weight: bold">✓ ${arraySectorPublicoMexico[i]}</a></br>`;
  }
});

const showDataSectorPublicoMexico = (x) => {
  document.getElementById('contenedor3-mexico').classList.add('hide');
  document.getElementById('bloquesectorpublico-mexico').classList.add('hide');
  document.getElementById('respuestasectorpublico-mexico').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorSectorPublico2[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};

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
    document.getElementById('respuestaeficacia-mexico').innerHTML += `<a href="javascript:showDataEficaciaMexico(${i})"  style="color: #333333; font-weight: bold">✓ ${arrayEficaciaMexico[i]}</a></br>`;
  }
});

const showDataEficaciaMexico = (x) => {
  document.getElementById('contenedor3-mexico').classList.add('hide');
  document.getElementById('bloqueeficacia-mexico').classList.add('hide');
  document.getElementById('respuestaeficacia-mexico').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorEficacia2[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};

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
    document.getElementById('respuestaproteccion-chile').innerHTML += `<a href="javascript:showDataProteccionChile(${i})"  style="color: #333333; font-weight: bold">✓ ${arrayProteccionChile[i]}</a></br>`;
  }
});

const showDataProteccionChile = (x) => {
  document.getElementById('contenedor4-chile').classList.add('hide');
  document.getElementById('bloqueproteccion-chile').classList.add('hide');
  document.getElementById('respuestaproteccion-chile').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorEficacia3[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};

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
    document.getElementById('respuestasalud-chile').innerHTML += `<a href="javascript:showDataSaludChile(${i})"  style="color: #333333; font-weight: bold">✓ ${arraySaludChile[i]}</a></br>`;
  }
});

const showDataSaludChile = (x) => {
  document.getElementById('contenedor4-chile').classList.add('hide');
  document.getElementById('bloquesalud-chile').classList.add('hide');
  document.getElementById('respuestasalud-chile').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorEficacia3[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};


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
    document.getElementById('respuestagenero-chile').innerHTML += `<a href="javascript:showDataGeneroChile(${i})"  sstyle="color: #333333; font-weight: bold">✓ ${arrayGeneroChile[i]}</a></br>`;
  }
});

const showDataGeneroChile = (x) => {
  document.getElementById('contenedor4-chile').classList.add('hide');
  document.getElementById('bloquegenero-chile').classList.add('hide');
  document.getElementById('respuestagenero-chile').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorEficacia3[x + 1];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};

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
    document.getElementById('respuestasector-chile').innerHTML += `<a href="javascript:showDataSectorChile(${i})"  style="color: #333333; font-weight: bold">✓ ${arraySectorChile[i]}</a></br>`;
  }
});

const showDataSectorChile = (x) => {
  document.getElementById('contenedor4-chile').classList.add('hide');
  document.getElementById('bloquesector-chile').classList.add('hide');
  document.getElementById('respuestasector-chile').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorSector3[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};

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
    document.getElementById('respuestaeducacion-chile').innerHTML += `<a href="javascript:showDataEducacionChile(${i})"  style="color: #333333; font-weight: bold">✓ ${arrayEducacionChile[i]}</a></br>`;
  }
});

const showDataEducacionChile = (x) => {
  document.getElementById('contenedor4-chile').classList.add('hide');
  document.getElementById('bloqueeducacion-chile').classList.add('hide');
  document.getElementById('respuestaeducacion-chile').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorEducacion3[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};

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
    document.getElementById('respuestadesarrollo-chile').innerHTML += `<a href="javascript:showDataDesarrolloChile(${i})"  style="color: #333333; font-weight: bold">✓ ${arrayDesarrolloChile[i]}</a></br>`;
  }
});

const showDataDesarrolloChile = (x) => {
  document.getElementById('contenedor4-chile').classList.add('hide');
  document.getElementById('bloquedesarrollo-chile').classList.add('hide');
  document.getElementById('respuestadesarrollo-chile').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorEducacion3[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};

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
    document.getElementById('respuestasectorpublico-chile').innerHTML += `<a href="javascript:showDataSectorPublicoChile(${i})"  style="color: #333333; font-weight: bold">✓ ${arraySectorPublicoChile[i]}</a></br>`;
  }
});

const showDataSectorPublicoChile = (x) => {
  document.getElementById('contenedor4-chile').classList.add('hide');
  document.getElementById('bloquesectorpublico-chile').classList.add('hide');
  document.getElementById('respuestasectorpublico-chile').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorSectorPublico3[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};
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
    document.getElementById('respuestaeficacia-chile').innerHTML += `<a href="javascript:showDataEficaciaChile(${i})"  style="color: #333333; font-weight: bold">✓ ${arrayEficaciaChile[i]}</a></br>`;
  }
});

const showDataEficaciaChile = (x) => {
  document.getElementById('contenedor4-chile').classList.add('hide');
  document.getElementById('bloqueeficacia-chile').classList.add('hide');
  document.getElementById('respuestaeficacia-chile').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorEficacia3[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};

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
    document.getElementById('respuestaproteccion-brazil').innerHTML += `<a href="javascript:showDataProteccionBrazil(${i})"  style="color: #333333; font-weight: bold">✓ ${arrayProteccionBrazil[i]}</a></br>`;
  }
});

const showDataProteccionBrazil = (x) => {
  document.getElementById('contenedor5-brazil').classList.add('hide');
  document.getElementById('bloqueproteccion-brazil').classList.add('hide');
  document.getElementById('respuestaproteccion-brazil').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorProteccion4[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};


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
    document.getElementById('respuestasalud-brazil').innerHTML += `<a href="javascript:showDataSaludBrazil(${i})"  style="color: #333333; font-weight: bold">✓ ${arraySaludBrazil[i]}</a></br>`;
  }
});

const showDataSaludBrazil = (x) => {
  document.getElementById('contenedor5-brazil').classList.add('hide');
  document.getElementById('bloquesalud-brazil').classList.add('hide');
  document.getElementById('respuestasalud-brazil').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorSalud4[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};

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
    document.getElementById('respuestagenero-brazil').innerHTML += `<a href="javascript:showDataGeneroBrazil(${i})"  style="color: #333333; font-weight: bold">✓ ${arrayGeneroBrazil[i]}</a></br>`;
  }
});

const showDataGeneroBrazil = (x) => {
  document.getElementById('contenedor5-brazil').classList.add('hide');
  document.getElementById('bloquegenero-brazil').classList.add('hide');
  document.getElementById('respuestagenero-brazil').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorGenero4[x + 1];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};

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
    document.getElementById('respuestasector-brazil').innerHTML += `<a href="javascript:showDataSectorBrazil(${i})"  style="color: #333333; font-weight: bold">✓ ${arraySectorBrazil[i]}</a></br>`;
  }
});

const showDataSectorBrazil = (x) => {
  document.getElementById('contenedor5-brazil').classList.add('hide');
  document.getElementById('bloquesector-brazil').classList.add('hide');
  document.getElementById('respuestasector-brazil').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorSector4[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};

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
    document.getElementById('respuestaeducacion-brazil').innerHTML += `<a href="javascript:showDataEducacionBrazil(${i})"  style="color: #333333; font-weight: bold">✓ ${arrayEducacionBrazil[i]}</a></br>`;
  }
});

const showDataEducacionBrazil = (x) => {
  document.getElementById('contenedor5-brazil').classList.add('hide');
  document.getElementById('bloqueeducacion-brazil').classList.add('hide');
  document.getElementById('respuestaeducacion-brazil').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorEducacion4[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};

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
    document.getElementById('respuestadesarrollo-brazil').innerHTML += `<a href="javascript:showDataDesarrolloBrazil(${i})"  style="color: #333333; font-weight: bold">✓ ${arrayDesarrolloBrazil[i]}</a></br>`;
  }
});

const showDataDesarrolloBrazil = (x) => {
  document.getElementById('contenedor5-brazil').classList.add('hide');
  document.getElementById('bloquedesarrollo-brazil').classList.add('hide');
  document.getElementById('respuestadesarrollo-brazil').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorDesarrollo4[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};

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
    document.getElementById('respuestasectorpublico-brazil').innerHTML += `<a href="javascript:showDataSectorPublicoBrazil(${i})"  style="color: #333333; font-weight: bold">✓ ${arraySectorPublicoBrazil[i]}</a></br>`;
  }
});

const showDataSectorPublicoBrazil = (x) => {
  document.getElementById('contenedor5-brazil').classList.add('hide');
  document.getElementById('bloquesectorpublico-brazil').classList.add('hide');
  document.getElementById('respuestasectorpublico-brazil').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorSectorPublico4[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};

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
    document.getElementById('respuestaeficacia-brazil').innerHTML += `<a href="javascript:showDataEficaciaBrazil(${i})"  style="color: #333333; font-weight: bold">✓ ${arrayEficaciaBrazil[i]}</a></br>`;
  }
});

const showDataEficaciaBrazil = (x) => {
  document.getElementById('contenedor5-brazil').classList.add('hide');
  document.getElementById('bloqueeficacia-brazil').classList.add('hide');
  document.getElementById('respuestaeficacia-brazil').classList.remove('hide');
  document.getElementById('country').classList.add('hide');
  document.getElementById('selector').classList.add('hide');
  document.getElementById('contiene-boton').classList.add('hide');
  document.getElementById('contiene-boton1').classList.remove('hide');
  document.getElementById('mostraryear').classList.remove('hide');
  let dataFiltro;
  let dataFiltroYear;
  let list = dataIndicadorEficacia4[x];
  dataFiltro = listarTodo(data, list.pais, list.indicador);
  dataFiltroYear = listarTodo(data, list.pais, list.indicador);
  print(dataFiltro, 'datayear');
  printSelector(dataFiltroYear);
};

google.charts.load('current', {'packages': ['corechart']});
const rango = document.getElementById('rango');
rango.addEventListener('click', () => {
  const desde = document.getElementById('desde').value;
  const hasta = document.getElementById('hasta').value;
  const filtrados = filtrodesdeToHasta(sesionActualIndicador, desde, hasta).data;
  let result = Object.keys(filtrados).map(function(key) {
    return [Number(key), filtrados[key]];
  });

  console.log(result);
  const filternumber = convertNumber(result);
  console.log(filtrodesdeToHasta(sesionActualIndicador, desde, hasta).data);
  console.log(convertNumber(filtrados));
  const data = google.visualization.arrayToDataTable(filternumber);

  const options = {
    title: 'GRAFICA POR AÑOS',
    curveType: 'function',
    legend: {
      position: 'bottom'
    }
  };

  const chart = new google.visualization.LineChart(document.getElementById('grafico'));

  chart.draw(data, options);
});

const convertNumber = (array) => {
  let nuevoArray = [
    ['anios', 'valor']
  ];
  for (let i = 0; i < array.length; i++) {
    if (array[i][1] === '') {
      nuevoArray.push([parseInt(array[i][0]), 0]);
    } else {
      nuevoArray.push([parseInt(array[i][0]), parseFloat(array[i][1])]);
    }
  }
  return nuevoArray;
};
