// Código By Geovar or MartL7

let Titulo = document.title;
window.addEventListener('blur', () => {
  Titulo = document.title;
  document.title = "No quieres Shipear a tus compas?";
})
window.addEventListener('focus', () => {
  document.title = Titulo;
})

document.addEventListener("DOMContentLoaded", function () {
  const InputImagenP1 = document.getElementById("ImagenInput");
  const FotoP1 = document.getElementById("ImagenP1");

  InputImagenP1.addEventListener("change", function () {
    mostrarImagenSeleccionada(InputImagenP1, FotoP1);
  });

  const InputImagenP2 = document.getElementById("ImagenInputP2");
  const FotoP2 = document.getElementById("ImagenP2");

  InputImagenP2.addEventListener("change", function () {
    mostrarImagenSeleccionada(InputImagenP2, FotoP2);
  });

  function mostrarImagenSeleccionada(InputImagen, Foto) {
    if (InputImagen.files.length > 0) {
      const archivo = InputImagen.files[0];
      
      const objetoURL = URL.createObjectURL(archivo);

      Foto.src = objetoURL;
    }
  }
});
