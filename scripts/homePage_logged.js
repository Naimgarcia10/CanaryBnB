function displayHotels() {
  const destination = localStorage.getItem("searchedDestination");
  const hotelList = document.getElementById("hotelList");

  fetch("../data/hotels.json")
    .then((response) => response.json())
    .then((data) => {
      const hotels = data[destination];
      const sortOption = document.getElementById("sort").value;

      if (hotels) {
        // Ordena los hoteles según la opción seleccionada
        hotels.sort((a, b) => {
          if (sortOption === "price") {
            return a.price - b.price;
          } else if (sortOption === "rating") {
            return b.rating - a.rating;
          }
        });

        hotels.forEach((hotel) => {
          const hotelDiv = document.createElement("div");
          hotelDiv.classList.add("hotel");

          // Agrega la imagen del hotel
          const image = document.createElement("img");
          image.classList.add("hotel-image");
          image.src = hotel.image;
          image.alt = `Imagen del ${hotel.name}`;
          hotelDiv.appendChild(image);

          const detailsDiv = document.createElement("div");
          detailsDiv.classList.add("hotel-details");

          const name = document.createElement("div");
          name.classList.add("name");
          name.textContent = hotel.name;
          hotelDiv.appendChild(name);
          detailsDiv.appendChild(name);

          const rating = document.createElement("div");
          rating.classList.add("rating");
          rating.textContent = `Valoración: ${hotel.rating}`;
          hotelDiv.appendChild(rating);
          detailsDiv.appendChild(rating);

          const beds = document.createElement("div");
          beds.classList.add("beds");
          beds.textContent = `Camas: ${hotel.numBeds}`;
          hotelDiv.appendChild(beds);
          detailsDiv.appendChild(beds);

          const price = document.createElement("div");
          price.classList.add("price");
          price.textContent = `Precio: ${hotel.price}`;
          hotelDiv.appendChild(price);
          detailsDiv.appendChild(price);

          const rooms = document.createElement("div");
          rooms.classList.add("rooms");
          rooms.textContent = `Habitaciones: ${hotel.numRooms}`;
          hotelDiv.appendChild(rooms);
          detailsDiv.appendChild(rooms);

          const bathrooms = document.createElement("div");
          bathrooms.classList.add("bathrooms");
          bathrooms.textContent = `Baños: ${hotel.numBathrooms}`;
          hotelDiv.appendChild(bathrooms);
          detailsDiv.appendChild(bathrooms);

          const cancellation = document.createElement("div");
          cancellation.classList.add("cancellation");
          cancellation.textContent = `Cancelación gratuita: ${hotel.freeCancellation ? "Sí" : "No"}`;
          hotelDiv.appendChild(cancellation);
          detailsDiv.appendChild(cancellation);


          hotelList.appendChild(hotelDiv);
          hotelDiv.appendChild(detailsDiv);
        });
      } else {
        hotelList.textContent = "No se encontraron hoteles para el destino ingresado.";
      }
    })
    .catch((error) => {
      console.error("Error al cargar los hoteles:", error);
      hotelList.textContent = "Hubo un error al cargar los hoteles.";
    });
}


function searchHotels() {
  const destination = document.getElementById("destination").value;
  if (destination === "") {
    alert("Por favor, ingrese un destino.");
    return;
  }

  // Guarda el destino en localStorage para usarlo en availableHotels2.html
  localStorage.setItem("searchedDestination", destination);

  // Redirige a la página de hoteles disponibles
  window.location.href = "../html/availableHotels_logged.html";
}

// Añade un evento "change" al elemento select
document.getElementById("sort").addEventListener("change", () => {
  // Limpia la lista de hoteles antes de volver a mostrarlos
  document.getElementById("hotelList").innerHTML = "";
  displayHotels();
});


// Obtener los botones por su id
const signInButton = document.getElementById("button_signIn");
const signUpButton = document.getElementById("button_signUp");

// Función para redirigir a la página de login
function redirectToLogin() {
  location.href = "../html/login.html";
}

// Función para redirigir a la página de registro
function redirectToRegister() {
  location.href = "../html/register.html";
}

// Agregar evento click al botón Sign In
signInButton.addEventListener("click", redirectToLogin);

// Agregar evento click al botón Sign Up
signUpButton.addEventListener("click", redirectToRegister);

// Función para redirigir a la página de información personal o historial de reservas
function redirect(select) {
  if (select.value === "datos") {
    window.location.href = "../html/personal_information.html";
  }

  if (select.value === "historial") {
    window.location.href = "../html/reservationHistory.html";
  }
}

