if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then(function (registration) {
      console.log("Service Worker registrado con éxito:", registration);
    })
    .catch(function (error) {
      console.log("Error al registrar el Service Worker:", error);
    });
}

const form = document.getElementById("miFormulario"); 

// Agregar un evento de submit al formulario
form.addEventListener("submit", (event) => {
  // Prevenir el comportamiento por defecto del formulario
  event.preventDefault();

  // Obtener los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const peliculas = document.getElementById("peliculas").value;
  const peliculaPoster = document.getElementById("posterPelicula").src;
  const boletos = document.getElementById("boletos").value;
  const precio = 50;
  // Crear una nueva fila en la tabla
  const fila = tabla.insertRow();

  // Crear celdas para cada valor del formulario
  const celdaNombre = fila.insertCell();
  const celdaCorreo = fila.insertCell();
  const celdaPeliculas = fila.insertCell();
  const celdaPosterPelicula = fila.insertCell();
  const celdaBoletos = fila.insertCell();
  const celdaTotal = fila.insertCell();
  const celdaEliminarActulizar = fila.insertCell();
  // Asignar los valores del formulario a las celdas
  celdaNombre.innerHTML = nombre;
  celdaCorreo.innerHTML = correo;
  celdaPeliculas.innerHTML = peliculas;
  celdaPosterPelicula.innerHTML = `<img src="${peliculaPoster}" alt="Poster de la película" width="50px" height="70px">`;
  celdaBoletos.innerHTML = boletos;
  const total = boletos * precio;
  celdaTotal.innerHTML = `$` + total;
  celdaEliminarActulizar.innerHTML = `<button type="button" class="btn btn-outline-warning editar">Editar</button>
  <button type="button" class="btn btn-outline-danger eliminar" >Eliminar</button>
`;
  // Limpiar el formulario
  form.reset();
  posterPelicula.src = "images/default.avif";
  alert("Se ha registrado correctamente");
});

const tabla = document.getElementById("tabla"); 

// Escucha los clics en los botones de "Editar" y "Eliminar"
tabla.addEventListener("click", function (event) {
  if (event.target.classList.contains("editar")) {
    
       // Obtén la fila a editar
       const fila = event.target.closest("tr");
       if (fila) {
         // Extrae los datos de la fila seleccionada para editar
         const nombre = fila.cells[0].textContent;
         const correo = fila.cells[1].textContent;
         const peliculas = fila.cells[2].textContent;
         const boletos = fila.cells[4].textContent;
  
         // Rellena el formulario con los datos de la fila
         document.getElementById("nombre").value = nombre;
         document.getElementById("correo").value = correo;
         switch(peliculas){
          case "Avatar II":
            document.getElementById("posterPelicula").src = `images/Avatar.jpg`;
            break;
          case "FNAF":
         document.getElementById("posterPelicula").src = `images/FNAF.jpg`;
            break;
          case "Evil Dead Rise":
         document.getElementById("posterPelicula").src = `images/EDR.jpg`;
            break;
          case "John Wick 4":
         document.getElementById("posterPelicula").src = `images/JW4.jpg`;
            break;
          case "La cumbre escarlata":
         document.getElementById("posterPelicula").src = `images/LCE.jpg`;
            break;
         }
         document.getElementById("peliculas").value = peliculas;
         document.getElementById("boletos").value = boletos;

         // Elimina la fila seleccionada
         fila.remove();
       }

  } else if (event.target.classList.contains("eliminar")) {
    // Código para eliminar la fila
    const rowIndex = event.target.parentElement.parentElement.rowIndex;
    if(confirm("¿Estás seguro de eliminar el registro?")){
      tabla.deleteRow(rowIndex);

    }
  }
  // alert("Se ha eliminado correctamente");
});


const nombrePeliculas = document.getElementById("peliculas");
const posterPelicula = document.getElementById("posterPelicula");

nombrePeliculas.addEventListener(
  "change",
  function () {
    switch (this.value) {
      case "Avatar II":
        posterPelicula.src = "images/Avatar.jpg";
        break;
      case "FNAF":
        posterPelicula.src = "images/FNAF.jpg";
        break;
      case "Evil Dead Rise":
        posterPelicula.src = "images/EDR.jpg";
        break;
      case "John Wick 4":
        posterPelicula.src = "images/JW4.jpg";
        break;
      case "La cumbre escarlata":
        posterPelicula.src = "images/LCE.jpg";
        break;
      default:
        posterPelicula.src = "images/default.avif";
        break;
    }
  },
  false
);
