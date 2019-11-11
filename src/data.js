/* Manejo de data */
// 2 //
const indicatorsPais = (indicatorsPais) => {
  let proteccionSocial = [];
  let salud = [];
  let genero = [];
  let sector = [];
  let educacion = [];
  let desarrollo = [];
  let sectorPublico = [];
  let eficacia = [];
  for (let i = 0; i < indicatorsPais.length; i++) {
    if (indicatorsPais[i].indicatorCode.split('_')[0] === 'per') {
      proteccionSocial.push(indicatorsPais[i].indicatorName);
    } else if (indicatorsPais[i].indicatorCode.split('.')[0] === 'SH' || indicatorsPais[i].indicatorCode.slice(0, 6) === 'SP.UWT') {
      salud.push(indicatorsPais[i].indicatorName);
    } else if (indicatorsPais[i].indicatorCode.split('.')[0] === 'SL' || indicatorsPais[i].indicatorCode.split('.')[0] === 'SP') {
      genero.push(indicatorsPais[i].indicatorName);
    } else if (indicatorsPais[i].indicatorCode.split('.')[0] === 'IC' || indicatorsPais[i].indicatorCode.split('.')[0] === 'HD') {
      sector.push(indicatorsPais[i].indicatorName);
    } else if (indicatorsPais[i].indicatorCode.split('.')[0] === 'SE') {
      educacion.push(indicatorsPais[i].indicatorName);
    } else if (indicatorsPais[i].indicatorCode.split('.')[0] === 'SG') {
      desarrollo.push(indicatorsPais[i].indicatorName);
    } else if (indicatorsPais[i].indicatorCode.split('.')[0] === 'MS') {
      sectorPublico.push(indicatorsPais[i].indicatorName);
    } else if (indicatorsPais[i].indicatorCode.split('.')[0] === 'DT') {
      eficacia.push(indicatorsPais[i].indicatorName);
    }
  }
  console.log(indicatorsPais[i].indicatorCode.split('_')[0]);
  return {
    proteccionSocial: proteccionSocial,
    salud: salud,
    genero: genero,
    sector: sector,
    educacion: educacion,
    desarrollo: desarrollo,
    sectorPublico: sectorPublico,
    eficacia: eficacia
  };
};

const listarTodo = (data, pais, indicador) => {
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

// 3 //
const ascendente = (sesionActualIndicador) => {
  let filtro = Object.keys(sesionActualIndicador.data).sort((des, asc) => {
    if (asc > des) {
      return -1;
    }
  });
  return filtro;
};

const descendente = (sesionActualIndicador) => {
  let filtro = Object.keys(sesionActualIndicador.data).sort((des, asc) => {
    if (des > asc) {
      return -1;
    }
  });
  return filtro;
};

// 4 //
const promedio = (dataFiltro, llaves) => {
  let promedio = 0;
  let total = llaves.length;
  for (let i = 0; llaves.length > i; i++) {
    let getData = dataFiltro.data[llaves[i]];
    if (getData === '') {
      promedio = promedio + 0;
    } else {
      let entero = parseInt(getData);
      promedio = promedio + entero;
    }
    console.log(getData);
  }
  let calculo = parseFloat((promedio / total)).toFixed(2);
  return calculo;
};

// 5 //
const filtroYear = (sesionActualIndicador, x) => {
  let valor = sesionActualIndicador.data[x];
  let copia = Object.assign({}, sesionActualIndicador);
  let entero = parseInt(x);
  copia.data = {};
  copia.data[entero] = valor;
  return copia;
};

const filtrodesdeToHasta = (sesionActualIndicador, desde, hasta) => {
  let copia = Object.assign({}, sesionActualIndicador);
  let llaves = Object.keys(copia.data);
  let recopilacion = {};
  for (let i = 0; llaves.length > i; i++) {
    let indiceEntero = parseInt(llaves[i]);
    if (desde <= indiceEntero && hasta >= indiceEntero) {
      recopilacion[indiceEntero] = copia.data[indiceEntero];
    }
  }
  copia.data = recopilacion;
  return copia;
};

window.worldbank = {
  indicatorsPais: indicatorsPais,
  listarTodo: listarTodo,
  promedio: promedio,
  ascendente: ascendente,
  descendente: descendente,
  filtroYear: filtroYear,
  filtrodesdeToHasta: filtrodesdeToHasta
};
