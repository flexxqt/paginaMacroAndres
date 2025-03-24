fetch('./img/fotos/fotos.json')
  .then(response => response.json())
  .then(imagenes => {
    let galeria = document.getElementById("galeria");

    imagenes.forEach(img => {
      let imgElement = document.createElement("img");
      imgElement.src = img.url;
      imgElement.alt = img.nombre;
      imgElement.style.width = "200px";
      galeria.appendChild(imgElement);
    });
  })
  .catch(error => console.error("Error al cargar imágenes:", error));