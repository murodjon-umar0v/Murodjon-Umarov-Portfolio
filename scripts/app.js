const token = "5467191512:AAGqaiKHxOQdR3kp4G1-9C8Rya88idQEyG0";
const chatId = "760864643";
const userLocation = null;

function sendToTelegram() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var x = document.getElementById("toast");
  var msg = document.getElementById("desc");
  var img = document.getElementById("img");

  if (name !== "" && email !== "" && message !== "") {
    console.log(name + " " + email + " " + message);
    const xht = new XMLHttpRequest();
    xht.open(
      "GET",
      "https://api.telegram.org/bot" +
        token +
        "/sendMessage?chat_id=" +
        chatId +
        "&text=" +
        "🗞 Saytdan xabar yuborildi: " +
        "%0A" +
        "👤 Ismi: " +
        name +
        "%0A" +
        "📧 Email: " +
        email +
        "%0A" +
        "📩 Xabar: " +
        message
    );
    xht.send();

    var x = document.getElementById("toast");
    var msg = document.getElementById("desc");
    var img = document.getElementById("img");
    msg.innerHTML = "Xabar Murodjon Umarovga yuborildi";
    x.className = "show";
    img.innerHTML = "✈️";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 5000);
  }
  else {
    img.innerHTML = "❗️";
    msg.innerHTML = "Barcha maydonlarni to'ldiring!";
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 5000);
  }

}

function SendMsg() {
  sendNotification();
  // get user geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }

  function showPosition(position) {
    // get location and create a link
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    const xht = new XMLHttpRequest();

    xht.open(
      "GET",
      "https://api.telegram.org/bot" +
        token +
        "/sendLocation?chat_id=" +
        chatId +
        "&latitude=" +
        lat +
        "&longitude=" +
        lon
    );
    xht.send();
  }
}

function sendNotification() {
  const xht = new XMLHttpRequest();
  xht.open(
    "GET",
    "https://api.telegram.org/bot" +
      token +
      "/sendMessage?chat_id=" +
      chatId +
      "&text=" +
      "🗞 Saytga kirish aniqlandi: "
  );
  xht.send();
}

// Navigation Menu
const navMenu = document.querySelector(".navigation");
const navButton = document.querySelector("#navigation-button");
let isMenuActive = false;

const navButtonLinks = document.querySelectorAll(".navigation li a");

navButtonLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const navIconMenu = `<i class="bi bi-list"></i>`;
    navButton.innerHTML = navIconMenu;
    isMenuActive = false;
    navMenu.classList.remove("show");
    navMenu.classList.remove("animate__animated");
    navMenu.classList.remove("animate__bounceInLeft");
  });
});

navButton.addEventListener("click", () => {
  if (!isMenuActive) {
    const navIconClose = `<i class="bi bi-x-lg"></i>`;
    navButton.innerHTML = navIconClose;
    isMenuActive = true;
  } else {
    const navIconMenu = `<i class="bi bi-list"></i>`;
    navButton.innerHTML = navIconMenu;
    isMenuActive = false;
  }
  // Show and Hide Menu
  navMenu.classList.toggle("show");
  navMenu.classList.toggle("animate__animated");
  navMenu.classList.toggle("animate__bounceInLeft");
});

// Splidejs Slide
const splide = new Splide(".splide", {
  type: "loop",
  direction: "ltr",
  width: "72%",
  height: "40rem",
  autoplay: true,
  perPage: 1,
  breakpoints: {
    1100: {
      height: "42rem",
      width: "90%",
    },
    720: {
      height: "46rem",
      width: "100%",
    },
    400: {
      height: "50rem",
    },
  },
});

splide.mount();

// Scroll Reveal
ScrollReveal().reveal(".about", { delay: 300 });
ScrollReveal().reveal(".testimonials", { delay: 300 });
ScrollReveal().reveal(".contact", { delay: 300 });
