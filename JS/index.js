// ========== SLIDER FUNCTIONALITY ==========
document.querySelectorAll(".slider-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const isNext = this.classList.contains("next");
    const slider = this.parentElement.querySelector(".poster-container");
    const scrollAmount = 300;

    slider.scrollBy({
      left: isNext ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  });
});

// ========== BUTTON ACTIONS ==========
document.querySelector(".play-btn").addEventListener("click", () => {
  alert('Memutar "Duty After School"...');
  // Untuk produksi: window.location.href = "player.html";
});

document.querySelector(".info-btn").addEventListener("click", () => {
  alert("Menampilkan informasi lengkap tentang film...");
  // Untuk produksi: window.open("movie-info.html", "_blank");
});

// ========== MOVIE POSTER CLICK ==========
document.querySelectorAll(".movie-poster").forEach((poster) => {
  poster.addEventListener("click", function () {
    const movieName = this.alt;
    alert(`Memilih film: ${movieName}`);
    // Untuk produksi: window.location.href = `watch.html?movie=${encodeURIComponent(movieName)}`;
  });
});

// ========== DROPDOWN PROFILE ==========
const dropdownItems = document.querySelectorAll(".dropdown-item-chill");
dropdownItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const action = this.textContent.trim();

    // Simulasi aksi dropdown
    switch (action) {
      case "Profil Saya":
        alert("Membuka halaman profil...");
        // window.location.href = "profile.html";
        break;
      case "Ubah Premium":
        alert("Membuka halaman upgrade premium...");
        // window.location.href = "premium.html";
        break;
      case "Keluar":
        if (confirm("Apakah Anda yakin ingin keluar?")) {
          alert("Logout berhasil! Mengarahkan ke halaman login...");
          // window.location.href = "login.html";
        }
        break;
      default:
        alert(`Aksi: ${action}`);
    }
  });
});

// ========== NAVBAR ACTIVE STATE ==========
// Update active link berdasarkan klik
document.querySelectorAll(".nav-menu-container a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Hapus active dari semua link
    document.querySelectorAll(".nav-menu-container a").forEach((item) => {
      item.classList.remove("active");
    });

    // Tambah active ke link yang diklik
    this.classList.add("active");

    // Simulasi navigasi
    const page = this.textContent;
    console.log(`Navigasi ke: ${page}`);
    // Untuk produksi: window.location.href = `${page.toLowerCase()}.html`;
  });
});

// ========== FOOTER LINK ACTIONS ==========
document.querySelectorAll(".footer a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const linkText = this.textContent;
    console.log(`Footer link clicked: ${linkText}`);
    // Untuk produksi: handle berdasarkan link
  });
});

// ========== WINDOW RESIZE HANDLER ==========
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    console.log(`Window resized: ${window.innerWidth} x ${window.innerHeight}`);
    // Tambahkan logika responsif tambahan jika diperlukan
  }, 250);
});

// ========== INITIALIZATION ==========
console.log("CHILL Streaming beranda siap!");
