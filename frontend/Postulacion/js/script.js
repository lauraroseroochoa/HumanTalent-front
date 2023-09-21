document.getElementById("mostrarLista").addEventListener("click", function() {
    var lista = document.getElementById("miLista");
    if (lista.style.display === "none") {
      lista.style.display = "block"; // Mostrar la lista
    } else {
      lista.style.display = "none"; // Ocultar la lista
    }
  });