/* Manejo del DOM */
let i = 0;
const button = document.getElementById('boton');
button.addEventListener('click', () => {
  const pass = document.getElementById('pass').value;
  const userEmail = document.getElementById('email').value;
  if (pass == 'LABORATORIA') {
    let email = document.getElementById("viewEmail");
    email.innerHTML = `Su email: ${userEmail}`;
    document.getElementById('contenedor').classList.add('hide');
    document.getElementById('viewEmail').classList.remove('hide')
    document.getElementById('contenedor1').classList.remove('hide')
    document.getElementById('page1').classList.remove('hide');
  } else {
    document.getElementById("texto1").classList.add('estilo');
    i = i + 1;
    } if (i < 3) {
      document.getElementById("pass").disabled = true;
      document.getElementById("email").disabled = true;
      document.getElementById("boton").disabled = true;
    }
});
