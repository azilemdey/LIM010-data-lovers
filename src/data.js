/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//  return 'example';
// };


// window.example = example;

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


const print = (dataFiltro) => {
  let tableDataProteccionPeru = document.getElementById('datayear');
  console.log('Filtro', dataFiltro);
  console.log(dataFiltro.data);
  //Let llaves=array de años
  let llaves = Object.keys(dataFiltro.data);
  let html = `<tr><td>Año</td><td>Valor</td></tr>`;
  let promedio = 0;
  let total = llaves.length;
  let dataAños = '';
  for (let i = 0; llaves.length > i; i++) {
    console.log(llaves[i], dataFiltro.data[llaves[i]]);
    dataAños=dataFiltro.data[llaves[i]];
    if (dataAños===""){
      dataAños = 0;
    }else{
      dataAños = (parseFloat(dataAños)).toFixed(2);
    }
    
    html += `<tr><td>${llaves[i]}</td><td>${dataAños}</td></tr>`;
    let getData = dataFiltro.data[llaves[i]];
    if (getData === '') {
      promedio = promedio + 0;
    } else {
      let entero = parseInt(getData);
      promedio = promedio + entero;
    }
  }
  let calculo = parseFloat((promedio / total)).toFixed(2);
  html += `<tr><td>PROMEDIO</td><td>${calculo}</td></tr>`
  tableDataProteccionPeru.innerHTML = html;
};
const print2 = (dataFiltro) => {
  let tableDataProteccionPeru = document.getElementById('datayear');
  console.log('Filtro', dataFiltro);
  console.log(dataFiltro.data);
  //Let llaves=array de años
  let llaves = Object.keys(dataFiltro.data).reverse();
  let html = `<tr><td>Año</td><td>Valor</td></tr>`;
  let promedio = 0;
  let total = llaves.length;
  let dataAños = '';
  for (let i = 0; llaves.length > i; i++) {
    console.log(llaves[i], dataFiltro.data[llaves[i]]);
    dataAños=dataFiltro.data[llaves[i]];
    if (dataAños===""){
      dataAños = 0;
    }else{
      dataAños = (parseFloat(dataAños)).toFixed(2);
    }
    
    html += `<tr><td>${llaves[i]}</td><td>${dataAños}</td></tr>`;
    let getData = dataFiltro.data[llaves[i]];
    if (getData === '') {
      promedio = promedio + 0;
    } else {
      let entero = parseInt(getData);
      promedio = promedio + entero;
    }
  }
  let calculo = parseFloat((promedio / total)).toFixed(2);
  html += `<tr><td>PROMEDIO</td><td>${calculo}</td></tr>`
  tableDataProteccionPeru.innerHTML = html;
};
const printSelector = (dataFiltroYear) => {
  let tableDataYearProteccionPeru = document.getElementById('filtroyear');
  let llaves = Object.keys(dataFiltroYear.data);
  let html = '<option>Año</option>';
  for (let i = 0; llaves.length > i; i++) {
    console.log(llaves[i]);
    html += `<option>${llaves[i]}</option>`;
  }
  tableDataYearProteccionPeru.innerHTML = html;
};


window.worldbank = {
  indicatorsPais: indicatorsPais
};
