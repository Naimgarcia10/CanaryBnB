function redirect(select) {
    if (select.value === "datos") {
      window.location.href = "../html/personal_information.html";
    }

    if (select.value === "historial") {
        window.location.href = "../html/reservationHistory.html";
      }
  }

  window.onload = function() {
    document.getElementById("back_button").addEventListener("click", function() {
      window.location.href = "../html/homePage_logged.html";
    });
  }


  /* 
  ########################################
  #     Section: Add new Reservation     #
  ########################################

  */

  // Selecciona el botón y el elemento de historial de reservas
const newReservationButton = document.getElementById('new_reservation_button');
const reservationsHistory = document.getElementById('reservations_history');

// Agrega un evento click al botón para crear una nueva reserva
newReservationButton.addEventListener('click', function() {
  // Crea un nuevo elemento li para la reserva
  const newReservation = document.createElement('li');
  newReservation.className = 'reservation'; // Agrega la clase 'reservation' al elemento li

  // Crea el contenido HTML de la reserva
  const reservationContent = `
    <img class="hotel_foto" src="../images/foto_hotel.png" alt="Foto del hotel">
    <p class="nReserva">Reserva 1</p>
    <p class="fecha">Fecha de entrada(DD/MM/YY) - Fecha de salida(DD/MM/YY)</p>
    <div class="second_row">
      <p class="num_reserva">Numero de Reserva: 123456</p>
      <p class="pers">Pers: 2</p>
    </div>
  `;

  // Agrega el contenido HTML al elemento li
  newReservation.innerHTML = reservationContent;

  // Agrega el elemento li al historial de reservas
  reservationsHistory.appendChild(newReservation);
});
