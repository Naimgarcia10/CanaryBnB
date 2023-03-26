function redirect(select) {
    if (select.value === "datos") {
      window.location.href = "../html/personal_information.html";
    }

    if (select.value === "historial") {
        window.location.href = "../html/reservationHistory.html";
      }
  }