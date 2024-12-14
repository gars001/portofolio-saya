function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
document.getElementById("send-message-btn").addEventListener("click", function () {
  // Mengambil nilai input
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Memeriksa jika semua field terisi
  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields.");
  } else {
    // Menampilkan pesan sukses
    var responseMessage = document.getElementById("response-message");
    responseMessage.style.backgroundColor = "#d4a5b5"; // Soft pink background
    responseMessage.style.color = "white"; // White text
    responseMessage.style.padding = "15px";
    responseMessage.style.borderRadius = "10px";
    responseMessage.style.marginTop = "20px";
    responseMessage.textContent = `Thank you for reaching out, ${name}! We have received your message and will get back to you soon.`;

    // Mengosongkan form
    document.getElementById("contact-form").reset();
  }
});
