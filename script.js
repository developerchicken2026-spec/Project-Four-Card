const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]',
);

function switchTheme(e) {
  if (e.target.checked) {
    document.body.classList.add("dark-theme");
    // Mẹo: Lưu trạng thái vào localStorage để lần sau vào web nó vẫn tối
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme);

// Mẹo: Kiểm tra trạng thái đã lưu khi tải trang
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.body.classList.add(currentTheme + "-theme");
  if (currentTheme === "dark") {
    toggleSwitch.checked = true; // Bật cái nút switch lên
  }
}
