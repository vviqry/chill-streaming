// Toggle show/hide untuk password
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

// Fungsi toggle password
function toggleVisibility(input, icon) {
  if (input.type === "password") {
    input.type = "text";
    icon.src = "assets/visibility.svg"; // Mata terbuka
  } else {
    input.type = "password";
    icon.src = "assets/visibility_off.svg"; // Mata tertutup
  }
}

// Event listener untuk toggle password
togglePassword.addEventListener("click", () => {
  toggleVisibility(password, togglePassword);
});

toggleConfirmPassword.addEventListener("click", () => {
  toggleVisibility(confirmPassword, toggleConfirmPassword);
});

// Validasi form registrasi
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Mencegah reload

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();

  // Validasi 1: Semua field harus diisi
  if (!username || !password || !confirmPassword) {
    alert("Semua field harus diisi!");
    return;
  }

  // Validasi 2: Password minimal 6 karakter
  if (password.length < 6) {
    alert("Kata sandi minimal 6 karakter!");
    return;
  }

  // Validasi 3: Password harus sama dengan konfirmasi
  if (password !== confirmPassword) {
    alert("Kata sandi dan konfirmasi tidak cocok!");
    return;
  }

  // Validasi 4: Username tidak boleh mengandung spasi
  if (username.includes(" ")) {
    alert("Username tidak boleh mengandung spasi!");
    return;
  }

  // Simulasi pendaftaran berhasil
  alert(`Pendaftaran berhasil! Selamat datang, ${username}!`);

  // Redirect ke halaman login setelah 1 detik
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1000);
});

// Tombol Google (simulasi)
document.getElementById("googleBtn").addEventListener("click", () => {
  alert("Fitur pendaftaran dengan Google sedang dalam pengembangan!");
});
