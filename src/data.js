/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//  return 'example';
// };


// window.example = example;

let yearArray=[];
for(i=1960; i<2018; i++){
yearArray.push(i)};
console.log(yearArray);


const indicatorsPeru = (indicatorsPeru) => {
  let proteccionSocialPeru = [];
  let saludPeru = [];
  let generoPeru = [];
  let sectorPeru = [];
  let educacionPeru = [];
  let desarrolloPeru = [];
  let eficaciaPeru = [];
  for (let i = 0; i < indicatorsPeru.length; i++) {
    if (indicatorsPeru[i].indicatorCode.split('_')[0] === 'per') {
      proteccionSocialPeru.push(indicatorsPeru[i].indicatorName);
    } else if (indicatorsPeru[i].indicatorCode.split('.')[0] === 'SH' || indicatorsPeru[i].indicatorCode.slice(0, 6) === 'SP.UWT') {
      saludPeru.push(indicatorsPeru[i].indicatorName);
    } else if (indicatorsPeru[i].indicatorCode.split('.')[0] === 'SL' || indicatorsPeru[i].indicatorCode.split('.')[0] === 'SP') {
      generoPeru.push(indicatorsPeru[i].indicatorName);
    } else if (indicatorsPeru[i].indicatorCode.split('.')[0] === 'IC' || indicatorsPeru[i].indicatorCode.split('.')[0] === 'HD') {
      sectorPeru.push(indicatorsPeru[i].indicatorName);
    } else if (indicatorsPeru[i].indicatorCode.split('.')[0] === 'SE') {
      educacionPeru.push(indicatorsPeru[i].indicatorName);
    } else if (indicatorsPeru[i].indicatorCode.split('.')[0] === 'SG') {
      desarrolloPeru.push(indicatorsPeru[i].indicatorName);
    } else if (indicatorsPeru[i].indicatorCode.split('.')[0] === 'DT') {
      eficaciaPeru.push(indicatorsPeru[i].indicatorName);
    }
  }
  return {proteccionSocialPeru: proteccionSocialPeru,
    saludPeru: saludPeru,
    generoPeru: generoPeru,
    sectorPeru: sectorPeru,
    educacionPeru: educacionPeru,
    desarrolloPeru: desarrolloPeru,
    eficaciaPeru: eficaciaPeru}
};

const indicatorsMexico = (indicatorsMexico) => {
  let proteccionSocialMexico = [];
  let saludMexico = [];
  let generoMexico = [];
  let sectorMexico = [];
  let educacionMexico = [];
  let desarrolloMexico = [];
  let eficaciaMexico = [];
  for (let i = 0; i < indicatorsMexico.length; i++) {
    if (indicatorsMexico[i].indicatorCode.split('_')[0] === 'per') {
      proteccionSocialMexico.push(indicatorsMexico[i].indicatorName);
    } else if (indicatorsMexico[i].indicatorCode.split('.')[0] === 'SH' || indicatorsMexico[i].indicatorCode.slice(0, 6) === 'SP.UWT') {
      saludMexico.push(indicatorsMexico[i].indicatorName);
    } else if (indicatorsMexico[i].indicatorCode.split('.')[0] === 'SL' || indicatorsMexico[i].indicatorCode.split('.')[0] === 'SP') {
      generoMexico.push(indicatorsMexico[i].indicatorName);
    } else if (indicatorsMexico[i].indicatorCode.split('.')[0] === 'IC' || indicatorsMexico[i].indicatorCode.split('.')[0] === 'HD') {
      sectorMexico.push(indicatorsMexico[i].indicatorName);
    } else if (indicatorsMexico[i].indicatorCode.split('.')[0] === 'SE') {
      educacionMexico.push(indicatorsMexico[i].indicatorName);
    } else if (indicatorsMexico[i].indicatorCode.split('.')[0] === 'SG') {
      desarrolloMexico.push(indicatorsMexico[i].indicatorName);
    } else if (indicatorsMexico[i].indicatorCode.split('.')[0] === 'DT') {
      eficaciaMexico.push(indicatorsMexico[i].indicatorName);
    }
  }
  return {
    proteccionSocialMexico: proteccionSocialMexico,
    saludMexico: saludMexico,
    generoMexico: generoMexico,
    sectorMexico: sectorMexico,
    educacionMexico: educacionMexico,
    desarrolloMexico: desarrolloMexico,
    eficaciaMexico: eficaciaMexico
  }
};

