const linkNav = document.querySelector('.link-nav');
  const reservationBtn = document.querySelector('.reservation-button-container');


  function syncButtonWidth() {
    reservationBtn.style.width = linkNav.offsetWidth + "px";
  }

  // au chargement
  syncButtonWidth();

  // à chaque resize
  window.addEventListener('resize', syncButtonWidth);