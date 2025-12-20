// Toggle show/hide password
const password = document.getElementById("password");
const eye = document.getElementById("toggleEye");

eye.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    eye.src = "assets/visibility.svg"; // Mata terbuka
  } else {
    password.type = "password";
    eye.src = "assets/visibility_off.svg"; // Mata tertutup
  }
});

// Form validation & redirect
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Mencegah reload

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validasi sederhana
  if (!username || !password) {
    alert("Username dan kata sandi harus diisi!");
    return;
  }

  // Simulasi login berhasil
  alert(`Selamat datang, ${username}! Anda akan diarahkan ke beranda.`);
  window.location.href = "index.html"; // Ganti dengan halaman beranda
});

// Google button click (simulasi)
document.querySelector(".btn-google").addEventListener("click", () => {
  alert("Fitur login dengan Google sedang dalam pengembangan!");
});
