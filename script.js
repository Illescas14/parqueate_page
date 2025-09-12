

// ----------- Contact form -----------
document.getElementById("contact-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Gracias por contactarnos. Te responderemos pronto por WhatsApp o correo.");
  e.target.reset();
});

// ----------- Year auto update -----------
document.getElementById("year").textContent = new Date().getFullYear();