function displayTopRatedHotels() {
  fetch("../data/hotels.json")
    .then((response) => response.json())
    .then((data) => {
      const allHotels = Object.values(data).flat();
      const topRatedHotels = allHotels
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 2);

      const recomendationsDiv = document.querySelector(".recomendations");
      topRatedHotels.forEach((hotel) => {
        const img = document.createElement("img");
        img.src = hotel.image;
        img.alt = `Foto del ${hotel.name}`;
        img.classList.add("hotel_foto");
        
        // Agregar evento de clic a la imagen
        img.addEventListener("click", () => {
          localStorage.setItem("selectedHotel", JSON.stringify(hotel));
          window.location.href = "../html/specific_hotel_logged.html";
        });

        recomendationsDiv.appendChild(img);
      });
    })
    .catch((error) => {
      console.error("Error al cargar los hoteles:", error);
    });
}


document.addEventListener("DOMContentLoaded", () => {
  displayTopRatedHotels();
});



function displayHotels() {
  const destination = localStorage.getItem("searchedDestination");
  const hotelList = document.getElementById("hotelList");

  fetch("../data/hotels.json")
    .then((response) => response.json())
    .then((data) => {
      const hotels = data[destination];
      const sortOption = document.getElementById("sort").value;

      if (hotels) {
        // Ordena los hoteles según la opción seleccionada
        hotels.sort((a, b) => {
          if (sortOption === "price") {
            return a.price - b.price;
          } else if (sortOption === "rating") {
            return b.rating - a.rating;
          }
        });

        hotels.forEach((hotel) => {
          const hotelDiv = document.createElement("div");
          hotelDiv.classList.add("hotel");
        
          // Agrega un evento "click" a cada div de hotel
          hotelDiv.addEventListener("click", () => {
            localStorage.setItem("selectedHotel", JSON.stringify(hotel));
            window.location.href = "../html/specific_hotel_unLogged.html";
          });

          // Agrega la imagen del hotel
          const image = document.createElement("img");
          image.classList.add("hotel-image");
          image.src = hotel.image;
          image.alt = `Imagen del ${hotel.name}`;
          hotelDiv.appendChild(image);

          const detailsDiv = document.createElement("div");
          detailsDiv.classList.add("hotel-details");

          const name = document.createElement("div");
          name.classList.add("name");
          name.textContent = hotel.name;
          hotelDiv.appendChild(name);
          detailsDiv.appendChild(name);

          const rating = document.createElement("div");
          rating.classList.add("rating");
          rating.textContent = `Valoración: ${hotel.rating}`;
          hotelDiv.appendChild(rating);
          detailsDiv.appendChild(rating);

          const beds = document.createElement("div");
          beds.classList.add("beds");
          beds.textContent = `Camas: ${hotel.numBeds}`;
          hotelDiv.appendChild(beds);
          detailsDiv.appendChild(beds);

          const price = document.createElement("div");
          price.classList.add("price");
          price.textContent = `Precio: ${hotel.price}`;
          hotelDiv.appendChild(price);
          detailsDiv.appendChild(price);

          const rooms = document.createElement("div");
          rooms.classList.add("rooms");
          rooms.textContent = `Habitaciones: ${hotel.numRooms}`;
          hotelDiv.appendChild(rooms);
          detailsDiv.appendChild(rooms);

          const bathrooms = document.createElement("div");
          bathrooms.classList.add("bathrooms");
          bathrooms.textContent = `Baños: ${hotel.numBathrooms}`;
          hotelDiv.appendChild(bathrooms);
          detailsDiv.appendChild(bathrooms);

          const cancellation = document.createElement("div");
          cancellation.classList.add("cancellation");
          cancellation.textContent = `Cancelación gratuita: ${hotel.freeCancellation ? "Sí" : "No"}`;
          hotelDiv.appendChild(cancellation);
          detailsDiv.appendChild(cancellation);


          hotelList.appendChild(hotelDiv);
          hotelDiv.appendChild(detailsDiv);
        });
      } else {
        hotelList.textContent = "No se encontraron hoteles para el destino ingresado.";
      }
    })
    .catch((error) => {
      console.error("Error al cargar los hoteles:", error);
      hotelList.textContent = "Hubo un error al cargar los hoteles.";
    });
}


function searchHotels() {
  const destination = document.getElementById("destination").value;
  if (destination === "") {
    alert("Por favor, ingrese un destino.");
    return;
  }

  // Guarda el destino en localStorage para usarlo en availableHotels2.html
  localStorage.setItem("searchedDestination", destination);

  // Redirige a la página de hoteles disponibles
  window.location.href = "../html/availableHotels_logged.html";
}

// Añade un evento "change" al elemento select
document.getElementById("sort").addEventListener("change", () => {
  // Limpia la lista de hoteles antes de volver a mostrarlos
  document.getElementById("hotelList").innerHTML = "";
  displayHotels();
});


// Obtener los botones por su id


// Agregar evento click al botón Sign In
signInButton.addEventListener("click", redirectToLogin);

// Agregar evento click al botón Sign Up
signUpButton.addEventListener("click", redirectToRegister);

// Función para redirigir a la página de información personal o historial de reservas
function redirect(select) {
  if (select.value === "datos") {
    window.location.href = "../html/personal_information.html";
  }

  if (select.value === "historial") {
    window.location.href = "../html/reservationHistory.html";
  }
}

