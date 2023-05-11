window.onload = function() {
  // Seleccionamos los elementos del DOM que necesitamos
  var fechaInput = document.getElementById('fecha');
  var horaInput = document.getElementById('hora');
  var boton = document.getElementById('boton');
  var gif = document.getElementById('gif');
  var diasDiv = document.querySelector('.dias');
  var horasDiv = document.querySelector('.horas');
  var minutosDiv = document.querySelector('.minutos');
  var segundosDiv = document.querySelector('.segundos');

  // Función que se ejecuta cuando se pulsa el botón
  function empezarCuentaRegresiva() {
    // Obtenemos la fecha y hora introducidas por el usuario
    var fecha = new Date(fechaInput.value + 'T' + horaInput.value + ':00');
    
    // Obtenemos la fecha y hora actual
    var ahora = new Date();

    // Calculamos la diferencia en milisegundos entre ambas fechas
    var diferencia = fecha - ahora;

    // Comprobamos que la fecha introducida sea posterior a la fecha actual
    if (diferencia < 0) {
      alert('La fecha introducida debe ser posterior a la fecha actual');
      return;
    }

    // Ocultamos el formulario y mostramos el gif
    document.querySelector('.formulario').style.display = 'none';
    gif.style.display = 'block';

    // Actualizamos la cuenta regresiva cada segundo
    var intervalo = setInterval(function() {
      // Obtenemos la fecha y hora actual en cada iteración
      var ahora = new Date();

      // Calculamos la diferencia en milisegundos entre la fecha introducida y la fecha actual
      var diferencia = fecha - ahora;

      // Calculamos los días, horas, minutos y segundos restantes
      var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

      // Mostramos los días, horas, minutos y segundos restantes en el DOM
      diasDiv.innerHTML = dias + 'd';
      horasDiv.innerHTML = horas + 'h';
      minutosDiv.innerHTML = minutos + 'm';
      segundosDiv.innerHTML = segundos + 's';

      // Si la cuenta regresiva ha llegado a su fin, detenemos el intervalo y mostramos un mensaje
      if (diferencia < 0) {
        clearInterval(intervalo);
        document.querySelector('.tiempo-restante').innerHTML = '¡Se acabó el tiempo!';
        gif.style.display = 'none';
      }
    }, 1000);
  }

  // Añadimos un event listener al botón
  boton.addEventListener('click', empezarCuentaRegresiva);
};
