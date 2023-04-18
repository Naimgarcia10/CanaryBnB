function displaySelectedHotel() {
    const hotel = JSON.parse(localStorage.getItem("selectedHotel"));
    const container = document.getElementById("selectedHotel");
  
    if (hotel) {
      
  
      const name = document.createElement("h2");
      name.textContent = hotel.name;
      name.className = "hotel-name";
      container.appendChild(name);

      const image = document.createElement("img");
      image.src = hotel.image;
      image.alt = hotel.name;
      image.className = "hotel-image";
      container.appendChild(image);
  
      const description = document.createElement("p");
      description.textContent = hotel.description;
      description.className = "hotel-description";
      container.appendChild(description);
    } else {
      container.textContent = "No se encontró información del hotel seleccionado.";
    }
  }
  
  window.addEventListener("DOMContentLoaded", displaySelectedHotel);
  

  // Obtén el botón "Reserva Ya" por su id
const bookButton = document.getElementById("button_book");

// Función para redirigir a la página de pasarela de pago
function redirectToLogin() {
  window.location.href = "../html/login.html";
}

// Agrega un evento "click" al botón "Reserva Ya"
bookButton.addEventListener("click", redirectToLogin);



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
  