const indicatorsChile = (indicatorsChile) => {
  let proteccionSocialChile = [];
  let saludChile = [];
  let generoChile = [];
  let sectorChile = [];
  let educacionChile = [];
  let desarrolloChile = [];
  let eficaciaChile = [];
  
  for (let i = 0; i < indicatorsChile.length; i++) {
    if (indicatorsChile[i].indicatorCode.split('_')[0] === 'per') {
      proteccionSocialChile.push(indicatorsChile[i].indicatorName);
    } else if (indicatorsChile[i].indicatorCode.split('.')[0] === 'SH' || indicatorsChile[i].indicatorCode.slice(0, 6) === 'SP.UWT') {
      saludChile.push(indicatorsChile[i].indicatorName);
    } else if (indicatorsChile[i].indicatorCode.split('.')[0] === 'SL' || indicatorsChile[i].indicatorCode.split('.')[0] === 'SP') {
      generoChile.push(indicatorsChile[i].indicatorName);
    } else if (indicatorsChile[i].indicatorCode.split('.')[0] === 'IC' || indicatorsChile[i].indicatorCode.split('.')[0] === 'HD') {
      sectorChile.push(indicatorsChile[i].indicatorName);
    } else if (indicatorsChile[i].indicatorCode.split('.')[0] === 'SE') {
      educacionChile.push(indicatorsChile[i].indicatorName);
    } else if (indicatorsChile[i].indicatorCode.split('.')[0] === 'SG') {
      desarrolloChile.push(indicatorsChile[i].indicatorName);
    } else if (indicatorsChile[i].indicatorCode.split('.')[0] === 'DT') {
      eficaciaChile.push(indicatorsChile[i].indicatorName);
    }
  }
  return {
    proteccionSocialChile: proteccionSocialChile,
    saludChile: saludChile,
    generoChile: generoChile,
    sectorChile: sectorChile,
    educacionChile: educacionChile,
    desarrolloChile: desarrolloChile,
    eficaciaChile: eficaciaChile
  }
};

const indicatorsBrazil = (indicatorsBrazil) => {
  let proteccionSocialBrazil = [];
  let saludBrazil = [];
  let generoBrazil = [];
  let sectorBrazil = [];
  let educacionBrazil = [];
  let desarrolloBrazil = [];
  let eficaciaBrazil = [];
  for (let i = 0; i < indicatorsBrazil.length; i++) {
    if (indicatorsBrazil[i].indicatorCode.split('_')[0] === 'per') {
      proteccionSocialBrazil.push(indicatorsBrazil[i].indicatorName);
    } else if (indicatorsBrazil[i].indicatorCode.split('.')[0] === 'SH' || indicatorsBrazil[i].indicatorCode.slice(0, 6) === 'SP.UWT') {
      saludBrazil.push(indicatorsBrazil[i].indicatorName);
    } else if (indicatorsBrazil[i].indicatorCode.split('.')[0] === 'SL' || indicatorsBrazil[i].indicatorCode.split('.')[0] === 'SP') {
      generoBrazil.push(indicatorsBrazil[i].indicatorName);
    } else if (indicatorsBrazil[i].indicatorCode.split('.')[0] === 'IC' || indicatorsBrazil[i].indicatorCode.split('.')[0] === 'HD') {
      sectorBrazil.push(indicatorsBrazil[i].indicatorName);
    } else if (indicatorsBrazil[i].indicatorCode.split('.')[0] === 'SE') {
      educacionBrazil.push(indicatorsBrazil[i].indicatorName);
    } else if (indicatorsBrazil[i].indicatorCode.split('.')[0] === 'SG') {
      desarrolloBrazil.push(indicatorsBrazil[i].indicatorName);
    } else if (indicatorsBrazil[i].indicatorCode.split('.')[0] === 'DT') {
      eficaciaBrazil.push(indicatorsBrazil[i].indicatorName);
    }
  }
  return {
    proteccionSocialBrazil: proteccionSocialBrazil,
    saludBrazil: saludBrazil,
    generoBrazil: generoBrazil,
    sectorBrazil: sectorBrazil,
    educacionBrazil: educacionBrazil,
    desarrolloBrazil: desarrolloBrazil,
    eficaciaBrazil: eficaciaBrazil
  }
};
window.worldbank = {
  indicatorsPeru: indicatorsPeru,
  indicatorsMexico: indicatorsMexico,
  indicatorsChile: indicatorsChile,
  indicatorsBrazil: indicatorsBrazil
};
