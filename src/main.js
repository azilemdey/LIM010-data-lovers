/* Manejo del DOM */
let i = 0;
const button = document.getElementById('boton');
button.addEventListener('click', () => {
  const pass = document.getElementById('pass').value;
  const userEmail = document.getElementById('email').value;
  if (pass === 'LABORATORIA') {
    let email = document.getElementById('view-email');
    email.innerHTML = `<i class="fa fa-user" aria-hidden="true"></i> ${userEmail}`;
    document.getElementById('contenedor').classList.add('hide');
    document.getElementById('cabecera').classList.remove('hide');
    document.getElementById('view-email').classList.remove('hide');
    document.getElementById('contenedor1').classList.remove('hide');
    document.getElementById('page1').classList.remove('hide');
  } else {
    document.getElementById('texto1').classList.add('estilo');
    i = i + 1;
  } if (i < 3) {
    document.getElementById('pass').disabled = true;
    document.getElementById('email').disabled = true;
    document.getElementById('boton').disabled = true;
  }
});


const selector = document.getElementById('country');
selector.addEventListener('change', () =>{
  for (i = 0; i < selector.length; i++) {
    if (selector.selectedIndex === 1) {
      document.getElementById('contenedor5').classList.add('hide');
      document.getElementById('page5').classList.add('hide');
      document.getElementById('contenedor4').classList.add('hide');
      document.getElementById('page4').classList.add('hide');
      document.getElementById('contenedor3').classList.add('hide');
      document.getElementById('page3').classList.add('hide');
      document.getElementById('contenedor2').classList.remove('hide');
      document.getElementById('page2').classList.remove('hide');
      document.getElementById('contenedor1').classList.add('hide');
      document.getElementById('page1').classList.add('hide');
    } else if (selector.selectedIndex === 2) {
      document.getElementById('contenedor5').classList.add('hide');
      document.getElementById('page5').classList.add('hide');
      document.getElementById('contenedor4').classList.add('hide');
      document.getElementById('page4').classList.add('hide');
      document.getElementById('contenedor3').classList.remove('hide');
      document.getElementById('page3').classList.remove('hide');
      document.getElementById('contenedor2').classList.add('hide');
      document.getElementById('page2').classList.add('hide');
      document.getElementById('contenedor1').classList.add('hide');
      document.getElementById('page1').classList.add('hide');
    } else if (selector.selectedIndex === 3) {
      document.getElementById('contenedor5').classList.add('hide');
      document.getElementById('page5').classList.add('hide');
      document.getElementById('contenedor4').classList.remove('hide');
      document.getElementById('page4').classList.remove('hide');
      document.getElementById('contenedor3').classList.add('hide');
      document.getElementById('page3').classList.add('hide');
      document.getElementById('contenedor2').classList.add('hide');
      document.getElementById('page2').classList.add('hide');
      document.getElementById('contenedor1').classList.add('hide');
      document.getElementById('page1').classList.add('hide');
    }
  }
});

