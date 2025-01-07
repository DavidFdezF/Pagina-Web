document.addEventListener('DOMContentLoaded', function () {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptButton = document.getElementById('accept-cookies');

  // Verifica si la cookie ya está configurada
  function checkCookie() {
    if (!getCookie('accept_cookies')) {
      cookieBanner.style.display = 'flex';
    } else {
      cookieBanner.style.display = 'none';
    }
  }

  // Establece la cookie y oculta el banner
  function acceptCookies() {
    setCookie('accept_cookies', '1', 365);
    cookieBanner.style.display = 'none';
  }

  // Vincula el botón al evento de click
  acceptButton.addEventListener('click', acceptCookies);

  // Comprueba el estado de la cookie al cargar
  checkCookie();
});

// Funciones para manejar cookies
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value};${expires};path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();
    if (c.indexOf(name + '=') === 0) {
      return c.substring(name.length + 1, c.length);
    }
  }
  return null;
}
