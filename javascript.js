// Ocultar la ventana emergente al inicio
document.getElementById("popup-wrapper").style.display = "none";

// Esperar 5 segundos antes de mostrar la ventana emergente
setTimeout(function() {
  // Mostrar la ventana emergente
  document.getElementById("popup-wrapper").style.display = "block";

  // Evento de click en el botón Aceptar
  document.getElementById("btn-accept").addEventListener("click", function() {
    // Redireccionar al link deseado
    window.location.href = "https://ejemplo.com/link";
    // Ocultar la ventana emergente
    document.getElementById("popup-wrapper").style.display = "none";
  });

  // Evento de click en el botón Cancelar
  document.getElementById("btn-cancel").addEventListener("click", function() {
    // Ocultar la ventana emergente
    document.getElementById("popup-wrapper").style.display = "none";
  });
}, 5000); // 5000 es igual a 5 segundos