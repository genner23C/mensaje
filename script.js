function mostrarSeccionAceptada() {
    alert('¡Bien! ¡ahora pon en aceptar!');
    document.getElementById('seccion-aceptada').style.display = 'block';
    document.getElementById('seccion-pregunta').style.display = 'none';
    mostrarPalpitante(); // Se llama para activar la animación del corazón palpitante
  }
  
  function dividirCorazon() {
    alert('Oh no, entendido. Tal vez la próxima vez:(');
    document.getElementById('corazon').style.animation = 'dividir 0.5s ease'; 
    setTimeout(() => {
      document.getElementById('corazon').style.display = 'none';
    }, 500);
  }
  
  function latirCorazon() {
    document.getElementById('corazon').style.animation = 'latido 1s infinite alternate'; 
  }
  
  // Esta función se llama cuando la sección oculta se muestra
  function mostrarPalpitante() {
    document.getElementById('corazon-palpitante').style.display = 'block';
  }
  